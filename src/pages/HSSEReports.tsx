import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const HSSEReports = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <main className="flex-1 ml-64">
        {/* Header Bar with HSSE Links */}
        <div className="bg-sidebar border-b border-sidebar-border px-6 py-2">
          <div className="flex items-center justify-center gap-2">
            <Button variant="ghost" size="sm" className="text-sidebar-foreground hover:bg-sidebar-accent" asChild>
              <Link to="/hsse-reports">HSSE Reports</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-sidebar-foreground hover:bg-sidebar-accent" asChild>
              <Link to="/tutorials">HSSE Tutorials</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-sidebar-foreground hover:bg-sidebar-accent" asChild>
              <Link to="/hsse-procedures">HSSE Procedures</Link>
            </Button>
          </div>
        </div>

        {/* Top Navigation Bar */}
        <div className="bg-sidebar border-b border-sidebar-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-sidebar-foreground">HSSE Reports</h1>
          </div>
          <div className="flex items-center gap-3">
            <Input 
              placeholder="Search..." 
              className="w-64 bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/60"
            />
            <Button variant="outline" size="sm" className="bg-transparent border-white text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground">
              Feedback
            </Button>
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-sidebar-foreground font-medium">
              AK
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Leading Indicators</h2>
            <p className="text-muted-foreground">Content for Leading Indicators reports will be displayed here.</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Lagging Indicators</h2>
            <p className="text-muted-foreground">Content for Lagging Indicators reports will be displayed here.</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Contractor HSE Management & Engagement System</h2>
            <p className="text-muted-foreground">Content for Contractor HSE Management & Engagement System will be displayed here.</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">HSE Induction Center Reports</h2>
            <p className="text-muted-foreground">Content for HSE Induction Center Reports will be displayed here.</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Contractor HSE Performance</h2>
            <p className="text-muted-foreground">Content for Contractor HSE Performance will be displayed here.</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">HSE Highlights</h2>
            <p className="text-muted-foreground">Content for HSE Highlights will be displayed here.</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Monthly Water & Wastewater Reporting Format</h2>
            <p className="text-muted-foreground">Content for Monthly Water & Wastewater Reporting Format will be displayed here.</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Monthly Water & Produced Water Data Reporting</h2>
            <p className="text-muted-foreground">Content for Monthly Water & Produced Water Data Reporting will be displayed here.</p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default HSSEReports;
