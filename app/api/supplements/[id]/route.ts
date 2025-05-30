// ===== API DINÂMICA DE SUPLEMENTO INDIVIDUAL - [ID] =====
// Endpoint para buscar dados completos de um suplemento específico
// Implementado em 30/05/2024 para páginas detalhadas (Zinc, Vitamin D3, Vitamin C)
// Rota: /api/supplements/[id] - GET method

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// ===== GET /api/supplements/[id] =====
// Busca um supplement específico com TODOS os detalhes relacionados
// Usado pelas páginas individuais para carregar dados completos
// Inclui: category, benefits, products (rankeados), usage guide
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // ===== EXTRAÇÃO E VALIDAÇÃO DO ID =====
    const { id } = await params
    const supplementId = parseInt(id)
    
    // Valida se o ID é um número válido
    if (isNaN(supplementId)) {
      return NextResponse.json(
        { error: 'Invalid supplement ID' },
        { status: 400 }
      )
    }

    // ===== BUSCA COMPLETA NO BANCO =====
    // Inclui TODAS as relações necessárias para a página detalhada
    const supplement = await prisma.supplement.findUnique({
      where: { id: supplementId },
      include: {
        category: true,              // Categoria do suplemento
        benefits: {                  // Benefícios com descrições completas
          include: {
            benefit: true            // Dados completos do benefício
          }
        },
        products: {                  // Produtos rankeados (marcas)
          orderBy: {
            rank: 'asc'             // Ordena por ranking (1=melhor)
          }
        },
        usageGuide: true            // Guia de uso completo
      }
    })

    // ===== VALIDAÇÃO DE EXISTÊNCIA =====
    if (!supplement) {
      return NextResponse.json(
        { error: 'Supplement not found' },
        { status: 404 }
      )
    }

    // ===== TRANSFORMAÇÃO DOS DADOS =====
    // Formata os dados para o formato esperado pelo frontend
    // Simplifica estruturas aninhadas e mantém compatibilidade
    const transformedSupplement = {
      id: supplement.id,
      name: supplement.name,
      description: supplement.description,
      category: supplement.category.name,         // Apenas o nome da categoria
      rating: supplement.rating,
      reviews: supplement.reviews,
      topPrice: supplement.topPrice,
      badge: supplement.badge,
      link: supplement.link,
      // ===== BENEFÍCIOS TRANSFORMADOS =====
      // Converte de estrutura relacional para array simples
      benefits: supplement.benefits.map(sb => ({
        name: sb.benefit.name,                   // Nome do benefício
        description: sb.benefit.description     // Descrição completa
      })),
      // ===== PRODUTOS MANTIDOS COMO ESTÃO =====
      // Já estão ordenados por rank (melhor primeiro)
      products: supplement.products,
      // ===== GUIA DE USO DIRETO =====
      // Objeto completo com todas as instruções
      usageGuide: supplement.usageGuide
    }

    return NextResponse.json(transformedSupplement)
  } catch (error) {
    console.error('Error fetching supplement:', error)
    return NextResponse.json(
      { error: 'Failed to fetch supplement' },
      { status: 500 }
    )
  }
} 