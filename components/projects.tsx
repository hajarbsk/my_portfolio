import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [ 
  { title: "Collaborative Annotation Platform", 
    description: "Developed a Spring Boot-based platform for collaborative annotation, improving the efficiency of NLP model training with advanced user management and real-time collaboration features.", 
    technologies: ["Spring Boot", "Spring Data", "Spring Security", "Java"], 
    category: "Web Development",
  github: "https://github.com/hajarbsk/NLP-Annotation" },
     { title: "Real-Time Chatbot Application", 
      description: "Created an intelligent chatbot for handling customer inquiries about store services, featuring real-time messaging and natural language processing capabilities.", 
      technologies: ["Java", "JavaFX", "MongoDB", "Kafka", "Zookeeper"], 
      category: "Full-Stack Development", github:"https://github.com/hajarbsk/ChatBot-using-Kafka-and-Java.git"}, 
      { title: "Web Security Enhancement Project", 
        description: "Implemented comprehensive security improvements for web applications, focusing on vulnerability mitigation and security best practices using industry-standard tools.", 
        technologies: ["OWASP ZAP", "Security Testing", "Web Security"], 
        category: "Cybersecurity", }, 
        { title: "E-Service Management System", 
          description: "Developed a comprehensive web application for managing students, teachers, coordinators, and department heads in an educational system with role-based access control.", 
          technologies: ["HTML", "CSS", "JavaScript", "AJAX", "PHP", "UML"], 
          category: "Web Development", github:"https://github.com/hajarbsk/Project-Web-developement.git"},
           ,
           { title: "Expense & Department Management App  ", 
          description: "Developed a full-stack web application for managing expenses and departments using React.js, TypeScript, and 4D. Designed a responsive interface, implemented backend services, and ensured smooth integration between front-end and back-end for an efficient user experience", 
          technologies: ["4D-Backend", "React", "JavaScript", "Typescript", "Rest-Api","PostMan","UML"], 
          category: "Full-Stack Development", github:"https://github.com/hajarbsk/expensetracker"},
           { title: "Tourism Management Application", 
            description: "Built a desktop application for tourism management, facilitating travel-related functionalities with an intuitive user interface and robust data management.",
             technologies: ["C++", "Qt", "SQLite"], 
             category: "Desktop Application",
             github: "https://github.com/hajarbsk/MyTouristManager-qt-c-.git"}, 
             { title: "Flower Image Search Engine", 
              description: "Designed an image search engine for precise flower identification using deep learning classification with ResNet architecture and a user-friendly web interface.", 
              technologies: ["Python", "ResNet", "Flask", "OpenCV", "Machine Learning"], 
      category: "AI/Machine Learning", github:"https://github.com/hajarbsk/fiore-flowers.git" },]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary"></div>
              <h2 className="text-sm uppercase tracking-wider text-primary font-medium">Projects</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of projects that showcase my technical skills and passion for creating innovative solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card
                  className="border-border bg-card/50 transition-all duration-300 
                             hover:bg-primary/10 hover:shadow-lg hover:-translate-y-1"
                >
                  <CardHeader className="space-y-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <ExternalLink
                        className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors"
                      />
                    </div>
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-secondary/30 text-secondary-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
