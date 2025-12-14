import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  variant?: "default" | "success" | "warning" | "danger";
}

export const StatsCard = ({ title, value, icon: Icon, trend, variant = "default" }: StatsCardProps) => {
  const variantStyles = {
    default: "border-l-primary",
    success: "border-l-success",
    warning: "border-l-warning",
    danger: "border-l-destructive",
  };

  return (
    <Card className={cn("p-6 border-l-4 transition-all duration-200 hover:shadow-md", variantStyles[variant])}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-foreground mb-2">{value}</h3>
          {trend && (
            <p className={cn("text-sm font-medium", trend.isPositive ? "text-success" : "text-destructive")}>
              {trend.value}
            </p>
          )}
        </div>
        <div className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center",
          "dark:bg-transparent",
          variant === "success" && "bg-success/10",
          variant === "warning" && "bg-warning/10",
          variant === "danger" && "bg-destructive/10",
          variant === "default" && "bg-primary/10"
        )}>
          <Icon className={cn(
            "w-6 h-6",
            "dark:text-white",
            variant === "success" && "text-success",
            variant === "warning" && "text-warning",
            variant === "danger" && "text-destructive",
            variant === "default" && "text-primary"
          )} />
        </div>
      </div>
    </Card>
  );
};
