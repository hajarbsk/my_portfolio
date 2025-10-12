import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Code, Trophy, Target ,Shield} from "lucide-react"

const platforms = [
  {
    name: "LeetCode",
    description: "Algorithmic problem solving and coding interviews preparation",
    icon: Code,
    link: "https://leetcode.com/u/HAJAR2BOUSAKEN/",
    stats: "Active problem solver",
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "HackerRank",
    description: "Programming challenges and skill assessments",
    icon: Trophy,
    link: "https://www.hackerrank.com/profile/hajarbousaken20",
    stats: "Multiple certifications earned",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Codeforces",
    description: "Competitive programming contests and practice",
    icon: Target,
    link: "https://codeforces.com/profile/almontaqibaIT",
    stats: "Regular contest participant",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Cisco Networking Basics",
    description: "Completed Cisco Networking Basics course on NetAcad",
    icon: Shield, // tu peux remplacer par une icône spécifique si tu veux
    link: "https://www.netacad.com/dashboard", // ton lien vers le certificat
    stats: "Completed certificate course",
    color: "from-green-500 to-lime-500",
  },
]

export function CompetitiveProgramming() {
  return (
    <section id="competitive" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Competitive Programming</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharpening problem-solving skills through algorithmic challenges and competitive programming contests
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => {
            const Icon = platform.icon
            return (
              <Card
                key={platform.name}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {platform.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{platform.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-accent mb-4 font-medium">{platform.stats}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Profile
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
