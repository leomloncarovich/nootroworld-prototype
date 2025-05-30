import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Utensils, Calendar, Star, Award, Medal, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function VitaminCPage() {
  const topPicks = [
    {
      rank: 1,
      name: "Vitamin C 1000mg",
      brand: "ImunoMax",
      price: "$32.90",
      rating: 4.8,
      reviews: 1678,
      dosage: "1000mg",
      capsules: 60,
      badge: "Best Value",
    },
    {
      rank: 2,
      name: "Liposomal Vitamin C",
      brand: "BioAbsorb",
      price: "$68.90",
      rating: 4.9,
      reviews: 934,
      dosage: "1000mg",
      capsules: 60,
      badge: "Best Absorption",
    },
    {
      rank: 3,
      name: "Vitamin C + Zinc",
      brand: "ImunoShield",
      price: "$45.90",
      rating: 4.7,
      reviews: 1245,
      dosage: "500mg + 10mg Zinc",
      capsules: 90,
      badge: "Best Combination",
    },
  ]

  const top10Products = [
    ...topPicks,
    {
      rank: 4,
      name: "Effervescent Vitamin C",
      brand: "FizzVit",
      price: "$28.90",
      rating: 4.6,
      reviews: 823,
      dosage: "1000mg",
      capsules: "20 tablets",
    },
    {
      rank: 5,
      name: "Natural Vitamin C",
      brand: "OrganicLife",
      price: "$54.90",
      rating: 4.5,
      reviews: 567,
      dosage: "500mg",
      capsules: 120,
    },
    {
      rank: 6,
      name: "Chewable Vitamin C",
      brand: "ChewVit",
      price: "$35.90",
      rating: 4.4,
      reviews: 445,
      dosage: "500mg",
      capsules: "60 tablets",
    },
    {
      rank: 7,
      name: "Vitamin C + Bioflavonoids",
      brand: "ComplexVit",
      price: "$42.90",
      rating: 4.3,
      reviews: 378,
      dosage: "1000mg + 100mg",
      capsules: 90,
    },
    {
      rank: 8,
      name: "Vitamin C Gummies",
      brand: "GummyHealth",
      price: "$39.90",
      rating: 4.2,
      reviews: 312,
      dosage: "250mg",
      capsules: "60 gummies",
    },
    {
      rank: 9,
      name: "Vitamin C Powder",
      brand: "PurePowder",
      price: "$48.90",
      rating: 4.1,
      reviews: 267,
      dosage: "1000mg/scoop",
      capsules: "100g",
    },
    {
      rank: 10,
      name: "Vitamin C Basic",
      brand: "EssentialVit",
      price: "$24.90",
      rating: 4.0,
      reviews: 198,
      dosage: "500mg",
      capsules: 60,
    },
  ]

  const getRankIcon = (rank: number) => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
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
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Supplement Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Vitamin C</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful antioxidant essential for immunity, collagen and cellular protection
          </p>
        </div>

        {/* Information about Vitamin C */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">How Vitamin C Helps Our Body</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Antioxidant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Protects cells against free radical damage and premature aging.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Collagen Production</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Essential for healthy skin, wound healing and elasticity.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Immune System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Strengthens natural defenses and reduces cold duration.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Iron Absorption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Improves iron absorption, preventing anemia.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Usage Guide */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Usage Guide</h2>
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
                  <strong>Morning and afternoon</strong>
                </p>
                <p className="text-gray-600">Split the dose into 2 takes for better absorption and utilization.</p>
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
                  <strong>With food</strong>
                </p>
                <p className="text-gray-600">Take with meals to avoid gastric discomfort. Avoid with milk or coffee.</p>
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
                  <strong>1-2 weeks</strong>
                </p>
                <p className="text-gray-600">Immunity benefits in 1-2 weeks, skin benefits in 4-6 weeks.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Top 3 Picks */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">🏆 Top 3 Best Vitamin C Supplements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topPicks.map((product) => (
              <Card key={product.rank} className="relative hover:shadow-lg transition-shadow duration-300">
                <div className="absolute -top-3 left-4">
                  <Badge className="bg-green-600 text-white">{product.badge}</Badge>
                </div>
                <CardHeader className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    {getRankIcon(product.rank)}
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

        {/* Complete Top 10 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            📊 Complete Ranking - Top 10 Vitamin C Supplements
          </h2>
          <div className="space-y-4">
            {top10Products.map((product) => (
              <Card key={product.rank} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center space-x-4 flex-shrink-0">
                      {getRankIcon(product.rank)}
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
                  <a href="#" className="hover:text-white transition-colors">
                    All Supplements
                  </a>
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
