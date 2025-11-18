import { Card } from "@/components/ui/card";
import { Target, Building2 } from "lucide-react";

interface MetricItem {
  label: string;
  target: number;
  ytd: number;
  unit?: string;
}

const kocTargets: MetricItem[] = [
  { label: "Lost Time Injury Frequency Rate (LTIFR)", target: 0.025, ytd: 0.020 },
  { label: "Environment Incidents", target: 600, ytd: 250 },
];

const directorateTargets: MetricItem[] = [
  { label: "Lost Time Injury Frequency Rate (LTIFR)", target: 0.019, ytd: 0.025 },
  { label: "Environment Incidents", target: 94, ytd: 16 },
];

const MetricCard = ({ metrics, title, icon: Icon }: { metrics: MetricItem[], title: string, icon: any }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <div className="space-y-3">
        {metrics.map((metric, index) => {
          const isOverTarget = metric.ytd > metric.target;
          const ytdColor = isOverTarget ? "text-destructive" : "text-success";
          
          return (
            <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-sm font-medium text-foreground mb-3">{metric.label}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Target</p>
                  <p className="text-2xl font-bold text-foreground">{metric.target}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">YTD</p>
                  <p className={`text-2xl font-bold ${ytdColor}`}>{metric.ytd}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ExecutiveTargets = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Target className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Executive Targets</h2>
          <p className="text-sm text-muted-foreground">KOC & Directorate performance metrics</p>
        </div>
      </div>

      <div className="space-y-6">
        <MetricCard metrics={kocTargets} title="KOC Targets" icon={Building2} />
        <div className="border-t border-border my-6"></div>
        <MetricCard metrics={directorateTargets} title="Directorate Targets" icon={Target} />
      </div>
    </Card>
  );
};
