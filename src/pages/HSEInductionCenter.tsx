import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { TopNavBar } from "@/components/TopNavBar";
import { MessageCircle, CheckCircle } from "lucide-react";
import logo from "@/assets/logo.png";

interface InductionModule {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  estimatedTime: string;
  actionLabel: string;
  hasIcon?: boolean;
}

const inductionModules: InductionModule[] = [
  {
    id: "general-hse",
    category: "Core Induction",
    categoryColor: "text-foreground",
    title: "General HSE Induction",
    description: "Overview of KOC HSE expectations, golden rules, and key responsibilities for all employees and contractors.",
    estimatedTime: "20 min",
    actionLabel: "Start module"
  },
  {
    id: "emergency-response",
    category: "Life Saving",
    categoryColor: "text-foreground",
    title: "Emergency Response & Evacuation",
    description: "Learn alarm signals, evacuation routes, assembly points, and your role during site emergencies.",
    estimatedTime: "15 min",
    actionLabel: "View guide"
  },
  {
    id: "hazard-identification",
    category: "Risk",
    categoryColor: "text-foreground",
    title: "Hazard Identification & Reporting",
    description: "How to recognize unsafe conditions, report near misses, and use the incident management system effectively.",
    estimatedTime: "15 min",
    actionLabel: "Open walkthrough"
  },
  {
    id: "permit-to-work",
    category: "Procedures",
    categoryColor: "text-primary",
    title: "Permit to Work & Site Rules",
    description: "Summary of permit-to-work requirements, confined space, hot work, and critical site safety rules.",
    estimatedTime: "25 min",
    actionLabel: "View procedures",
    hasIcon: true
  },
  {
    id: "personal-safety",
    category: "Wellbeing",
    categoryColor: "text-foreground",
    title: "Personal Safety & Wellbeing",
    description: "Guidance on PPE, ergonomics, driving safety, and reporting health or wellbeing concerns confidentially.",
    estimatedTime: "10 min",
    actionLabel: "Explore resources"
  }
];

const InductionCard = ({ module }: { module: InductionModule }) => {
  return (
    <Card className="p-6 border border-border bg-card hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        {module.hasIcon && (
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-primary" />
          </div>
        )}
        <span className={`text-sm font-medium ${module.categoryColor} ${!module.hasIcon ? 'ml-auto' : ''}`}>
          {module.category}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-2">{module.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Estimated time: {module.estimatedTime}</span>
        <button className="text-sm text-primary hover:underline font-medium">
          {module.actionLabel}
        </button>
      </div>
    </Card>
  );
};

const HSEInductionCenter = () => {
  return (
    <div className="min-h-screen bg-muted/30 flex">
      <Sidebar />
      
      <main className="flex-1 ml-52">
        <TopNavBar />

        <div className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">HSE Induction Center</h1>
              <p className="text-muted-foreground max-w-2xl">
                Quick access to key Health, Safety & Environment induction resources. Choose a topic below to learn more and complete required induction modules.
              </p>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-2 text-sm text-muted-foreground">
              For demonstration only — links can be wired to real content later.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inductionModules.map((module) => (
              <InductionCard key={module.id} module={module} />
            ))}
          </div>
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

export default HSEInductionCenter;
