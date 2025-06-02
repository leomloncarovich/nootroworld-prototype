import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Header, Footer } from "@/components/layout"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const featuredSupplements = [
    {
      name: "Zinc",
      description: "Essential for immune system and wound healing. Helps maintain healthy skin and hair.",
    },
    {
      name: "Vitamin D3",
      description: "Fundamental for bone and muscle health. Strengthens the immune system and improves mood.",
    },
    {
      name: "Vitamin C",
      description: "Powerful antioxidant that strengthens immunity. Essential for collagen production.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component */}
      <Header showBackButton={false} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Slogan */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Direct and reliable information about the best supplements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most effective supplements based on scientific evidence and expert evaluations.
          </p>
          <Link href="/supplements">
            <Button size="lg" className="m-6 bg-green-600 hover:bg-green-700 text-white">
              View Supplements
            </Button>
          </Link>
        </div>

        {/* Featured Supplements Section */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Supplements</h3>

          <div className="space-y-6">
            {featuredSupplements.map((supplement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{supplement.name}</CardTitle>
                      <CardDescription className="text-gray-600 text-base leading-relaxed">
                        {supplement.description}
                      </CardDescription>
                    </div>
                    <div className="flex-shrink-0">
                      {supplement.name === "Zinc" ? (
                        <Link href="/supplements/zinc">
                          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">Learn More</Button>
                        </Link>
                      ) : supplement.name === "Vitamin D3" ? (
                        <Link href="/supplements/vitamin-d3">
                          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">Learn More</Button>
                        </Link>
                      ) : supplement.name === "Vitamin C" ? (
                        <Link href="/supplements/vitamin-c">
                          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">Learn More</Button>
                        </Link>
                      ) : (
                        <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">Learn More</Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Supplements Button */}
          <div className="mt-10 text-center">
            <Link href="/supplements">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 flex items-center gap-2"
              >
                View All Supplements
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
