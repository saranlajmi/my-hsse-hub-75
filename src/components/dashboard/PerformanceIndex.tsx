import { Card } from "@/components/ui/card";
import { LayoutGrid, Circle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PerformanceIndexProps {
  title: string;
  value: string;
  variant?: "primary" | "secondary";
}

export const PerformanceIndex = ({ title, value, variant = "primary" }: PerformanceIndexProps) => {
  const isPrimary = variant === "primary";
  
  return (
    <Card className={cn(
      "p-6 border-2",
      isPrimary ? "border-primary/30 bg-primary/5" : "border-muted bg-card"
    )}>
      <div className="flex items-center gap-2 mb-4">
        {isPrimary ? (
          <LayoutGrid className="w-5 h-5 text-primary" />
        ) : (
          <Circle className="w-5 h-5 text-primary fill-primary" />
        )}
        <span className="font-semibold text-foreground">{title}</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="text-4xl font-bold text-primary">{value}</span>
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </Card>
  );
};
