import { Sidebar } from "@/components/Sidebar";
import { PerformanceIndex } from "@/components/dashboard/PerformanceIndex";
import { KeyPerformanceMeasures } from "@/components/dashboard/KeyPerformanceMeasures";
import { MyHSSEPerformance } from "@/components/dashboard/MyHSSEPerformance";
import { DashboardQuickActions } from "@/components/dashboard/DashboardQuickActions";
import { TopNavBar } from "@/components/TopNavBar";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import hsseLogo from "@/assets/hsse-logo-v2.png";

const Index = () => {
  const [openCard, setOpenCard] = useState<"koc" | "directorate" | null>(null);

  const handleToggle = (card: "koc" | "directorate") => {
    setOpenCard(openCard === card ? null : card);
  };

  return (
    <div className="min-h-screen bg-muted/30 flex">
      <Sidebar />
      
      <main className="flex-1 ml-52">
        <TopNavBar />

        <div className="p-6 space-y-6">
          {/* Performance Indices */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <PerformanceIndex 
              title="KOC Excellence Index" 
              value="80%" 
              variant="primary"
              isOpen={openCard === "koc"}
              onToggle={() => handleToggle("koc")}
            />
            <PerformanceIndex 
              title="Directorate Excellence Index" 
              value="76%" 
              variant="secondary"
              isOpen={openCard === "directorate"}
              onToggle={() => handleToggle("directorate")}
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
            src={hsseLogo} 
            alt="HSSE Logo" 
            className="w-16 h-16 object-contain opacity-60"
          />
        </div>

        {/* Floating chat button */}
        <button className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 hover:scale-110 hover:shadow-xl active:scale-95 transition-all duration-200">
          <MessageCircle className="w-6 h-6" />
        </button>
      </main>
    </div>
  );
};

export default Index;
