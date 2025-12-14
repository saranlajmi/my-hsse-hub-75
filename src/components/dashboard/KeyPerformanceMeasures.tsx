import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingDown, Leaf, Droplets } from "lucide-react";

interface KPMItem {
  label: string;
  value: string | number;
  target: string | number;
  icon: React.ReactNode;
  iconBgColor: string;
}

const kpmItems: KPMItem[] = [
  {
    label: "Fatalities",
    value: 4,
    target: 0,
    icon: <AlertCircle className="w-5 h-5 text-destructive dark:text-white" />,
    iconBgColor: "bg-destructive/10 dark:bg-transparent",
  },
  {
    label: "LTIFR (Lost Time Injury Frequency Rate)",
    value: "0.02",
    target: "0.025",
    icon: <TrendingDown className="w-5 h-5 text-pink-500 dark:text-white" />,
    iconBgColor: "bg-pink-100 dark:bg-transparent",
  },
  {
    label: "Environment Incidents",
    value: 20,
    target: 94,
    icon: <Leaf className="w-5 h-5 text-success dark:text-white" />,
    iconBgColor: "bg-success/10 dark:bg-transparent",
  },
  {
    label: "Volume Spilled",
    value: 68,
    target: 800,
    icon: <Droplets className="w-5 h-5 text-info dark:text-white" />,
    iconBgColor: "bg-info/10 dark:bg-transparent",
  },
];

export const KeyPerformanceMeasures = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-foreground">Directorate Key Performance Measures</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpmItems.map((item, index) => (
          <Card 
            key={index} 
            className="p-4 bg-card border border-border relative hover:shadow-md hover:border-primary/30 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="text-3xl font-bold text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground">Actual</p>
              </div>
              <div className={`p-2 rounded-full ${item.iconBgColor} transition-transform duration-200 hover:scale-110`}>
                {item.icon}
              </div>
            </div>
            <div className="absolute bottom-3 right-4 text-xs text-muted-foreground">
              Target: <span className="font-medium">{item.target}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
