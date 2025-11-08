import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experienceData = [
  {
    period: "July 2025 – August 2025",
    position: "Full-stack Developer",
    company: "4D",
    type: "Internship",
    location: "Rabat, Rabat-Salé-Kénitra, Morocco",
    workType: "Hybrid",
    description:
      "Developed a prototype of a trip and expense management application during my internship. The project involved frontend development with React.js, backend integration with 4D Database, API testing with Postman, and UML modeling. This experience strengthened my technical skills and teamwork abilities while delivering a functional solution with real-world value.",
    skills: [
      "Full-stack Development",
      "React.js",
      "4D Database",
      "API Testing",
      "Postman",
      "UML Modeling",
      "Teamwork",
      "Problem Solving",
      "Project Management",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 ">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary"></div>
              <h2 className="text-sm uppercase tracking-wider text-primary font-medium">Experience</h2>
            </div>
          </div>

          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <Card key={index} className="border-border bg-card/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-primary font-bold text-lg">4D</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                            <p className="text-primary font-medium">
                              {exp.company} • {exp.type}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{exp.location}</span>
                          <span>•</span>
                          <span>{exp.workType}</span>
                        </div>
                      </div>
                      <div className="text-sm text-accent font-medium md:text-right">{exp.period}</div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Key Skills & Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
