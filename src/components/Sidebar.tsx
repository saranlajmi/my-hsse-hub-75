import { LayoutDashboard, PlusCircle, Search, ClipboardCheck, GraduationCap, BarChart3, BookOpen } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import reactLogo from "@/assets/react-logo.png";

const topBarItems = [
  { title: "HSSE Reports", icon: BarChart3, path: "/hsse-reports" },
  { title: "Tutorials", icon: BookOpen, path: "/tutorials" },
];

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Create New", icon: PlusCircle, path: "/create-new" },
  { title: "Edit/Search", icon: Search, path: "/edit-search" },
  { title: "Action Tracking System", icon: ClipboardCheck, path: "/action-tracking" },
  { title: "Training", icon: GraduationCap, path: "/training" },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Top Bar */}
      <div className="p-3 border-b border-sidebar-border bg-sidebar-accent/30">
        <div className="flex gap-2">
          {topBarItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200",
                "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
              )}
              activeClassName="bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.title}</span>
            </NavLink>
          ))}
        </div>
      </div>
      
      {/* Logo/Branding */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <img src={reactLogo} alt="REACT Logo" className="w-10 h-10 object-contain" />
          <div>
            <h1 className="text-xl font-bold text-sidebar-foreground">REACT</h1>
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
          <p className="text-xs text-sidebar-foreground/60 text-center">
            Report, Evaluate, Act, Correct, Track
          </p>
        </div>
      </div>
    </aside>
  );
};
