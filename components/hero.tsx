import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="max-w-6xl mx-auto text-center space-y-8 floating-element">
        <div className="space-y-6">
          <h1 className="text-6xl lg:text-8xl font-bold text-foreground text-balance">
            Hi, I'm <span className="text-gradient">Hajar</span> Bousaken
          </h1>
          <h2 className="text-xl lg:text-2xl text-primary font-medium">Computer Engineering Student</h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I create stellar web experiences with modern technologies. Specializing in full-stack development, I build
            interfaces that are both beautiful and functional.
            <span className="text-primary font-semibold"> Currently seeking PFE internship opportunities</span> to apply
            my skills in real-world projects.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 glow-button text-lg px-8 py-3"
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="text-lg px-8 py-3 border-primary/50 hover:border-primary bg-transparent"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 pt-8">
          <a
            href="mailto:hajarbousaken20@gmail.com"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/hajar-bousaken"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/hajarbsk"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="tel:+212657077869"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Phone"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
