import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface HeaderProps {
  showBackButton?: boolean
  backButtonText?: string
  backButtonHref?: string
}

export default function Header({ 
  showBackButton = true, 
  backButtonText = "Back to Supplements",
  backButtonHref = "/supplements"
}: HeaderProps) {
  return (
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
          {showBackButton && (
            <Link href={backButtonHref}>
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>{backButtonText}</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
} 