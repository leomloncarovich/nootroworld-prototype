"use client"

// ===== PÁGINA DINÂMICA DE SUPLEMENTO - NOOTROWORLD =====
// Página universal que renderiza qualquer suplemento baseado no slug
// Agora segue o mesmo padrão das páginas específicas (zinc, vitamin-d3, vitamin-c)
// Usa componentes modulares para consistência

import { useEffect, useState, useRef, use } from "react"
import { notFound } from 'next/navigation'
import { SupplementLayout } from "@/components/layout"
import { 
  SupplementHero, 
  BenefitsSection, 
  UsageGuideSection, 
  ProductRankingSection 
} from "@/components/supplement"

// ===== INTERFACES (MESMAS DAS PÁGINAS ESPECÍFICAS) =====
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

interface SupplementPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function SupplementPage({ params }: SupplementPageProps) {
  // ===== UNWRAP PARAMS USING React.use() =====
  const resolvedParams = use(params)
  
  // ===== ESTADOS SIMPLES (MESMO PADRÃO DAS PÁGINAS ESPECÍFICAS) =====
  const [supplement, setSupplement] = useState<Supplement | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const hasFetched = useRef(false)

  // ===== BUSCA DADOS DO SUPLEMENTO =====
  useEffect(() => {
    async function fetchSupplementData() {
      if (hasFetched.current) return
      
      hasFetched.current = true
      
      try {
        console.log(`🔍 Fetching ${resolvedParams.slug} data...`)
        
        // Busca todos os suplementos
        const response = await fetch('/api/supplements')
        if (!response.ok) {
          throw new Error('Failed to fetch supplements')
        }
        
        const supplements = await response.json()
        
        // Converte o slug para o nome do suplemento
        const supplementName = resolvedParams.slug
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
          .replace(/\b(And|Or|Of|In|On|At|The|A|An)\b/g, word => word.toLowerCase())
          .replace(/\bD3\b/g, 'D3')
          .replace(/\bB12\b/g, 'B12')
          .replace(/\bC\b/g, 'C')
          .replace(/\bK2\b/g, 'K2')
          .replace(/\bQ10\b/g, 'Q10')
          .replace(/\b3\b/g, '3')
        
        // Busca o suplemento pelo nome
        const foundSupplement = supplements.find((s: any) => 
          s.name.toLowerCase() === supplementName.toLowerCase() ||
          s.name.toLowerCase().replace(/\s+/g, '-') === resolvedParams.slug.toLowerCase()
        )
        
        if (!foundSupplement) {
          throw new Error('Supplement not found')
        }
        
        setSupplement(foundSupplement)
        console.log(`✅ ${foundSupplement.name} data loaded successfully`)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        hasFetched.current = false
      } finally {
        setLoading(false)
      }
    }

    fetchSupplementData()
  }, [resolvedParams.slug])

  // ===== RENDERIZAÇÃO COM LAYOUT GLOBAL (MESMO PADRÃO) =====
  if (!loading && !error && !supplement) {
    notFound()
  }

  return (
    <SupplementLayout
      loading={loading}
      error={error}
      loadingMessage={`Loading ${resolvedParams.slug.replace('-', ' ')} information...`}
      headerProps={{
        showBackButton: true,
        backButtonText: "Back to Supplements",
        backButtonHref: "/supplements"
      }}
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