import { Card, CardContent } from "@/components/ui/card"

const educationData = [
  {
    period: "2023 – 2026",
    degree: "Engineering Cycle",
    institution: "École Nationale des Sciences Appliquées",
    location: "Al-Hoceima, Morocco",
    description: "Computer Engineering specialization with focus on software development and data science",
  },
  {
    period: "2021 – 2023",
    degree: "Integrated Preparatory Classes for Engineering Schools",
    institution: "École Nationale des Sciences Appliquées",
    location: "Al-Hoceima, Morocco",
    description: "Mathematical and scientific foundation for engineering studies",
  },
  {
    period: "2020 – 2021",
    degree: "Baccalauréat in Physical Sciences",
    institution: "Lycée Ibn Hani",
    location: "Sale, Morocco",
    description: "Graduated with honors (mention Bien)",
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary"></div>
              <h2 className="text-sm uppercase tracking-wider text-primary font-medium">Education</h2>
            </div>
          </div>

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card key={index} className="border-border bg-card/50">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                    </div>
                    <div className="text-sm text-accent font-medium md:text-right">{edu.period}</div>
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
