import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ExternalLink, FileText } from "lucide-react";
import { UserProfileDropdown } from "@/components/UserProfileDropdown";

const HSSEProcedures = () => {
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
            <h1 className="text-2xl font-bold text-sidebar-foreground">HSSE Procedures</h1>
          </div>
          <div className="flex items-center gap-3">
            <Input 
              placeholder="Search..." 
              className="w-64 bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/60"
            />
            <Button variant="outline" size="sm" className="bg-transparent border-white text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground">
              Feedback
            </Button>
            <UserProfileDropdown />
          </div>
        </div>

        <div className="p-6 flex items-center justify-center min-h-[calc(100vh-200px)]">
          <Card className="p-12 max-w-2xl w-full text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-10 h-10 text-primary" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-foreground">Access HSSE Procedures</h2>
              <p className="text-muted-foreground text-lg">
                View all safety procedures, guidelines, and documentation in our procedures portal.
              </p>
            </div>

            <Button 
              size="lg" 
              className="w-full max-w-md mx-auto gap-2"
              onClick={() => window.open('https://mykocportal.kockw.com/sites/EG/HSE/Contents/HSE%20and%20HSE%20MS%20Procedures.aspx', '_blank')}
            >
              <ExternalLink className="w-5 h-5" />
              Open Procedures Portal
            </Button>

            <p className="text-sm text-muted-foreground">
              You will be redirected to the external procedures portal
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default HSSEProcedures;
