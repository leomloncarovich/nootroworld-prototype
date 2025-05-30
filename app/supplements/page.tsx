"use client"

// ===== PÁGINA DE LISTAGEM DE SUPLEMENTOS - NOOTROWORLD =====
// Interface completa para visualização de todos os suplementos cadastrados
// Implementado em 30/05/2024 com design moderno e responsivo
// Inclui: loading states, error handling, search UI e cards informativos

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

// ===== INTERFACE DE DADOS =====
// Define a estrutura de um suplemento conforme retornado pela API
interface Supplement {
  id: number
  name: string
  description: string
  category: string          // Nome da categoria (ex: "Vitaminas")
  rating: number           // Avaliação de 0-5 estrelas
  reviews: number          // Número total de reviews
  topPrice: string         // Preço formatado (ex: "$12.99")
  badge?: string           // Badge especial (opcional)
  link?: string            // Link para página detalhada (opcional)
  benefits: string[]       // Array de benefícios
}

export default function SupplementsPage() {
  // ===== ESTADOS DO COMPONENTE =====
  const [supplements, setSupplements] = useState<Supplement[]>([])
  const [loading, setLoading] = useState(true)        // Estado de carregamento
  const [error, setError] = useState<string | null>(null)  // Estado de erro

  // ===== EFFECT PARA BUSCAR DADOS =====
  // Carrega todos os suplementos ao montar o componente
  useEffect(() => {
    async function fetchSupplements() {
      try {
        const response = await fetch('/api/supplements')
        if (!response.ok) {
          throw new Error('Failed to fetch supplements')
        }
        const data = await response.json()
        setSupplements(data)  // Dados já vem ordenados pela API (recomendados primeiro)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchSupplements()
  }, [])

  // ===== TELA DE LOADING =====
  // Exibe spinner animado enquanto carrega os dados
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading supplements...</p>
        </div>
      </div>
    )
  }

  // ===== TELA DE ERRO =====
  // Exibe mensagem de erro com opção de tentar novamente
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg">Error: {error}</p>
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

  // ===== RENDERIZAÇÃO PRINCIPAL =====
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ===== HEADER COM LOGO E NAVEGAÇÃO ===== */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo da NootroWorld */}
            <div className="flex items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/nootroworld-logo.png"
                  alt="NootroWorld"
                  width={280}
                  height={56}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            {/* Botão de voltar para home */}
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* ===== CONTEÚDO PRINCIPAL ===== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ===== TÍTULO DA PÁGINA ===== */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Supplements</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our complete database with the best supplements analyzed and classified
          </p>
        </div>

        {/* ===== BARRA DE PESQUISA E FILTROS ===== */}
        {/* TODO: Implementar funcionalidade de busca em futuras versões */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input placeholder="Search supplements..." className="pl-10 h-12 text-lg" />
            </div>
            <Button variant="outline" className="flex items-center space-x-2 h-12 px-6">
              <span>Search</span>
            </Button>
          </div>

          {/* ===== GRID DE SUPLEMENTOS ===== */}
          {/* Cards responsivos mostrando informações de cada suplemento */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supplements.map((supplement) => (
              <Card key={supplement.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* ===== CABEÇALHO DO CARD ===== */}
                <CardHeader className="pb-4">
                  {/* Categoria e badge do suplemento */}
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {supplement.category}
                    </Badge>
                    {supplement.badge && <Badge className="bg-green-600 text-white text-xs">{supplement.badge}</Badge>}
                  </div>
                  
                  {/* Nome do suplemento */}
                  <CardTitle className="text-xl font-bold">{supplement.name}</CardTitle>
                  
                  {/* Rating e número de reviews */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{supplement.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({supplement.reviews} reviews)</span>
                  </div>
                </CardHeader>

                {/* ===== CONTEÚDO DO CARD ===== */}
                <CardContent className="space-y-4">
                  {/* Descrição do suplemento */}
                  <CardDescription className="text-gray-600 leading-relaxed">{supplement.description}</CardDescription>

                  {/* ===== SEÇÃO DE BENEFÍCIOS ===== */}
                  {/* Lista os principais benefícios em badges */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Main Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {supplement.benefits.map((benefit, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* ===== AÇÃO PRINCIPAL ===== */}
                  {/* Botão para ver detalhes ou indicação de "em breve" */}
                  <div className="flex items-center justify-center pt-4 border-t">
                    {supplement.link && supplement.link !== "#" ? (
                      <Link href={supplement.link}>
                        <Button className="bg-green-600 hover:bg-green-700">View Details</Button>
                      </Link>
                    ) : (
                      <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ===== SEÇÃO DE ESTATÍSTICAS ===== */}
        {/* Mostra estatísticas dinâmicas baseadas nos dados reais */}
        <div className="mt-16 bg-green-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-green-600">{supplements.length}+</h3>
              <p className="text-gray-600">Supplements Analyzed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-600">15,000+</h3>
              <p className="text-gray-600">Products Evaluated</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-600">6</h3>
              <p className="text-gray-600">Main Categories</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-600">4.7★</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">{"Didn't find what you're looking for?"}</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team is always analyzing new supplements. Suggest a product and we'll evaluate it for you!
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Suggest Supplement
            </Button>
          </div>
        </div>
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
