"use client"

// ===== PÁGINA DETALHADA DE SUPLEMENTO - ZINC =====
// Refatorada para usar componentes globais reutilizáveis
// Implementado em 30/05/2024 - Atualizado com componentes globais

import { useEffect, useState, useRef } from "react"
import { SupplementLayout } from "@/components/layout"
import { 
  SupplementHero, 
  BenefitsSection, 
  UsageGuideSection, 
  ProductRankingSection 
} from "@/components/supplement"

// ===== INTERFACES ESPECÍFICAS PARA ZINC =====
interface Product {
  id: number
  rank?: number
  name: string
  brand: string
  price: string
  rating: number
  reviews: number
  dosage: string
  capsules: string
  badge?: string
}

interface UsageGuide {
  timing?: string
  timingDesc?: string
  withFood?: string
  withFoodDesc?: string
  timeToEffect?: string
  effectDesc?: string
}

interface Benefit {
  name: string
  description?: string
}

interface Supplement {
  id: number
  name: string
  description: string
  category: string
  rating: number
  reviews: number
  topPrice: string
  badge?: string
  link?: string
  benefits: Benefit[]
  products: Product[]
  usageGuide?: UsageGuide
}

export default function ZincPage() {
  // ===== ESTADOS SIMPLES =====
  const [supplement, setSupplement] = useState<Supplement | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const hasFetched = useRef(false)

  // ===== BUSCA DADOS DO ZINC =====
  useEffect(() => {
    async function fetchZincData() {
      if (hasFetched.current) return
      
      hasFetched.current = true
      
      try {
        console.log('🔍 Fetching zinc data...')
        const response = await fetch('/api/supplements/1')
        if (!response.ok) {
          throw new Error('Failed to fetch zinc details')
        }
        const detailData = await response.json()
        setSupplement(detailData)
        console.log('✅ Zinc data loaded successfully')
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        hasFetched.current = false
      } finally {
        setLoading(false)
      }
    }

    fetchZincData()
  }, [])

  // ===== RENDERIZAÇÃO COM LAYOUT GLOBAL =====
  return (
    <SupplementLayout
      loading={loading}
      error={error}
      loadingMessage="Loading zinc information..."
    >
      {supplement && (
        <>
          <SupplementHero 
            name={supplement.name}
            description={supplement.description}
          />
          
          <BenefitsSection 
            supplementName={supplement.name}
            benefits={supplement.benefits}
          />
          
          {supplement.usageGuide && (
            <UsageGuideSection 
              supplementName={supplement.name}
              usageGuide={supplement.usageGuide}
            />
          )}
          
          <ProductRankingSection 
            supplementName={supplement.name}
            products={supplement.products}
          />
        </>
      )}
    </SupplementLayout>
  )
}
