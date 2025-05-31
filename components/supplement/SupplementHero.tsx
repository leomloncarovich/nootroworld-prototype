interface SupplementHeroProps {
  name: string
  description: string
}

export default function SupplementHero({ name, description }: SupplementHeroProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{name}</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  )
} 