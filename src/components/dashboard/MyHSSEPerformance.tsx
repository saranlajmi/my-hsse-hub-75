import { Card } from "@/components/ui/card";
import { GraduationCap, Car, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

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
    icon: <GraduationCap className="w-5 h-5 text-primary" />,
    iconBgColor: "bg-primary/10",
    progressColor: "bg-primary",
  },
  {
    title: "Traffic Violation",
    value: 0,
    unit: "VIOLATIONS",
    progress: 0,
    icon: <Car className="w-5 h-5 text-muted-foreground" />,
    iconBgColor: "bg-muted",
    progressColor: "bg-muted-foreground",
  },
  {
    title: "Leading Indicators",
    value: 10,
    unit: "INDICATORS",
    progress: 100,
    icon: <TrendingUp className="w-5 h-5 text-success" />,
    iconBgColor: "bg-success/10",
    progressColor: "bg-success",
  },
];

export const MyHSSEPerformance = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-foreground">My HSSE Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {performanceItems.map((item, index) => (
          <Card key={index} className="p-4 bg-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${item.iconBgColor}`}>
                {item.icon}
              </div>
              <span className="font-medium text-foreground text-sm">{item.title}</span>
            </div>
            <div className="flex items-end justify-between mb-2">
              <span className={`text-3xl font-bold ${item.value > 0 ? 'text-primary' : 'text-muted-foreground'}`}>
                {item.value}
              </span>
              <span className="text-xs text-muted-foreground uppercase">{item.unit}</span>
            </div>
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div 
                className={`h-full ${item.progressColor} rounded-full transition-all duration-300`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
