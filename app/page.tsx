import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
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
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
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

            {/* Menu */}
            <div></div>
          </div>
        </div>
      </header>

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and description */}
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

            {/* Quick links */}
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
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
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
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
