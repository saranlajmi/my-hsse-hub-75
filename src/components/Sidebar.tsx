import { LayoutDashboard, PlusCircle, Search, Menu } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Create New", icon: PlusCircle, path: "/create-new" },
  { title: "Edit/Search", icon: Search, path: "/edit-search" },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-52 bg-background border-r border-border flex flex-col">
      {/* Header with hamburger and branding */}
      <div className="px-4 py-4 border-b border-border flex items-center gap-3">
        <button className="p-1 hover:bg-muted rounded">
          <Menu className="w-5 h-5 text-foreground" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-green-400 via-blue-500 to-orange-400 rounded" />
          <span className="font-semibold text-foreground">HSSE Digital Portal</span>
        </div>
      </div>
      
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
              "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
            activeClassName="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium text-sm">{item.title}</span>
          </NavLink>
        ))}
      </nav>
      
      {/* Logo at bottom */}
      <div className="p-4 border-t border-border">
        <div className="flex justify-center">
          <img 
            src={logo} 
            alt="KOC Logo" 
            className="w-16 h-16 object-contain opacity-80"
          />
        </div>
      </div>
    </aside>
  );
};
