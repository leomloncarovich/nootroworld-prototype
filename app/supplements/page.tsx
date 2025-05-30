import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SupplementsPage() {
  const supplements = [
    {
      name: "Zinc",
      description: "Essential for immune system and wound healing. Helps maintain healthy skin and hair.",
      category: "Minerals",
      rating: 4.8,
      reviews: 1247,
      topPrice: "$29.90",
      benefits: ["Immune System", "Wound Healing", "Hair & Nails"],
      link: "/supplements/zinc",
      badge: "Most Searched",
    },
    {
      name: "Vitamin D3",
      description: "Fundamental for bone and muscle health. Strengthens the immune system and improves mood.",
      category: "Vitamins",
      rating: 4.9,
      reviews: 1456,
      topPrice: "$29.90",
      benefits: ["Bone Health", "Immune System", "Mood"],
      link: "/supplements/vitamin-d3",
      badge: "Recommended",
    },
    {
      name: "Vitamin C",
      description: "Powerful antioxidant that strengthens immunity. Essential for collagen production.",
      category: "Vitamins",
      rating: 4.8,
      reviews: 1678,
      topPrice: "$24.90",
      benefits: ["Antioxidant", "Collagen", "Immunity"],
      link: "/supplements/vitamin-c",
      badge: "Best Price",
    },
    {
      name: "Omega 3",
      description: "Essential fatty acids for cardiovascular, brain health and inflammation reduction.",
      category: "Fatty Acids",
      rating: 4.7,
      reviews: 1123,
      topPrice: "$45.90",
      benefits: ["Heart", "Brain", "Anti-inflammatory"],
      link: "#",
      badge: "Popular",
    },
    {
      name: "Magnesium",
      description: "Vital mineral for muscle, nerve function and energy production. Helps with relaxation.",
      category: "Minerals",
      rating: 4.6,
      reviews: 892,
      topPrice: "$32.90",
      benefits: ["Muscles", "Sleep", "Energy"],
      link: "#",
    },
    {
      name: "Vitamin B12",
      description: "Essential for red blood cell formation, neurological function and energy metabolism.",
      category: "Vitamins",
      rating: 4.7,
      reviews: 756,
      topPrice: "$28.90",
      benefits: ["Energy", "Nervous System", "Blood"],
      link: "#",
    },
    {
      name: "Iron",
      description: "Fundamental mineral for oxygen transport and anemia prevention.",
      category: "Minerals",
      rating: 4.5,
      reviews: 634,
      topPrice: "$26.90",
      benefits: ["Oxygenation", "Energy", "Anti-anemia"],
      link: "#",
    },
    {
      name: "Calcium",
      description: "Essential for strong bones and teeth. Important for muscle contraction and clotting.",
      category: "Minerals",
      rating: 4.4,
      reviews: 523,
      topPrice: "$31.90",
      benefits: ["Bones", "Teeth", "Muscles"],
      link: "#",
    },
    {
      name: "Collagen",
      description: "Structural protein that maintains youthful skin, healthy joints and strong hair.",
      category: "Proteins",
      rating: 4.6,
      reviews: 945,
      topPrice: "$89.90",
      benefits: ["Skin", "Joints", "Hair"],
      link: "#",
    },
    {
      name: "Probiotics",
      description: "Beneficial bacteria that improve gut health, digestion and immunity.",
      category: "Digestive",
      rating: 4.5,
      reviews: 712,
      topPrice: "$67.90",
      benefits: ["Digestion", "Gut", "Immunity"],
      link: "#",
    },
    {
      name: "Creatine",
      description: "Improves physical performance, muscle strength and post-workout recovery.",
      category: "Performance",
      rating: 4.8,
      reviews: 1334,
      topPrice: "$54.90",
      benefits: ["Strength", "Performance", "Recovery"],
      link: "#",
    },
    {
      name: "Whey Protein",
      description: "High-quality protein for muscle mass gain and recovery.",
      category: "Proteins",
      rating: 4.7,
      reviews: 2156,
      topPrice: "$129.90",
      benefits: ["Muscle Mass", "Recovery", "Protein"],
      link: "#",
    },
  ]

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
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Supplements</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our complete database with the best supplements analyzed and classified
          </p>
        </div>

        {/* Search Bar and Filters */}
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

          {/* Supplements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supplements.map((supplement, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {supplement.category}
                    </Badge>
                    {supplement.badge && <Badge className="bg-green-600 text-white text-xs">{supplement.badge}</Badge>}
                  </div>
                  <CardTitle className="text-xl font-bold">{supplement.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{supplement.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({supplement.reviews} reviews)</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">{supplement.description}</CardDescription>

                  {/* Benefits */}
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

                  {/* Action */}
                  <div className="flex items-center justify-center pt-4 border-t">
                    {supplement.link !== "#" ? (
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

        {/* Statistics */}
        <div className="mt-16 bg-green-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-green-600">12+</h3>
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
