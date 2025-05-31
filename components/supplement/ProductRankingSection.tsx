import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Medal, Trophy } from "lucide-react"

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

interface ProductRankingSectionProps {
  supplementName: string
  products: Product[]
}

function getRankIcon(rank: number) {
  switch (rank) {
    case 1:
      return <Trophy className="h-5 w-5 text-yellow-500" />
    case 2:
      return <Medal className="h-5 w-5 text-gray-400" />
    case 3:
      return <Award className="h-5 w-5 text-amber-600" />
    default:
      return <span className="text-sm font-bold text-gray-600">#{rank}</span>
  }
}

export default function ProductRankingSection({ supplementName, products }: ProductRankingSectionProps) {
  const topPicks = products.filter(p => p.rank && p.rank <= 3).sort((a, b) => (a.rank || 0) - (b.rank || 0))
  const allProducts = products.sort((a, b) => (a.rank || 0) - (b.rank || 0))

  return (
    <>
      {/* Top 3 Picks */}
      {topPicks.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">🏆 Top 3 Best {supplementName} Supplements</h2>
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
            📊 Complete Ranking - Top {allProducts.length} {supplementName} Supplements
          </h2>
          <div className="space-y-4">
            {allProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex items-center space-x-4 flex-shrink-0 md:w-64">
                      {product.rank && getRankIcon(product.rank)}
                      <div>
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-gray-600">{product.brand}</p>
                      </div>
                    </div>

                    <div className="flex-1 grid grid-cols-4 gap-4 text-sm md:w-96">
                      <div className="text-left">
                        <span className="text-gray-500 block">Dosage</span>
                        <p className="font-medium">{product.dosage}</p>
                      </div>
                      <div className="text-left">
                        <span className="text-gray-500 block">Quantity</span>
                        <p className="font-medium">{product.capsules}</p>
                      </div>
                      <div className="text-left">
                        <span className="text-gray-500 block">Rating</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{product.rating}</span>
                          <span className="text-gray-500">({product.reviews})</span>
                        </div>
                      </div>
                      <div className="text-left">
                        <span className="text-gray-500 block">Price</span>
                        <p className="font-bold text-green-600">{product.price}</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0 md:w-32">
                      <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 w-full">
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
    </>
  )
} 