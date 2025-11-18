import { LayoutDashboard, PlusCircle, Search, ClipboardCheck, GraduationCap, BarChart3, BookOpen, Settings, ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import reactLogo from "@/assets/react-logo.png";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const topBarItems = [
  { title: "HSSE Reports", icon: BarChart3, path: "/hsse-reports" },
  { title: "Tutorials", icon: BookOpen, path: "/tutorials" },
  { title: "HSSE Procedures", icon: BookOpen, path: "/hsse-procedures" },
];

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Create New", icon: PlusCircle, path: "/create-new" },
  { title: "Edit/Search", icon: Search, path: "/edit-search" },
];

const actionTrackingItems = [
  { title: "Upload Recommendations", path: "/action-tracking/upload" },
  { title: "Create Actions", path: "/action-tracking/create", isSubItem: true },
  { title: "Update/ Close Actions", path: "/action-tracking/update", isSubItem: true },
  { title: "Status of Incidents Recomms.", path: "/action-tracking/status" },
  { title: "Report of Action Status", path: "/action-tracking/report" },
  { title: "ATS Help Files", path: "/action-tracking/help" },
];

const hseInductionItems = [
  { title: "Registration (Employees)", path: "/hse-induction/registration" },
  { title: "Contact US", path: "/hse-induction/contact" },
  { title: "Awareness Presentation(PDF File)", path: "/hse-induction/awareness" },
  { title: "E-Passport", path: "/hse-induction/e-passport" },
];

export const Sidebar = () => {
  const [isActionTrackingOpen, setIsActionTrackingOpen] = useState(false);
  const [isHSEInductionOpen, setIsHSEInductionOpen] = useState(false);

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo/Branding */}
      <div className="px-6 py-8 border-b border-sidebar-border">
        <div className="flex flex-col items-center justify-center">
          <img 
            src={reactLogo} 
            alt="REACT - Report, Evaluate, Act, Correct, Track" 
            className="w-full max-w-[220px] object-contain"
          />
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

        {/* Action Tracking System with collapsible sub-items */}
        <Collapsible open={isActionTrackingOpen} onOpenChange={setIsActionTrackingOpen}>
          <CollapsibleTrigger
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full",
              "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
            )}
          >
            <ClipboardCheck className="w-5 h-5" />
            <span className="font-medium flex-1 text-left">Action Tracking System</span>
            {isActionTrackingOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 mt-1">
            {actionTrackingItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 py-2 rounded-lg transition-all duration-200",
                  "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent",
                  item.isSubItem ? "pl-12 pr-4" : "pl-8 pr-4"
                )}
                activeClassName="bg-sidebar-accent text-sidebar-foreground"
              >
                {item.isSubItem && <ChevronRight className="w-3 h-3" />}
                <span className="text-sm">{item.title}</span>
              </NavLink>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* HSE Induction Center with collapsible sub-items */}
        <Collapsible open={isHSEInductionOpen} onOpenChange={setIsHSEInductionOpen}>
          <CollapsibleTrigger
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full",
              "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
            )}
          >
            <GraduationCap className="w-5 h-5" />
            <span className="font-medium flex-1 text-left">HSE Induction Center</span>
            {isHSEInductionOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 mt-1">
            {hseInductionItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 py-2 rounded-lg transition-all duration-200",
                  "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent",
                  "pl-8 pr-4"
                )}
                activeClassName="bg-sidebar-accent text-sidebar-foreground"
              >
                <span className="text-sm">{item.title}</span>
              </NavLink>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Admin */}
        <NavLink
          to="/admin"
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
            "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
          )}
          activeClassName="bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
        >
          <Settings className="w-5 h-5" />
          <span className="font-medium">Admin</span>
        </NavLink>
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="px-4 py-3 rounded-lg bg-sidebar-accent/50">
          <p className="text-xs text-sidebar-foreground/60 text-center">
            Kuwait Oil Company
          </p>
        </div>
      </div>
    </aside>
  );
};
