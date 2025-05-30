// ===== API DE CATEGORIAS - NOOTROWORLD =====
// Endpoints para gerenciamento das categorias de suplementos
// Implementado em 30/05/2024 para organização dos produtos
// Categorias: Minerals, Vitamins, Fatty Acids, Proteins, Digestive, Performance

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// ===== GET /api/categories =====
// Lista todas as categorias disponíveis no sistema
// Inclui contagem de suplementos por categoria
// Usado para navegação, filtros e estatísticas
export async function GET() {
  try {
    // Busca todas as categorias com contagem de suplementos
    const categories = await prisma.category.findMany({
      include: {
        // ===== CONTAGEM DE SUPLEMENTOS =====
        // Conta quantos suplementos existem em cada categoria
        _count: {
          select: {
            supplements: true      // Número de suplementos por categoria
          }
        }
      },
      // ===== ORDENAÇÃO ALFABÉTICA =====
      orderBy: {
        name: 'asc'              // Ordena categorias por nome (A-Z)
      }
    })
    
    return NextResponse.json(categories)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    )
  }
}

// ===== POST /api/categories =====
// Cria uma nova categoria de suplementos
// Usado para expandir o sistema com novas classificações
// Ex: Herbs, Adaptogens, Sports Nutrition, etc.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description } = body

    // ===== VALIDAÇÃO DOS DADOS =====
    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    // ===== CRIAÇÃO DA CATEGORIA =====
    // Cria nova categoria no banco de dados
    const category = await prisma.category.create({
      data: {
        name,                    // Nome da categoria (obrigatório)
        description              // Descrição da categoria (opcional)
      }
    })

    return NextResponse.json(category, { status: 201 })
  } catch (error) {
    console.error('Error creating category:', error)
    return NextResponse.json(
      { error: 'Failed to create category' },
      { status: 500 }
    )
  }
} 