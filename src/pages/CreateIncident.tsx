import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, GraduationCap, MessageCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserProfileDropdown } from "@/components/UserProfileDropdown";
import logo from "@/assets/logo.png";

const consequences = [
  { id: "personal-injury", label: "Personal Injury" },
  { id: "fire-explosion", label: "Fire/Explosion" },
  { id: "legal-regulatory", label: "Legal / Regulatory" },
  { id: "business-reputation", label: "Business Reputation" },
  { id: "motor-vehicle", label: "Motor Vehicle Accident" },
  { id: "asset-damage", label: "Asset Damage" },
  { id: "company-reputation", label: "Company Reputation" },
];

const CreateIncident = () => {
  const [selectedConsequences, setSelectedConsequences] = useState<string[]>([]);

  const toggleConsequence = (id: string) => {
    setSelectedConsequences(prev => 
      prev.includes(id) 
        ? prev.filter(c => c !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-muted/30 flex">
      <Sidebar />
      
      <main className="flex-1 ml-52">
        {/* Top Navigation Bar */}
        <div className="bg-background border-b border-border px-6 py-3 flex items-center justify-between sticky top-0 z-10">
          <div className="flex-1" />
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-2" asChild>
              <Link to="/hsse-reports">
                <FileText className="w-4 h-4" />
                HSSE Reports
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-2" asChild>
              <Link to="/hse-induction/registration">
                <GraduationCap className="w-4 h-4" />
                HSE Induction Center
              </Link>
            </Button>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Theme:</span>
                <Select defaultValue="light">
                  <SelectTrigger className="w-24 h-8 text-sm">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <UserProfileDropdown />
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Select HSE Measures Section */}
          <Card className="p-6 bg-card border border-border">
            <h2 className="text-xl font-bold text-foreground mb-6">Select HSE Measures</h2>
            
            <div className="space-y-6">
              {/* Category */}
              <div className="space-y-2 max-w-md">
                <Label htmlFor="category" className="text-sm font-medium">
                  Category<span className="text-destructive">*</span>
                </Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="incident">Incident</SelectItem>
                    <SelectItem value="near-miss">Near Miss</SelectItem>
                    <SelectItem value="observation">Observation</SelectItem>
                    <SelectItem value="hazard">Hazard</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Occupational Health or Process Safety */}
              <div className="space-y-2 max-w-md">
                <Label htmlFor="incident-type" className="text-sm font-medium text-primary">
                  Is the Incident related to Occupational Health and Safety or Process Safety?<span className="text-destructive">*</span>
                </Label>
                <Select>
                  <SelectTrigger id="incident-type" className="border-primary">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="occupational">Occupational Health and Safety</SelectItem>
                    <SelectItem value="process">Process Safety</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Consequences */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">
                  Consequences (select all that apply)
                </Label>
                <div className="grid grid-cols-2 gap-3">
                  {consequences.map((consequence) => (
                    <div key={consequence.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={consequence.id}
                        checked={selectedConsequences.includes(consequence.id)}
                        onCheckedChange={() => toggleConsequence(consequence.id)}
                      />
                      <label 
                        htmlFor={consequence.id}
                        className="text-sm text-foreground cursor-pointer"
                      >
                        {consequence.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Incident Information Section */}
          <Card className="p-6 bg-card border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-6">Incident Information</h3>
            
            <div className="space-y-6">
              {/* Row 1: Directorate and Group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="directorate" className="text-sm font-medium">
                    Directorate
                  </Label>
                  <Select>
                    <SelectTrigger id="directorate">
                      <SelectValue placeholder="Select directorate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gas-environment">Gas & Environment Directorate</SelectItem>
                      <SelectItem value="exploration">Exploration Directorate</SelectItem>
                      <SelectItem value="drilling">Drilling Directorate</SelectItem>
                      <SelectItem value="production">Production Directorate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="group" className="text-sm font-medium">
                    Group
                  </Label>
                  <Select>
                    <SelectTrigger id="group">
                      <SelectValue placeholder="Select group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="group-a">Group A</SelectItem>
                      <SelectItem value="group-b">Group B</SelectItem>
                      <SelectItem value="group-c">Group C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Row 2: Team, KOC ID, Reported on behalf */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="team" className="text-sm font-medium">
                    Team
                  </Label>
                  <Select>
                    <SelectTrigger id="team">
                      <SelectValue placeholder="Select team" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="team-1">Team 1</SelectItem>
                      <SelectItem value="team-2">Team 2</SelectItem>
                      <SelectItem value="team-3">Team 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="koc-id" className="text-sm font-medium">
                    KOC ID
                  </Label>
                  <Input 
                    id="koc-id"
                    placeholder="Enter KOC ID"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reported-behalf" className="text-sm font-medium">
                    Reported on behalf
                  </Label>
                  <Input 
                    id="reported-behalf"
                    placeholder="Enter name if reporting on behalf of someone"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Row 3: Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="incident-date" className="text-sm font-medium">
                    Date<span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    id="incident-date"
                    type="date"
                    placeholder="mm/dd/yyyy"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="incident-time" className="text-sm font-medium">
                    Time<span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Input 
                      id="incident-time"
                      type="time"
                      className="w-full"
                    />
                    <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 4: Work Operation and Other Work Operation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="work-operation" className="text-sm font-medium">
                    Work Operation
                  </Label>
                  <Select>
                    <SelectTrigger id="work-operation">
                      <SelectValue placeholder="Select work operation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="drilling">Drilling</SelectItem>
                      <SelectItem value="production">Production</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="other-work-operation" className="text-sm font-medium">
                    Other Work Operation
                  </Label>
                  <Input 
                    id="other-work-operation"
                    placeholder="Specify other work operation"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-3">
            <Button type="button" variant="outline" asChild>
              <Link to="/">Cancel</Link>
            </Button>
            <Button type="submit" variant="default">
              Continue
            </Button>
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

export default CreateIncident;
