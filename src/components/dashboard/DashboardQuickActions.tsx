import { Button } from "@/components/ui/button";
import { GraduationCap, AlertCircle, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const quickActions = [
  { label: "HSE Induction Center", icon: GraduationCap, link: "/hse-induction/registration" },
  { label: "Incidents", icon: AlertCircle, link: "/create-new" },
  { label: "HSE Awareness Schedule", icon: CalendarDays, link: "#" },
];

export const DashboardQuickActions = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-foreground">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickActions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-auto py-4 justify-center gap-2 border-border hover:border-primary hover:text-primary hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
            asChild
          >
            <Link to={action.link}>
              <action.icon className="w-5 h-5" />
              <span className="font-medium">{action.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
