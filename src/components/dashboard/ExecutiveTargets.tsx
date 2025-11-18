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

const MetricRow = ({ metric }: { metric: MetricItem }) => {
  const isOverTarget = metric.ytd > metric.target;
  const ytdColor = isOverTarget ? "text-destructive" : "text-success";
  
  return (
    <div className="flex items-center justify-between py-2 border-b border-border last:border-0">
      <span className="text-sm text-foreground truncate flex-1">{metric.label}</span>
      <div className="flex items-center gap-4 ml-4">
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Target</p>
          <p className="text-sm font-bold text-foreground">{metric.target}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">YTD</p>
          <p className={`text-sm font-bold ${ytdColor}`}>{metric.ytd}</p>
        </div>
      </div>
    </div>
  );
};

interface ExecutiveTargetsProps {
  showKOC?: boolean;
  showDirectorate?: boolean;
}

export const ExecutiveTargets = ({ showKOC = true, showDirectorate = true }: ExecutiveTargetsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* KOC Targets */}
      {showKOC && (
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-foreground" />
            </div>
            <h3 className="text-base font-semibold text-foreground">KOC Targets</h3>
          </div>
          <div className="space-y-1">
            {kocTargets.map((metric, index) => (
              <MetricRow key={index} metric={metric} />
            ))}
          </div>
        </Card>
      )}

      {/* Directorate Targets */}
      {showDirectorate && (
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center">
              <Target className="w-4 h-4 text-foreground" />
            </div>
            <h3 className="text-base font-semibold text-foreground">Directorate Targets</h3>
          </div>
          <div className="space-y-1">
            {directorateTargets.map((metric, index) => (
              <MetricRow key={index} metric={metric} />
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};
