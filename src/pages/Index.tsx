import { Sidebar } from "@/components/Sidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { PersonalTargets } from "@/components/dashboard/PersonalTargets";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { AIAssistant } from "@/components/dashboard/AIAssistant";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { AlertTriangle, CheckCircle2, Clock, TrendingUp, TrendingDown, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { UserProfileDropdown } from "@/components/UserProfileDropdown";

const Index = () => {
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
            <h1 className="text-2xl font-bold text-sidebar-foreground">Dashboard</h1>
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

        <div className="p-6 space-y-6">
          {/* Page Title Section */}
          <div className="space-y-1">
            <h2 className="text-3xl font-bold text-foreground">Overview</h2>
            <p className="text-muted-foreground text-sm">More information about your HSSE performance</p>
          </div>

          {/* Stats Grid - 3 columns matching reference */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4 bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Days Since Last Injury</p>
                  <p className="text-4xl font-bold text-foreground mt-2">127</p>
                  <p className="text-xs text-muted-foreground mt-1">Updated: {new Date().toLocaleDateString()}</p>
                </div>
                <div className="text-success bg-success/10 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-success">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">+15 days</span>
                </div>
                <span className="text-xs text-muted-foreground">from last quarter</span>
              </div>
            </Card>

            <Card className="p-6 space-y-4 bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Open Incidents</p>
                  <p className="text-4xl font-bold text-foreground mt-2">8</p>
                  <p className="text-xs text-muted-foreground mt-1">Updated: {new Date().toLocaleDateString()}</p>
                </div>
                <div className="text-warning bg-warning/10 p-3 rounded-lg">
                  <AlertTriangle className="w-6 h-6" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-success">
                  <TrendingDown className="w-4 h-4" />
                  <span className="text-sm font-medium">-2</span>
                </div>
                <span className="text-xs text-muted-foreground">from last week</span>
              </div>
            </Card>

            <Card className="p-6 space-y-4 bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Safety Score</p>
                  <p className="text-4xl font-bold text-foreground mt-2">94%</p>
                  <p className="text-xs text-muted-foreground mt-1">Updated: {new Date().toLocaleDateString()}</p>
                </div>
                <div className="text-success bg-success/10 p-3 rounded-lg">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-success">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">+3%</span>
                </div>
                <span className="text-xs text-muted-foreground">this month</span>
              </div>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <PersonalTargets />
              <RecentActivity />
            </div>
            
            <div className="space-y-6">
              <QuickActions />
              <AIAssistant />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
