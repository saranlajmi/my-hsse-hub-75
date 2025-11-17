import { LayoutDashboard, FileText, BarChart3, Brain, Video, Headphones, Settings, AlertCircle, ClipboardCheck, Shield } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Report & Manage", icon: FileText, path: "/report" },
  { title: "HSSE Reports", icon: BarChart3, path: "/analytics" },
  { title: "AI Insights", icon: Brain, path: "/ai-insights" },
  { title: "Lessons Learned", icon: Video, path: "/lessons" },
  { title: "Procedures & Training", icon: Headphones, path: "/procedures" },
  { title: "Admin", icon: Settings, path: "/admin" },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-sidebar-foreground">MyHSSE</h1>
            <p className="text-xs text-sidebar-foreground/60">Kuwait Oil Company</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
              "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
            )}
            activeClassName="bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.title}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="px-4 py-3 rounded-lg bg-sidebar-accent/50">
          <div className="flex items-center gap-2 text-sidebar-foreground/80 mb-2">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Safety First</span>
          </div>
          <p className="text-xs text-sidebar-foreground/60">
            Report incidents immediately for a safer workplace
          </p>
        </div>
      </div>
    </aside>
  );
};
