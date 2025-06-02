import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Benefit {
  name: string
  description?: string
}

interface BenefitsSectionProps {
  supplementName: string
  benefits: Benefit[]
}

export default function BenefitsSection({ supplementName, benefits }: BenefitsSectionProps) {
  // ===== CSS DINÂMICO BASEADO NO NÚMERO DE BENEFÍCIOS =====
  // Otimiza o layout para qualquer quantidade de benefícios
  const getGridClass = (benefitsCount: number) => {
    if (benefitsCount === 1) {
      return "grid grid-cols-1 max-w-md mx-auto gap-6"
    } else if (benefitsCount === 2) {
      return "grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8"
    } else if (benefitsCount === 3) {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    } else if (benefitsCount === 4) {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    } else if (benefitsCount === 5) {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
    } else if (benefitsCount === 6) {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
    } else {
      // Para 7+ benefícios, usa grid automático responsivo
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    }
  }

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">How {supplementName} Helps Our Body</h2>
      <div className={getGridClass(benefits.length)}>
        {benefits.map((benefit, index) => (
          <Card key={index} className="h-full flex flex-col">
            <CardHeader className="pb-3 flex-shrink-0">
              <CardTitle className="text-lg">{benefit.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-start">
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 