import { LayoutDashboard, PlusCircle, Search, Menu } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import hsseLogo from "@/assets/hsse-logo.png";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Create New", icon: PlusCircle, path: "/create-new" },
  { title: "Edit/Search", icon: Search, path: "/edit-search" },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-52 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Header with hamburger and logo */}
      <div className="px-4 py-4 border-b border-sidebar-border flex items-center gap-3">
        <button className="p-1 hover:bg-sidebar-accent rounded">
          <Menu className="w-5 h-5 text-sidebar-foreground" />
        </button>
        <img src={hsseLogo} alt="HSSE Logo" className="h-[60px] w-auto object-contain" />
      </div>
      
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
              "text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent"
            )}
            activeClassName="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium text-sm">{item.title}</span>
          </NavLink>
        ))}
      </nav>
      
      {/* Logo at bottom */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex justify-center">
          <img 
            src={hsseLogo} 
            alt="HSSE Logo" 
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>
    </aside>
  );
};
