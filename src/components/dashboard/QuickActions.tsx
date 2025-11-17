import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Eye, ClipboardCheck, FileText, Sparkles } from "lucide-react";

const actions = [
  { label: "Report Incident", icon: AlertTriangle, variant: "destructive" as const },
  { label: "Report Near Miss", icon: Eye, variant: "warning" as const },
  { label: "Submit JSA", icon: ClipboardCheck, variant: "default" as const },
  { label: "Request PTW", icon: FileText, variant: "default" as const },
  { label: "Raise Observation", icon: Sparkles, variant: "success" as const },
];

export const QuickActions = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold text-foreground mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 gap-3">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant}
            className="justify-start h-auto py-4 text-left"
            size="lg"
          >
            <action.icon className="w-5 h-5 mr-3 flex-shrink-0" />
            <span className="font-semibold">{action.label}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};
