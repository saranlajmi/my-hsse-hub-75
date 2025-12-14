import { Card } from "@/components/ui/card";
import { LayoutGrid, Circle, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface MetricRow {
  label: string;
  target: string | number;
  actual: string | number;
  perfIndex: string;
}

interface PerformanceIndexProps {
  title: string;
  value: string;
  variant?: "primary" | "secondary";
  metrics?: MetricRow[];
  isOpen?: boolean;
  onToggle?: () => void;
}

const kocMetrics: MetricRow[] = [
  { label: "Fatalities", target: 0, actual: 0, perfIndex: "0.00" },
  { label: "LTFIR (Lost Time Injury Frequency Rate)", target: "0.025", actual: "0.02", perfIndex: "80%" },
  { label: "Volume spilled", target: 0, actual: 0, perfIndex: "0.00" },
  { label: "Env. Incidents", target: 0, actual: 0, perfIndex: "0.00" },
];

const directorateMetrics: MetricRow[] = [
  { label: "Fatalities", target: 0, actual: 0, perfIndex: "0.00" },
  { label: "LTFIR (Lost Time Injury Frequency Rate)", target: "0.019", actual: "0.025", perfIndex: "76%" },
  { label: "Volume spilled", target: 0, actual: 0, perfIndex: "0.00" },
  { label: "Env. Incidents", target: 0, actual: 0, perfIndex: "0.00" },
];

export const PerformanceIndex = ({ title, value, variant = "primary", isOpen = false, onToggle }: PerformanceIndexProps) => {
  const isPrimary = variant === "primary";
  const metrics = isPrimary ? kocMetrics : directorateMetrics;
  
  return (
    <Card className={cn(
      "p-6 border transition-all duration-300",
      isOpen 
        ? "border-primary/30 bg-primary/5" 
        : "border-border bg-card"
    )}>
      <Collapsible open={isOpen} onOpenChange={() => onToggle?.()}>
        <div className="flex items-center gap-2 mb-4">
          {isPrimary ? (
            <LayoutGrid className="w-5 h-5 text-primary" />
          ) : (
            <Circle className="w-5 h-5 text-primary fill-primary" />
          )}
          <span className="font-semibold text-foreground">{title}</span>
        </div>
        
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-4xl font-bold text-primary">{value}</span>
            {isOpen ? (
              <ChevronUp className="w-6 h-6 text-primary" />
            ) : (
              <ChevronDown className="w-6 h-6 text-primary" />
            )}
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-4">
          <div className="border-t border-border pt-4">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-2 mb-2 text-xs text-muted-foreground font-medium">
              <div></div>
              <div className="text-center">TARGET</div>
              <div className="text-center">ACTUAL</div>
              <div className="text-center">PERF. INDEX</div>
            </div>
            
            {/* Table Rows */}
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className="grid grid-cols-4 gap-2 py-2 text-sm border-b border-border/50 last:border-0"
              >
                <div className="text-foreground text-xs">{metric.label}</div>
                <div className="text-center text-muted-foreground">{metric.target}</div>
                <div className="text-center text-primary font-medium">{metric.actual}</div>
                <div className="text-center text-muted-foreground">{metric.perfIndex}</div>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
