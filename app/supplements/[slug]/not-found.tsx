import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header, Footer } from "@/components/layout"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBackButton={true} backButtonText="Back to Supplements" backButtonHref="/supplements" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mx-auto max-w-md">
            <div className="text-9xl font-bold text-gray-300 mb-4">404</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Supplement Not Found</h1>
            <p className="text-gray-600 mb-8">
              The supplement you're looking for doesn't exist or may have been moved.
            </p>
            <div className="space-y-4">
              <Link href="/supplements">
                <Button className="bg-green-600 hover:bg-green-700 w-full">
                  View All Supplements
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 