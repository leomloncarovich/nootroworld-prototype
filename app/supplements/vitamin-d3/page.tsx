"use client"

// ===== PÁGINA DETALHADA DE SUPLEMENTO - VITAMIN D3 =====
// Página específica para Vitamin D3 com informações completas
// Implementado em 30/05/2024 seguindo o padrão da página de Zinc
// Inclui: benefícios específicos, guia de uso personalizado, produtos rankeados

// ===== IMPORTS E INTERFACES =====
// Utiliza os mesmos componentes e estruturas da página de Zinc
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Utensils, Calendar, Star, Award, Medal, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

// Interfaces idênticas às da página de Zinc (padrão do sistema)
interface Product {
  id: number
  rank?: number          // Ranking específico para Vitamin D3
  name: string           // Produtos como "D3 High Potency", "D3 + K2"
  brand: string          // Marcas como "SunVit", "BoneHealth"
  price: string          // Preços específicos de D3
  rating: number
  reviews: number
  dosage: string         // Dosagens típicas: "5000 IU", "2000 IU"
  capsules: string       // Formatos: cápsulas, drops, gummies
  badge?: string         // "Best Choice", "Enhanced Formula"
}

interface UsageGuide {
  timing?: string        // "Morning with breakfast" (específico para D3)
  timingDesc?: string    // Instruções sobre absorção com gorduras
  withFood?: string      // "With food" (importante para D3)
  withFoodDesc?: string  // Detalhes sobre gorduras saudáveis
  timeToEffect?: string  // "4-6 weeks" (tempo típico para D3)
  effectDesc?: string    // Descrição dos efeitos de D3
}

interface Benefit {
  name: string           // "Bone Health", "Immune System", "Mood"
  description?: string   // Benefícios específicos da Vitamin D3
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
  // ===== ESTADOS IDÊNTICOS AO PADRÃO =====
  const [supplement, setSupplement] = useState<Supplement | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const hasFetched = useRef(false)

  // ===== BUSCA DADOS ESPECÍFICOS DA VITAMIN D3 =====
  useEffect(() => {
    async function fetchVitaminD3Data() {
      if (hasFetched.current) {
        console.log('⚠️ Skipping duplicate fetch call')
        return
      }
      
      hasFetched.current = true
      
      try {
        console.log('🔍 Fetching Vitamin D3 data...')
        // Busca Vitamin D3 (ID = 2) com produtos específicos de D3
        // Inclui produtos como D3+K2, diferentes dosagens (IU), formatos variados
        const response = await fetch('/api/supplements/2')
        if (!response.ok) {
          throw new Error('Failed to fetch vitamin D3 details')
        }
        const detailData = await response.json()
        setSupplement(detailData)
        console.log('✅ Vitamin D3 data loaded successfully')
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        hasFetched.current = false // Reset em caso de erro para permitir retry
      } finally {
        setLoading(false)
      }
    }

    fetchVitaminD3Data()
  }, [])

  // ===== FUNÇÃO DE ÍCONES DE RANKING =====
  // Mesma lógica de ícones para ranking de produtos
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />     // Melhor produto D3
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />       // Segundo melhor
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />      // Terceiro lugar
      default:
        return <span className="text-sm font-bold text-gray-600">#{rank}</span>
    }
  }

  // ===== TELAS DE LOADING E ERRO =====
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Vitamin D3 information...</p>
        </div>
      </div>
    )
  }

  if (error || !supplement) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg">Error: {error || 'Supplement not found'}</p>
          <Button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-green-600 hover:bg-green-700"
          >
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  // ===== PROCESSAMENTO DOS PRODUTOS D3 =====
  const topPicks = supplement.products.filter(p => p.rank && p.rank <= 3).sort((a, b) => (a.rank || 0) - (b.rank || 0))
  const allProducts = supplement.products.sort((a, b) => (a.rank || 0) - (b.rank || 0))

  // ===== RENDERIZAÇÃO DA PÁGINA D3 =====
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ===== HEADER PADRÃO ===== */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/nootroworld-logo.png"
                  alt="NootroWorld"
                  width={140}
                  height={56}
                  className="h-20 w-auto"
                />
              </Link>
            </div>
            <Link href="/supplements">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Supplements</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* ===== CONTEÚDO ESPECÍFICO DA VITAMIN D3 ===== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ===== TÍTULO E DESCRIÇÃO DA D3 ===== */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{supplement.name}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {supplement.description}
          </p>
        </div>

        {/* ===== BENEFÍCIOS ESPECÍFICOS DA VITAMIN D3 ===== */}
        {/* Bone Health, Immune System, Mood, Muscle Function */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">How {supplement.name} Helps Our Body</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supplement.benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{benefit.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ===== GUIA DE USO ESPECÍFICO PARA D3 ===== */}
        {/* Instruções sobre tomar com gordura, horário matinal, etc. */}
        {supplement.usageGuide && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">📋 How to Take {supplement.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-lg">Best Time</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">
                    <strong>{supplement.usageGuide.timing}</strong>
                  </p>
                  <p className="text-gray-600">{supplement.usageGuide.timingDesc}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Utensils className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-lg">With or Without Food</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">
                    <strong>{supplement.usageGuide.withFood}</strong>
                  </p>
                  <p className="text-gray-600">{supplement.usageGuide.withFoodDesc}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-lg">Time to Effect</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">
                    <strong>{supplement.usageGuide.timeToEffect}</strong>
                  </p>
                  <p className="text-gray-600">{supplement.usageGuide.effectDesc}</p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Top 3 Picks */}
        {topPicks.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">🏆 Top 3 Best {supplement.name} Supplements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topPicks.map((product) => (
                <Card key={product.id} className="relative hover:shadow-lg transition-shadow duration-300">
                  {product.badge && (
                    <div className="absolute -top-3 left-4">
                      <Badge className="bg-green-600 text-white">{product.badge}</Badge>
                    </div>
                  )}
                  <CardHeader className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      {product.rank && getRankIcon(product.rank)}
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.brand}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Dosage:</span>
                        <span className="font-medium">{product.dosage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Capsules:</span>
                        <span className="font-medium">{product.capsules}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">{product.price}</span>
                      <Button className="bg-green-600 hover:bg-green-700">View Product</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Complete Ranking */}
        {allProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              📊 Complete Ranking - Top {allProducts.length} {supplement.name} Supplements
            </h2>
            <div className="space-y-4">
              {allProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center space-x-4 flex-shrink-0">
                        {product.rank && getRankIcon(product.rank)}
                        <div>
                          <h3 className="font-semibold text-lg">{product.name}</h3>
                          <p className="text-gray-600">{product.brand}</p>
                        </div>
                      </div>

                      <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Dosage</span>
                          <p className="font-medium">{product.dosage}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Quantity</span>
                          <p className="font-medium">{product.capsules}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Rating</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{product.rating}</span>
                            <span className="text-gray-500">({product.reviews})</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-500">Price</span>
                          <p className="font-bold text-green-600">{product.price}</p>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                          View Details
                        </Button>
                      </div>
                    </div>
                    {product.badge && (
                      <div className="mt-3">
                        <Badge variant="secondary">{product.badge}</Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <Image
                  src="/images/nootroworld-logo.png"
                  alt="NootroWorld"
                  width={240}
                  height={48}
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-400">Your trusted source for dietary supplement information.</p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/supplements" className="hover:text-white transition-colors">
                    All Supplements
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <p className="text-gray-400">contact@nootroworld.com</p>
              <p className="text-gray-400 mt-2">(11) 9999-9999</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NootroWorld - All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
