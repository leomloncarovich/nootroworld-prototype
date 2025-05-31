"use client"

import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import Header from "./Header"
import Footer from "./Footer"

interface SupplementLayoutProps {
  children: ReactNode
  loading?: boolean
  error?: string | null
  loadingMessage?: string
  headerProps?: {
    showBackButton?: boolean
    backButtonText?: string
    backButtonHref?: string
  }
}

export default function SupplementLayout({
  children,
  loading = false,
  error = null,
  loadingMessage = "Loading supplement information...",
  headerProps = {}
}: SupplementLayoutProps) {
  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header {...headerProps} />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">{loadingMessage}</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header {...headerProps} />
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
        <Footer />
      </div>
    )
  }

  // Normal State
  return (
    <div className="min-h-screen bg-gray-50">
      <Header {...headerProps} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
      <Footer />
    </div>
  )
} 