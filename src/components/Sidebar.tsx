import { LayoutDashboard, PlusCircle, Search } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import hsseLogo from "@/assets/hsse-logo-v2.png";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Create New", icon: PlusCircle, path: "/create-new" },
  { title: "Edit/Search", icon: Search, path: "/edit-search" },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-52 bg-sidebar flex flex-col">
      {/* Header with logo */}
      <div className="px-2 py-6 border-b border-sidebar-border flex items-center justify-center">
        <img 
          src={hsseLogo} 
          alt="HSSE Logo" 
          className="w-full max-w-[180px] h-auto object-contain transition-transform duration-200 hover:scale-105" 
        />
      </div>
      
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item, index) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 animate-fade-in",
              "text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent hover:translate-x-1"
            )}
            activeClassName="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium text-sm">{item.title}</span>
          </NavLink>
        ))}
      </nav>
      
      {/* Company name at bottom */}
      <div className="p-3 border-t border-sidebar-border">
        <div className="flex justify-center">
          <span className="text-xs font-medium text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors duration-200">
            Kuwait Oil Company
          </span>
        </div>
      </div>
    </aside>
  );
};
