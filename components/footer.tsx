import { Github, Linkedin, Twitter } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { icon: Github, href: portfolioData.social.github, label: "GitHub" },
    { icon: Linkedin, href: portfolioData.social.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: portfolioData.social.twitter, label: "Twitter" },
  ]

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <span className="font-mono text-xs text-muted-foreground">
          {`${portfolioData.personal.name} ${currentYear}`}
        </span>

        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={social.label}
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>

        <span className="font-mono text-xs text-muted-foreground">
          Built with Next.js & Tailwind
        </span>
      </div>
    </footer>
  )
}
