"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface Task {
  id: number
  text: string
  completed: boolean
}

export default function Demo() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Review project proposals", completed: false },
    { id: 2, text: "Schedule team meeting", completed: true },
    { id: 3, text: "Update documentation", completed: false }
  ])
  const [newTask, setNewTask] = useState("")

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask("")
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <section id="demo" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try TaskFlow Right Now</h2>
          <p className="text-lg text-muted-foreground">
            Experience the simplicity and power of TaskFlow with this interactive demo. Add, complete, and delete tasks to see how easy it is.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">My Tasks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a new task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addTask()}
                  className="flex-1"
                />
                <Button onClick={addTask} size="icon">
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="space-y-2">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center gap-3 p-3 rounded-lg border bg-background hover:bg-muted/50 transition-colors"
                  >
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                    />
                    <span
                      className={cn(
                        "flex-1 text-sm",
                        task.completed && "line-through text-muted-foreground"
                      )}
                    >
                      {task.text}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteTask(task.id)}
                      className="h-8 w-8"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t text-sm text-muted-foreground">
                {tasks.filter(t => !t.completed).length} tasks remaining
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}