import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { ChevronDown, ChevronUp, TrendingUp, AlertTriangle, Truck, Monitor, Briefcase, Award, Droplet } from "lucide-react";
import { cn } from "@/lib/utils";
import { TopNavBar } from "@/components/TopNavBar";

interface ReportCategory {
  id: string;
  title: string;
  reportsCount: number;
  icon: React.ReactNode;
  iconBgColor: string;
  reports: string[];
}

const reportCategories: ReportCategory[] = [
  {
    id: "leading",
    title: "Leading Indicators",
    reportsCount: 3,
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    iconBgColor: "bg-primary/10",
    reports: ["Safety Observations Report", "Training Completion Report", "Inspection Completion Report"]
  },
  {
    id: "lagging",
    title: "Lagging Indicators",
    reportsCount: 4,
    icon: <AlertTriangle className="w-5 h-5 text-destructive" />,
    iconBgColor: "bg-destructive/10",
    reports: ["Incident Summary Report", "Lost Time Injury Report", "Environmental Incidents Report", "Near Miss Analysis Report"]
  },
  {
    id: "contractor-management",
    title: "Contractor HSE Management",
    reportsCount: 3,
    icon: <Truck className="w-5 h-5 text-green-600" />,
    iconBgColor: "bg-green-100",
    reports: ["Contractor Compliance Report", "Contractor Training Report", "Contractor Audit Report"]
  },
  {
    id: "induction",
    title: "HSE Induction Center",
    reportsCount: 3,
    icon: <Monitor className="w-5 h-5 text-muted-foreground" />,
    iconBgColor: "bg-muted",
    reports: ["Induction Completion Report", "Induction Statistics Report", "Pending Inductions Report"]
  },
  {
    id: "contractor-performance",
    title: "Contractor HSE Performance",
    reportsCount: 3,
    icon: <Briefcase className="w-5 h-5 text-muted-foreground" />,
    iconBgColor: "bg-muted",
    reports: ["Performance Scorecard", "Contractor Incident Report", "Contractor Safety Metrics"]
  },
  {
    id: "highlights",
    title: "HSE Highlights",
    reportsCount: 3,
    icon: <Award className="w-5 h-5 text-destructive" />,
    iconBgColor: "bg-destructive/10",
    reports: ["Monthly Highlights", "Safety Achievements", "Recognition Report"]
  },
  {
    id: "water",
    title: "Water & Wastewater Reporting",
    reportsCount: 4,
    icon: <Droplet className="w-5 h-5 text-primary" />,
    iconBgColor: "bg-primary/10",
    reports: ["Monthly Water Report", "Wastewater Analysis", "Water Quality Report", "Produced Water Data"]
  }
];

const ReportCategoryCard = ({ category }: { category: ReportCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className={cn(
      "p-4 border transition-all duration-300",
      isOpen 
        ? "border-primary/30 bg-primary/5" 
        : "border-border bg-card"
    )}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <div className={cn("p-2 rounded-lg", category.iconBgColor)}>
                {category.icon}
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.reportsCount} reports available</p>
              </div>
            </div>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-4">
          <div className="border-t border-border pt-4 space-y-2">
            {category.reports.map((report, index) => (
              <div 
                key={index}
                className="p-3 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors"
              >
                <span className="text-sm text-foreground">{report}</span>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

const HSSEReports = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <main className="flex-1 ml-64">
        <TopNavBar />

        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground">HSSE Reports</h2>
            <p className="text-muted-foreground">Click on any category to view available reports and drill-down options.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reportCategories.map((category) => (
              <ReportCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HSSEReports;
