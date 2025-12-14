import { Sidebar } from "@/components/Sidebar";
import { PerformanceIndex } from "@/components/dashboard/PerformanceIndex";
import { KeyPerformanceMeasures } from "@/components/dashboard/KeyPerformanceMeasures";
import { MyHSSEPerformance } from "@/components/dashboard/MyHSSEPerformance";
import { DashboardQuickActions } from "@/components/dashboard/DashboardQuickActions";
import { TopNavBar } from "@/components/TopNavBar";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-muted/30 flex">
      <Sidebar />
      
      <main className="flex-1 ml-52">
        <TopNavBar />

        <div className="p-6 space-y-6">
          {/* Performance Indices */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PerformanceIndex 
              title="KOC Excellence Index" 
              value="80%" 
              variant="primary"
            />
            <PerformanceIndex 
              title="Directorate Excellence Index" 
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
