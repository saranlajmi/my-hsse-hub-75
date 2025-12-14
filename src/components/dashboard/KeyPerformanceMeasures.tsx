import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingDown, Leaf, Droplets } from "lucide-react";

interface KPMItem {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  iconBgColor: string;
}

const kpmItems: KPMItem[] = [
  {
    label: "Fatalities",
    value: 4,
    icon: <AlertCircle className="w-5 h-5 text-destructive" />,
    iconBgColor: "bg-destructive/10",
  },
  {
    label: "LTIFR (Lost Time Injury Frequency Rate)",
    value: "0.02",
    icon: <TrendingDown className="w-5 h-5 text-pink-500" />,
    iconBgColor: "bg-pink-100",
  },
  {
    label: "Environment Incidents",
    value: 20,
    icon: <Leaf className="w-5 h-5 text-success" />,
    iconBgColor: "bg-success/10",
  },
  {
    label: "Volume Spilled",
    value: 68,
    icon: <Droplets className="w-5 h-5 text-info" />,
    iconBgColor: "bg-info/10",
  },
];

export const KeyPerformanceMeasures = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-foreground">Key Performance Measures</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpmItems.map((item, index) => (
          <Card key={index} className="p-4 bg-card border border-border">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="text-3xl font-bold text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground">Actual</p>
              </div>
              <div className={`p-2 rounded-full ${item.iconBgColor}`}>
                {item.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
