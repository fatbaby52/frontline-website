import { cn } from "@/lib/utils";

interface CertificationBadgesProps {
  variant?: "light" | "dark";
  className?: string;
}

export function CertificationBadges({
  variant = "light",
  className,
}: CertificationBadgesProps) {
  const badges = ["DVBE Certified", "Small Business", "Veteran Owned"];

  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-x-6 gap-y-2", className)}>
      {badges.map((badge, index) => (
        <span
          key={badge}
          className={cn(
            "text-sm",
            variant === "light" ? "text-muted-foreground" : "text-white/60"
          )}
        >
          {badge}
          {index < badges.length - 1 && (
            <span className="ml-6 hidden sm:inline">•</span>
          )}
        </span>
      ))}
    </div>
  );
}
