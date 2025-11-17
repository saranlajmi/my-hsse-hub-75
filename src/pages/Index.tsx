import { Sidebar } from "@/components/Sidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { PersonalTargets } from "@/components/dashboard/PersonalTargets";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { AIAssistant } from "@/components/dashboard/AIAssistant";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { AlertTriangle, CheckCircle2, Clock, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Welcome back, Ahmed</h1>
            <p className="text-muted-foreground">Here's your HSSE dashboard overview for today</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Days Since Last Injury"
              value="127"
              icon={CheckCircle2}
              variant="success"
              trend={{ value: "+15 days vs last quarter", isPositive: true }}
            />
            <StatsCard
              title="Open Incidents"
              value="8"
              icon={AlertTriangle}
              variant="warning"
              trend={{ value: "-2 from last week", isPositive: true }}
            />
            <StatsCard
              title="Pending Actions"
              value="5"
              icon={Clock}
              variant="danger"
              trend={{ value: "2 due this week", isPositive: false }}
            />
            <StatsCard
              title="Safety Score"
              value="94%"
              icon={TrendingUp}
              variant="success"
              trend={{ value: "+3% this month", isPositive: true }}
            />
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
