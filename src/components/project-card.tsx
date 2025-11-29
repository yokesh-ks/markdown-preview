import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  url: string
  status: string
  category: string
  tags: string[]
  icon: string
  gradient: string
}

const modernColorSchemes = {
  pink: {
    bg: "bg-gradient-to-br from-pink-500 to-pink-600",
    shadow: "shadow-pink-500/20",
    ring: "ring-pink-500/30",
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-500 to-purple-600",
    shadow: "shadow-purple-500/20",
    ring: "ring-purple-500/30",
  },
  blue: {
    bg: "bg-gradient-to-br from-blue-500 to-blue-600",
    shadow: "shadow-blue-500/20",
    ring: "ring-blue-500/30",
  },
  turquoise: {
    bg: "bg-gradient-to-br from-teal-500 to-cyan-600",
    shadow: "shadow-teal-500/20",
    ring: "ring-teal-500/30",
  },
  lightpink: {
    bg: "bg-gradient-to-br from-pink-400 to-rose-500",
    shadow: "shadow-pink-400/20",
    ring: "ring-pink-400/30",
  },
  orange: {
    bg: "bg-gradient-to-br from-orange-500 to-amber-600",
    shadow: "shadow-orange-500/20",
    ring: "ring-orange-500/30",
  },
  cyan: {
    bg: "bg-gradient-to-br from-cyan-500 to-blue-500",
    shadow: "shadow-cyan-500/20",
    ring: "ring-cyan-500/30",
  },
  green: {
    bg: "bg-gradient-to-br from-green-500 to-emerald-600",
    shadow: "shadow-green-500/20",
    ring: "ring-green-500/30",
  },
  yellow: {
    bg: "bg-gradient-to-br from-yellow-400 to-orange-500",
    shadow: "shadow-yellow-400/20",
    ring: "ring-yellow-400/30",
  },
};

type ColorSchemeKey = keyof typeof modernColorSchemes;

export function ProjectCard({
  id,
  title,
  description,
  url,
  status,
  category,
  tags,
  gradient,
}: ProjectCardProps) {
  const handleRedirect = () => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  // Generate consistent color based on project id
  const getColorScheme = (projectId: string): ColorSchemeKey => {
    const colors: ColorSchemeKey[] = ['pink', 'purple', 'blue', 'turquoise', 'lightpink', 'orange', 'cyan', 'green', 'yellow'];
    const hash = projectId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  }

  const colorScheme = modernColorSchemes[getColorScheme(id)];
  const iconColorClasses = cn(
    colorScheme.bg,
    colorScheme.shadow,
    "shadow-lg"
  );

  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-500 cursor-pointer h-full",
        "hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1",
        "border-2 hover:border-primary/30 backdrop-blur-sm",
        "bg-gradient-to-br from-card to-card/50"
      )}
      onClick={handleRedirect}
    >
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={cn("absolute inset-[-2px] bg-gradient-to-r blur-sm", gradient, "opacity-50")} />
      </div>

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* Content wrapper */}
      <div className="relative bg-card/95 backdrop-blur-sm h-full flex flex-col">
        {/* Status badge */}
        <div className="absolute top-6 right-6 z-10">
          <Badge
            variant="secondary"
            className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30 backdrop-blur-sm shadow-lg"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {status}
          </Badge>
        </div>

        <CardHeader className="pb-4 pt-6">
          <div className="flex items-start gap-4">
            {/* Icon with modern color gradient background */}
            <div
              className={cn(
                "relative p-4 rounded-xl",
                "transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                iconColorClasses
              )}
            >
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg
                className="relative w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <div className="flex-1 min-w-0 pt-1">
              <Badge
                variant="outline"
                className="mb-3 bg-primary/5 border-primary/20 font-sans"
              >
                {category}
              </Badge>
              <CardTitle className="font-heading text-2xl mb-0 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/60 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                {title}
              </CardTitle>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col pb-6">
          <CardDescription className="font-sans text-base leading-relaxed mb-6 text-muted-foreground/90">
            {description}
          </CardDescription>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="font-sans text-xs font-medium bg-muted/50 hover:bg-muted transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Visit project hint */}
          <div className="font-sans flex items-center gap-2 mt-6 text-sm text-muted-foreground group-hover:text-primary transition-colors">
            <span>Visit project</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
