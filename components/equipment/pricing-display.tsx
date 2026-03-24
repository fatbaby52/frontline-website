import { cn } from "@/lib/utils";

interface PricingDisplayProps {
  dailyRate: number;
  className?: string;
  size?: "sm" | "lg";
}

export function PricingDisplay({
  dailyRate,
  className,
  size = "sm",
}: PricingDisplayProps) {
  return (
    <div className={cn("font-mono", className)}>
      <span className="text-sm text-muted-foreground">From </span>
      <span
        className={cn(
          "font-bold text-primary",
          size === "lg" ? "text-3xl lg:text-4xl" : "text-xl"
        )}
      >
        ${dailyRate}
      </span>
      <span className="text-sm text-muted-foreground">/day</span>
    </div>
  );
}
