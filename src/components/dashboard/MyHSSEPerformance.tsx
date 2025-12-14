import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Car, TrendingUp, LucideIcon } from "lucide-react";

interface PerformanceItem {
  title: string;
  value: number;
  unit: string;
  progress: number;
  icon: LucideIcon;
  variant: "info" | "warning" | "success";
}

const PERFORMANCE_DATA: PerformanceItem[] = [
  {
    title: "HSE Awareness Sessions",
    value: 10,
    unit: "SESSIONS",
    progress: 100,
    icon: GraduationCap,
    variant: "info",
  },
  {
    title: "Traffic Violation",
    value: 1,
    unit: "VIOLATIONS",
    progress: 100,
    icon: Car,
    variant: "warning",
  },
  {
    title: "Leading Indicators",
    value: 10,
    unit: "INDICATORS",
    progress: 100,
    icon: TrendingUp,
    variant: "success",
  },
];

const VARIANT_STYLES = {
  info: {
    iconBg: "bg-info/10 dark:bg-info/20",
    iconColor: "text-info",
    progressClass: "[&>div]:bg-info",
  },
  warning: {
    iconBg: "bg-warning/10 dark:bg-warning/20",
    iconColor: "text-warning",
    progressClass: "[&>div]:bg-warning",
  },
  success: {
    iconBg: "bg-success/10 dark:bg-success/20",
    iconColor: "text-success",
    progressClass: "[&>div]:bg-success",
  },
} as const;

const PerformanceCard = ({ item, index }: { item: PerformanceItem; index: number }) => {
  const Icon = item.icon;
  const styles = VARIANT_STYLES[item.variant];

  return (
    <Card
      className="p-4 bg-card border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg ${styles.iconBg} transition-transform duration-200 hover:scale-110`}>
          <Icon className={`w-5 h-5 ${styles.iconColor}`} />
        </div>
        <span className="font-medium text-foreground text-sm">{item.title}</span>
      </div>
      <div className="flex items-end justify-between mb-2">
        <span className={`text-3xl font-bold ${item.value > 0 ? "text-primary" : "text-muted-foreground"}`}>
          {item.value}
        </span>
        <span className="text-xs text-muted-foreground uppercase">{item.unit}</span>
      </div>
      <Progress
        value={item.progress}
        className={`h-1.5 bg-muted ${styles.progressClass}`}
      />
    </Card>
  );
};

export const MyHSSEPerformance = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-bold text-foreground">My HSSE Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PERFORMANCE_DATA.map((item, index) => (
          <PerformanceCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};
