import { Button } from "@/components/ui/button";
import { AlertTriangle, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  { label: "Report Incident", icon: AlertTriangle, link: "/create-new" },
  { label: "Report Near Miss", icon: Eye, link: "#" },
];

export const QuickActions = () => {
  return (
    <div className="p-4">
      <h2 className="text-base font-bold text-sidebar-foreground mb-3">Quick Actions</h2>
      <div className="space-y-2">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full justify-start h-auto py-3 text-left border-white/20 bg-transparent text-sidebar-foreground hover:bg-white/10"
            size="sm"
            asChild
          >
            <Link to={action.link}>
              <action.icon className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm font-medium">{action.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
