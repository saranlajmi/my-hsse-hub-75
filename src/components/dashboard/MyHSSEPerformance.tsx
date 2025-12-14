import { Card } from "@/components/ui/card";
import { GraduationCap, Car, TrendingUp } from "lucide-react";

interface PerformanceItem {
  title: string;
  value: number;
  unit: string;
  progress: number;
  icon: React.ReactNode;
  iconBgColor: string;
  progressColor: string;
}

const performanceItems: PerformanceItem[] = [
  {
    title: "HSE Awareness Sessions",
    value: 10,
    unit: "SESSIONS",
    progress: 100,
    icon: <GraduationCap className="w-5 h-5 text-info dark:text-white" />,
    iconBgColor: "bg-info/10 dark:bg-transparent",
    progressColor: "bg-info dark:bg-white",
  },
  {
    title: "Traffic Violation",
    value: 1,
    unit: "VIOLATIONS",
    progress: 0,
    icon: <Car className="w-5 h-5 text-warning dark:text-white" />,
    iconBgColor: "bg-warning/10 dark:bg-transparent",
    progressColor: "bg-warning dark:bg-white",
  },
  {
    title: "Leading Indicators",
    value: 10,
    unit: "INDICATORS",
    progress: 100,
    icon: <TrendingUp className="w-5 h-5 text-success dark:text-white" />,
    iconBgColor: "bg-success/10 dark:bg-transparent",
    progressColor: "bg-success dark:bg-white",
  },
];

export const MyHSSEPerformance = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-foreground">My HSSE Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {performanceItems.map((item, index) => (
          <Card 
            key={index} 
            className="p-4 bg-card border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${item.iconBgColor} transition-transform duration-200 hover:scale-110`}>
                {item.icon}
              </div>
              <span className="font-medium text-foreground text-sm dark:text-white">{item.title}</span>
            </div>
            <div className="flex items-end justify-between mb-2">
              <span className={`text-3xl font-bold ${item.value > 0 ? 'text-primary dark:text-white' : 'text-muted-foreground dark:text-white'}`}>
                {item.value}
              </span>
              <span className="text-xs text-muted-foreground uppercase dark:text-white">{item.unit}</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden dark:bg-white/20">
              <div 
                className={`h-full ${item.progressColor} dark:bg-white rounded-full transition-all duration-500 ease-out`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
