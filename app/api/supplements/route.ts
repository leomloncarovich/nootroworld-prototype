import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/supplements - Listar todos os supplements
export async function GET() {
  try {
    const supplements = await prisma.supplement.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(supplements)
  } catch (error) {
    console.error('Error fetching supplements:', error)
    return NextResponse.json(
      { error: 'Failed to fetch supplements' },
      { status: 500 }
    )
  }
}

// POST /api/supplements - Criar um novo supplement
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description, price } = body

    if (!name || !price) {
      return NextResponse.json(
        { error: 'Name and price are required' },
        { status: 400 }
      )
    }

    const supplement = await prisma.supplement.create({
      data: {
        name,
        description,
        price: parseFloat(price)
      }
    })

    return NextResponse.json(supplement, { status: 201 })
  } catch (error) {
    console.error('Error creating supplement:', error)
    return NextResponse.json(
      { error: 'Failed to create supplement' },
      { status: 500 }
    )
  }
} 