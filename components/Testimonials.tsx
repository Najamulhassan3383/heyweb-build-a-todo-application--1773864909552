import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      avatar: "/avatars/01.png",
      content: "TaskFlow has completely transformed how I manage my daily tasks. The interface is intuitive, and the collaboration features are outstanding. My team productivity has increased by 40% since we started using it.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      company: "Independent",
      avatar: "/avatars/02.png",
      content: "As a freelancer juggling multiple clients, TaskFlow keeps me organized and on track. The smart reminders ensure I never miss a deadline. This is hands down the best todo app I have ever used.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthLabs",
      avatar: "/avatars/03.png",
      content: "The calendar integration and team features make TaskFlow perfect for our marketing team. We can assign tasks, track progress, and collaborate seamlessly. It has become an essential part of our workflow.",
      rating: 5
    },
    {
      name: "David Park",
      role: "Software Engineer",
      company: "DevStudio",
      avatar: "/avatars/04.png",
      content: "I have tried dozens of todo apps, but TaskFlow is the only one I have stuck with. The sync is instant, the design is beautiful, and it just works. Finally, a task manager that does not get in my way.",
      rating: 5
    },
    {
      name: "Jennifer Lee",
      role: "Entrepreneur",
      company: "StartupHub",
      avatar: "/avatars/05.png",
      content: "Running a startup means wearing many hats. TaskFlow helps me stay on top of everything from product development to investor meetings. The prioritization features are a lifesaver.",
      rating: 5
    },
    {
      name: "Alex Thompson",
      role: "Project Manager",
      company: "BuildCo",
      avatar: "/avatars/06.png",
      content: "Managing multiple projects used to be overwhelming. TaskFlow has brought clarity and structure to my work. The reporting features help me communicate progress to stakeholders effortlessly.",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Thousands of Users</h2>
          <p className="text-lg text-muted-foreground">
            Do not just take our word for it. Here is what our users have to say about TaskFlow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}