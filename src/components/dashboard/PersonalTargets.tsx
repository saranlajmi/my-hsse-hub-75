import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { User, TrendingUp } from "lucide-react";

interface TargetItem {
  label: string;
  current: number;
  target: number;
  unit?: string;
}

const targets: TargetItem[] = [
  { label: "Actions Completed", current: 12, target: 15, unit: "tasks" },
  { label: "Training Modules", current: 8, target: 10, unit: "modules" },
  { label: "Challenges Completed", current: 5, target: 8, unit: "challenges" },
];

export const PersonalTargets = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center">
          <User className="w-5 h-5 text-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Personal Targets</h2>
          <p className="text-sm text-muted-foreground">Your monthly HSSE goals</p>
        </div>
      </div>

      <div className="space-y-6">
        {targets.map((target, index) => {
          const percentage = Math.round((target.current / target.target) * 100);
          const isComplete = target.current >= target.target;

          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{target.label}</span>
                <span className="text-sm font-bold text-foreground">
                  {target.current} / {target.target} {target.unit}
                </span>
              </div>
              <Progress value={percentage} className="h-2" />
              {isComplete && (
                <div className="flex items-center gap-1 text-xs text-success">
                  <TrendingUp className="w-3 h-3" />
                  <span>Target achieved!</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-muted">
        <h3 className="text-sm font-semibold text-foreground mb-2">My HSSE Scorecard</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground">On-time completion</p>
            <p className="text-lg font-bold text-success">92%</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Overdue actions</p>
            <p className="text-lg font-bold text-destructive">2</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
