"use client"

// ===== PÁGINA DETALHADA DE SUPLEMENTO - VITAMIN D3 =====
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

// ===== INTERFACES ESPECÍFICAS PARA VITAMIN D3 =====
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

export default function VitaminD3Page() {
  // ===== ESTADOS SIMPLES =====
  const [supplement, setSupplement] = useState<Supplement | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const hasFetched = useRef(false)

  // ===== BUSCA DADOS DA VITAMIN D3 =====
  useEffect(() => {
    async function fetchVitaminD3Data() {
      if (hasFetched.current) return
      
      hasFetched.current = true
      
      try {
        console.log('🔍 Fetching Vitamin D3 data...')
        const response = await fetch('/api/supplements/2')
        if (!response.ok) {
          throw new Error('Failed to fetch vitamin D3 details')
        }
        const detailData = await response.json()
        setSupplement(detailData)
        console.log('✅ Vitamin D3 data loaded successfully')
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        hasFetched.current = false
      } finally {
        setLoading(false)
      }
    }

    fetchVitaminD3Data()
  }, [])

  // ===== RENDERIZAÇÃO COM LAYOUT GLOBAL =====
  return (
    <SupplementLayout
      loading={loading}
      error={error}
      loadingMessage="Loading Vitamin D3 information..."
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
