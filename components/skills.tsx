import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C/C++", "C#", "Java", "JavaScript", "PHP", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Bootstrap", ".NET", "Spring Boot", "Spring Data", "Spring Security", "JavaFX", "Swing", "Qt"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PL/SQL", "MongoDB"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Linux", "Shell Scripting", "Git/GitHub"],
  },
  {
    title: "DevOps & Containerization",
    skills: ["CI/CD", "Docker", "Kubernetes", "Virtualization", "Containerization"],
  },
  {
    title: "Data Science & ML",
    skills: ["NumPy", "Scikit-learn", "Pandas", "Matplotlib", "TensorFlow", "OpenCV", "Web Scraping", "Naïve Bayes"],
  },
  {
    title: "Languages",
    skills: ["Arabic (Native)", "French (Professional)", "English (Professional)"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary"></div>
              <h2 className="text-sm uppercase tracking-wider text-primary font-medium">Skills</h2>
            </div>
          </div>

          <div className="grid gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-sm"></div>
                  <h3 className="relative text-xl font-bold text-blue-500 border-l-4 border-blue-500 pl-4 py-2">
                    {category.title}
                  </h3>

                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-border">
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-sm"></div>
              <h3 className="relative text-xl font-bold text-blue-500 border-l-4 border-blue-500 pl-4 py-2">
                Certifications
              </h3>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p>• AI Career Essentials – ALX (2024)</p>
              <p>• Web Development & Coding for Data – SoloLearn (2024)</p>
              <p>• Pro Frontend Engineer ReactJS + TypeScript + Redux (2025)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
