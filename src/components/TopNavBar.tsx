import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserProfileDropdown } from "@/components/UserProfileDropdown";
import { FileText, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";

export const TopNavBar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-sidebar border-b border-sidebar-border px-6 py-3 flex items-center justify-between sticky top-0 z-10">
      <div className="flex-1" />
      <div className="flex items-center gap-6">
        <Button variant="ghost" size="sm" className="text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent gap-2" asChild>
          <Link to="/hsse-reports">
            <FileText className="w-4 h-4" />
            HSSE Reports
          </Link>
        </Button>
        <Button variant="ghost" size="sm" className="text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent gap-2" asChild>
          <Link to="/hse-induction/registration">
            <GraduationCap className="w-4 h-4" />
            HSE Induction Center
          </Link>
        </Button>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-sidebar-foreground/80">Theme:</span>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger className="w-24 h-8 text-sm bg-sidebar-accent border-sidebar-border text-sidebar-foreground">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <UserProfileDropdown />
        </div>
      </div>
    </div>
  );
};
