import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Utensils, Calendar } from "lucide-react"

interface UsageGuide {
  timing?: string
  timingDesc?: string
  withFood?: string
  withFoodDesc?: string
  timeToEffect?: string
  effectDesc?: string
}

interface UsageGuideSectionProps {
  supplementName: string
  usageGuide: UsageGuide
}

export default function UsageGuideSection({ supplementName, usageGuide }: UsageGuideSectionProps) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">📋 How to Take {supplementName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-green-600" />
              <CardTitle className="text-lg">Best Time</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-2">
              <strong>{usageGuide.timing}</strong>
            </p>
            <p className="text-gray-600">{usageGuide.timingDesc}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Utensils className="h-5 w-5 text-green-600" />
              <CardTitle className="text-lg">With or Without Food</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-2">
              <strong>{usageGuide.withFood}</strong>
            </p>
            <p className="text-gray-600">{usageGuide.withFoodDesc}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-green-600" />
              <CardTitle className="text-lg">Time to Effect</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-2">
              <strong>{usageGuide.timeToEffect}</strong>
            </p>
            <p className="text-gray-600">{usageGuide.effectDesc}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 