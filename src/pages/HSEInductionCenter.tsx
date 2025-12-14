import { Sidebar } from "@/components/Sidebar";
import { TopNavBar } from "@/components/TopNavBar";
import { Card } from "@/components/ui/card";
import { MessageCircle, ClipboardList, Award, Presentation } from "lucide-react";
import { Link } from "react-router-dom";
import hsseLogo from "@/assets/hsse-logo-v2.png";

const inductionSections = [
  {
    id: "registration",
    title: "HSE Induction Center Registration",
    description: "Register for HSE induction sessions and manage your registration details.",
    icon: ClipboardList,
    path: "/hse-induction/registration"
  },
  {
    id: "passport",
    title: "My E-HSE Induction Passport",
    description: "View and manage your electronic HSE induction passport and completed certifications.",
    icon: Award,
    path: "/hse-induction/passport"
  },
  {
    id: "presentations",
    title: "HSE Induction Center Presentations",
    description: "Access HSE induction presentation materials and training resources.",
    icon: Presentation,
    path: "/hse-induction/presentations"
  }
];

const HSEInductionCenter = () => {
  return (
    <div className="min-h-screen bg-muted/30 flex">
      <Sidebar />
      
      <main className="flex-1 ml-52">
        <TopNavBar />

        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground mb-2">HSE Induction Center</h1>
            <p className="text-muted-foreground max-w-2xl">
              Manage your HSE induction registration, passport, and access presentation materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inductionSections.map((section) => (
              <Link key={section.id} to={section.path}>
                <Card className="p-6 h-full hover:shadow-lg hover:border-primary/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <section.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {section.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
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
        <button className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
          <MessageCircle className="w-6 h-6" />
        </button>
      </main>
    </div>
  );
};

export default HSEInductionCenter;
