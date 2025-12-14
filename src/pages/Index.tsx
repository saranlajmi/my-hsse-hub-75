import { Sidebar } from "@/components/Sidebar";
import { PerformanceIndex } from "@/components/dashboard/PerformanceIndex";
import { KeyPerformanceMeasures } from "@/components/dashboard/KeyPerformanceMeasures";
import { MyHSSEPerformance } from "@/components/dashboard/MyHSSEPerformance";
import { DashboardQuickActions } from "@/components/dashboard/DashboardQuickActions";
import { UserProfileDropdown } from "@/components/UserProfileDropdown";
import { Button } from "@/components/ui/button";
import { FileText, GraduationCap, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-muted/30 flex">
      <Sidebar />
      
      <main className="flex-1 ml-52">
        {/* Top Navigation Bar */}
        <div className="bg-background border-b border-border px-6 py-3 flex items-center justify-between sticky top-0 z-10">
          <div className="flex-1" />
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-2" asChild>
              <Link to="/hsse-reports">
                <FileText className="w-4 h-4" />
                HSSE Reports
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-2" asChild>
              <Link to="/hse-induction/registration">
                <GraduationCap className="w-4 h-4" />
                HSE Induction Center
              </Link>
            </Button>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Theme:</span>
                <Select defaultValue="light">
                  <SelectTrigger className="w-24 h-8 text-sm">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <UserProfileDropdown />
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Performance Indices */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PerformanceIndex 
              title="KOC HSE Performance Index" 
              value="80%" 
              variant="primary"
            />
            <PerformanceIndex 
              title="Directorate HSE Performance Index" 
              value="76%" 
              variant="secondary"
            />
          </div>

          {/* Key Performance Measures */}
          <KeyPerformanceMeasures />

          {/* My HSSE Performance */}
          <MyHSSEPerformance />

          {/* Quick Actions */}
          <DashboardQuickActions />
        </div>

        {/* Footer with logo */}
        <div className="px-6 py-4">
          <img 
            src={logo} 
            alt="KOC Logo" 
            className="w-16 h-16 object-contain opacity-60"
          />
        </div>

        {/* Floating chat button */}
        <button className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
          <MessageCircle className="w-6 h-6" />
        </button>
      </main>
    </div>
  );
};

export default Index;
