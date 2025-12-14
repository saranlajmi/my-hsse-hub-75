import { Sidebar } from "@/components/Sidebar";
import { TopNavBar } from "@/components/TopNavBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { MessageCircle, ClipboardList, Award, Presentation } from "lucide-react";
import hsseLogo from "@/assets/hsse-logo-v2.png";

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

          <Tabs defaultValue="registration" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="registration" className="flex items-center gap-2">
                <ClipboardList className="w-4 h-4" />
                HSE Induction Center Registration
              </TabsTrigger>
              <TabsTrigger value="passport" className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                My E-HSE Induction Passport
              </TabsTrigger>
              <TabsTrigger value="presentations" className="flex items-center gap-2">
                <Presentation className="w-4 h-4" />
                HSE Induction Center Presentations
              </TabsTrigger>
            </TabsList>

            <TabsContent value="registration">
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">HSE Induction Center Registration</h2>
                <p className="text-muted-foreground">
                  Register for HSE induction sessions and manage your registration details.
                </p>
              </Card>
            </TabsContent>

            <TabsContent value="passport">
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">My E-HSE Induction Passport</h2>
                <p className="text-muted-foreground">
                  View and manage your electronic HSE induction passport and completed certifications.
                </p>
              </Card>
            </TabsContent>

            <TabsContent value="presentations">
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">HSE Induction Center Presentations</h2>
                <p className="text-muted-foreground">
                  Access HSE induction presentation materials and training resources.
                </p>
              </Card>
            </TabsContent>
          </Tabs>
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
