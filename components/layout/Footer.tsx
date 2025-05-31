import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
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
                className="h-12 w-auto brightness-0 invert"
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
  )
} 