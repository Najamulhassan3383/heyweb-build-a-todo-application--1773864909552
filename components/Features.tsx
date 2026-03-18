import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Bell, Users, Zap, Shield, Calendar } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Smart Task Management",
      description: "Create, organize, and prioritize tasks with intelligent categorization and custom tags for maximum productivity."
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss a deadline with customizable notifications and intelligent reminder systems that adapt to your schedule."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share tasks, assign responsibilities, and collaborate seamlessly with your team in real-time."
    },
    {
      icon: Zap,
      title: "Lightning Fast Sync",
      description: "Your tasks sync instantly across all devices. Access your todo list anywhere, anytime, on any device."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade encryption keeps your data safe. Your tasks remain private and secure at all times."
    },
    {
      icon: Calendar,
      title: "Calendar Integration",
      description: "Seamlessly integrate with Google Calendar, Outlook, and Apple Calendar for unified schedule management."
    }
  ]

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Stay Organized</h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to help you manage tasks efficiently and boost your productivity to new heights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}