import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const HSSEReports = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <main className="flex-1 ml-64">
        {/* Header Bar with HSSE Links */}
        <div className="bg-primary/5 border-b border-border px-6 py-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="bg-primary/20 text-foreground hover:bg-primary/10">
              HSSE Reports
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:bg-primary/10">
              HSSE Tutorials
            </Button>
          </div>
        </div>

        {/* Top Navigation Bar */}
        <div className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-foreground">HSSE Reports</h1>
          </div>
          <div className="flex items-center gap-3">
            <Input 
              placeholder="Search..." 
              className="w-64"
            />
            <Button variant="default" size="sm">
              Feedback
            </Button>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
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
