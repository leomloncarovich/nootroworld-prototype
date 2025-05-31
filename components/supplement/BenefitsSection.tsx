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
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">How {supplementName} Helps Our Body</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{benefit.name}</CardTitle>
            </CardHeader>
            <CardContent>
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