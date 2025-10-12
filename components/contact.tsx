import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-primary"></div>
              <h2 className="text-sm uppercase tracking-wider text-primary font-medium">Contact</h2>
              <div className="w-12 h-px bg-primary"></div>
            </div>
            <h3 className="text-3xl font-bold text-foreground text-balance">Let's Work Together</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to
              discuss potential collaborations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="border-border bg-card/50">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:hajarbousaken20@gmail.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      hajarbousaken20@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card/50">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+212657077869" className="text-foreground hover:text-primary transition-colors">
                      +212 657 077 869
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card/50">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Al-Hoceima, Morocco</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Connect with me</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://linkedin.com/in/hajar-bousaken"
                      aria-label="LinkedIn"
                      className="hover:bg-primary/10 hover:border-primary"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://github.com/hajarbsk"
                      aria-label="GitHub"
                      className="hover:bg-primary/10 hover:border-primary"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <h4 className="text-lg font-semibold text-foreground mb-2">Looking for Opportunities</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  I'm actively seeking internship opportunities and collaborative projects where I can apply my skills
                  and continue learning in a professional environment.
                </p>
                <Button asChild className="w-full">
                  <a href="mailto:hajarbousaken20@gmail.com">Get In Touch</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
