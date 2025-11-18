import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Flame, 
  HardHat, 
  ClipboardCheck, 
  Binoculars, 
  MessageSquare, 
  MapPin,
  Sparkles,
  Send
} from "lucide-react";

const challenges = [
  {
    title: "Fire Safety Quiz",
    description: "Test your knowledge about fire prevention and emergency procedures.",
    points: 100,
    icon: Flame,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "PPE Assessment",
    description: "Identify the correct personal protective equipment for different scenarios.",
    points: 150,
    icon: HardHat,
    gradient: "from-orange-400 to-yellow-500",
  },
  {
    title: "Hazard Report",
    description: "Submit a report about a potential safety hazard you've identified.",
    points: 50,
    icon: ClipboardCheck,
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    title: "Near Miss Report",
    description: "Report incidents that could have resulted in injury or damage but were avoided.",
    points: 75,
    icon: Binoculars,
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    title: "Safety Observation",
    description: "Document your safety conversations and behavioral observations.",
    points: 60,
    icon: MessageSquare,
    gradient: "from-emerald-500 to-green-600",
  },
  {
    title: "Site Verification",
    description: "Conduct and document site safety verification inspections.",
    points: 80,
    icon: MapPin,
    gradient: "from-red-400 to-rose-500",
  },
];

const HSSETutorials = () => {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <Sidebar />
      
      <main className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-muted/50 border-b border-border px-6 py-4">
          <h1 className="text-xl font-semibold text-foreground">HSSE Tutorials</h1>
        </header>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Safety Challenges Section */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Safety Challenges</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Gradient Header */}
                  <div className={`h-32 bg-gradient-to-br ${challenge.gradient} flex items-center justify-center`}>
                    <challenge.icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-bold text-foreground">{challenge.title}</h3>
                      <Badge variant="secondary" className="ml-2">
                        {challenge.points} pts
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {challenge.description}
                    </p>
                    
                    <Button className="w-full" variant="default">
                      Start Challenge
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* AI Assistant Section */}
          <section className="max-w-md">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">AI Assistant</h3>
                  <p className="text-sm text-muted-foreground">Powered by Gemini</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <p className="text-sm font-medium text-foreground">Quick suggestions:</p>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-left h-auto py-3"
                  size="sm"
                >
                  Help me report a leak incident
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-left h-auto py-3"
                  size="sm"
                >
                  Show my pending HSSE actions
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-left h-auto py-3"
                  size="sm"
                >
                  Explain confined space entry procedure
                </Button>
              </div>

              <div className="flex gap-2">
                <Input 
                  placeholder="Ask me anything about HSSE..." 
                  className="flex-1"
                />
                <Button size="icon" className="flex-shrink-0">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HSSETutorials;
