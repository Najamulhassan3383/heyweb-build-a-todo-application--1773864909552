import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Clock, Target, Smile } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "3x Productivity Boost",
      description: "Users report completing 3 times more tasks after switching to TaskFlow.",
      metric: "300%"
    },
    {
      icon: Clock,
      title: "Save 10+ Hours Weekly",
      description: "Spend less time organizing and more time doing what matters most.",
      metric: "10+ hrs"
    },
    {
      icon: Target,
      title: "95% Task Completion Rate",
      description: "Smart reminders and prioritization help you finish what you start.",
      metric: "95%"
    },
    {
      icon: Smile,
      title: "Reduced Stress Levels",
      description: "Feel in control with a clear overview of all your commitments.",
      metric: "100%"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results from Real Users</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of professionals who have transformed their productivity with TaskFlow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{benefit.metric}</div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}