import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

// ===== API DE SUPLEMENTOS - NOOTROWORLD =====
// Endpoints para gerenciamento completo de suplementos
// Implementado em 30/05/2024 com toda a estrutura relacional

// GET /api/supplements - Listar todos os supplements com todas as relações
// Retorna lista completa de suplementos com categorias, benefícios, produtos e guias de uso
// Inclui lógica de ordenação para priorizar suplementos recomendados
export async function GET() {
  try {
    // Busca todos os suplementos com todas as relações necessárias
    // Inclui: categoria, benefícios, produtos (ordenados por rank) e guia de uso
    const supplements = await prisma.supplement.findMany({
      include: {
        category: true,               // Categoria do suplemento (ex: Vitaminas)
        benefits: {                   // Benefícios do suplemento (many-to-many)
          include: {
            benefit: true
          }
        },
        products: {                   // Produtos/marcas disponíveis
          orderBy: {
            rank: 'asc'              // Ordena por ranking (melhores primeiro)
          }
        },
        usageGuide: true             // Guia de uso específico
      }
    })
    
    // Transforma os dados para o formato esperado pelo frontend
    // Simplifica a estrutura de benefícios e mantém compatibilidade
    const transformedSupplements = supplements.map((supplement: any) => ({
      id: supplement.id,
      name: supplement.name,
      description: supplement.description,
      category: supplement.category.name,  // Retorna apenas o nome da categoria
      rating: supplement.rating,
      reviews: supplement.reviews,
      topPrice: supplement.topPrice,
      badge: supplement.badge,
      link: supplement.link,
      benefits: supplement.benefits.map((sb: any) => ({
        name: sb.benefit.name,
        description: sb.benefit.description
      })), // Array de objetos com name e description
      products: supplement.products,
      usageGuide: supplement.usageGuide,
      updatedAt: supplement.updatedAt
    }))

    // ===== LÓGICA DE ORDENAÇÃO INTELIGENTE =====
    // Define quais suplementos são prioritários na listagem
    const recommendedSupplements = ['Zinc', 'Vitamin D3', 'Vitamin C']
    
    // Ordena para mostrar suplementos recomendados primeiro
    // Mantém ordem específica para recomendados, depois por data de atualização
    const sortedSupplements = transformedSupplements.sort((a, b) => {
      const aIndex = recommendedSupplements.indexOf(a.name)
      const bIndex = recommendedSupplements.indexOf(b.name)
      
      // Se ambos são recomendados, mantém a ordem definida no array
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex
      }
      
      // Se apenas 'a' é recomendado, ele vem primeiro
      if (aIndex !== -1 && bIndex === -1) {
        return -1
      }
      
      // Se apenas 'b' é recomendado, ele vem primeiro
      if (aIndex === -1 && bIndex !== -1) {
        return 1
      }
      
      // Se nenhum é recomendado, ordena por data de atualização (mais recente primeiro)
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    })
    
    return NextResponse.json(sortedSupplements)
  } catch (error) {
    console.error('Error fetching supplements:', error)
    return NextResponse.json(
      { error: 'Failed to fetch supplements' },
      { status: 500 }
    )
  }
}

// POST /api/supplements - Criar um novo supplement
// Endpoint completo para criação de suplementos com todas as relações
// Inclui criação automática de benefícios, produtos e guias de uso
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      description, 
      categoryId, 
      rating = 0, 
      reviews = 0, 
      topPrice, 
      badge, 
      link,
      benefits = [],      // Array de nomes de benefícios
      products = [],      // Array de objetos de produtos
      usageGuide          // Objeto com guia de uso
    } = body

    // ===== VALIDAÇÃO DOS CAMPOS OBRIGATÓRIOS =====
    if (!name || !categoryId || !topPrice) {
      return NextResponse.json(
        { error: 'Name, categoryId and topPrice are required' },
        { status: 400 }
      )
    }

    // ===== CRIAÇÃO DO SUPLEMENTO BASE =====
    const supplement = await prisma.supplement.create({
      data: {
        name,
        description,
        categoryId: parseInt(categoryId),
        rating: parseFloat(rating),
        reviews: parseInt(reviews),
        topPrice,
        badge,
        link
      },
      include: {
        category: true,
        benefits: {
          include: {
            benefit: true
          }
        },
        products: true,
        usageGuide: true
      }
    })

    // ===== PROCESSAMENTO DOS BENEFÍCIOS =====
    // Cria relacionamentos many-to-many com benefícios
    // Cria novos benefícios se não existirem
    if (benefits.length > 0) {
      for (const benefitName of benefits) {
        // Busca benefício existente ou cria novo
        let benefit = await prisma.benefit.findUnique({
          where: { name: benefitName }
        })
        
        if (!benefit) {
          benefit = await prisma.benefit.create({
            data: { name: benefitName }
          })
        }
        
        // Cria relacionamento suplemento-benefício
        await prisma.supplementBenefit.create({
          data: {
            supplementId: supplement.id,
            benefitId: benefit.id
          }
        })
      }
    }

    // ===== CRIAÇÃO DOS PRODUTOS =====
    // Adiciona todos os produtos/marcas relacionados ao suplemento
    if (products.length > 0) {
      for (const product of products) {
        await prisma.product.create({
          data: {
            ...product,
            supplementId: supplement.id
          }
        })
      }
    }

    // ===== CRIAÇÃO DO GUIA DE USO =====
    // Adiciona instruções específicas de como usar o suplemento
    if (usageGuide) {
      await prisma.usageGuide.create({
        data: {
          ...usageGuide,
          supplementId: supplement.id
        }
      })
    }

    // ===== RETORNO DO SUPLEMENTO COMPLETO =====
    // Busca novamente para garantir que todas as relações estão incluídas
    const completeSuplement = await prisma.supplement.findUnique({
      where: { id: supplement.id },
      include: {
        category: true,
        benefits: {
          include: {
            benefit: true
          }
        },
        products: {
          orderBy: {
            rank: 'asc'
          }
        },
        usageGuide: true
      }
    })

    return NextResponse.json(completeSuplement, { status: 201 })
  } catch (error) {
    console.error('Error creating supplement:', error)
    return NextResponse.json(
      { error: 'Failed to create supplement' },
      { status: 500 }
    )
  }
} 