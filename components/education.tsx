import { Card, CardContent } from "@/components/ui/card"

const educationData = [
  {
    period: "2021 – 2026",
    degree: "Engineering Cycle",
    institution: "National School of Applied Sciences",
    location: "Al-Hoceima, Morocco",
    description:
      "Computer Engineering specialization with focus on software development and data science.",
  },
  {
    period: "2020 – 2021",
    degree: "Baccalaureate in Physical Sciences",
    institution: "High School Ibn Hani",
    location: "Salé, Morocco",
    description: "Graduated with honors.",
  },
]

export function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-background transition-colors duration-500 hover:bg-blue-50/30"
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">

          {/* 🔵 Titre avec ligne et effet hover */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary"></div>
              <h2 className="text-sm uppercase tracking-wider font-medium text-foreground transition-colors duration-300 hover:text-blue-500 cursor-pointer">
                Education
              </h2>
            </div>
          </div>

          {/* 🎓 Liste des formations */}
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card
                key={index}
                className="border-border bg-card/50 transition-all duration-300 hover:bg-blue-50 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-semibold text-blue-700 transition-colors duration-300 hover:text-blue-500">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-500 font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                    <div className="text-sm text-blue-400 font-medium md:text-right">
                      {edu.period}
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
