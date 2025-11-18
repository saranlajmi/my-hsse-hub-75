import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

const moduleTypes = [
  "SOC",
  "Near Miss",
  "Incidents",
  "Workplace Illnesses",
  "Hazardous Conditions",
  "Audit/Inspection",
  "Meeting",
  "HSE Audit Register",
  "SVVs by CAEs",
  "Security Incidents",
  "SVVs by NCAEs",
  "Security NearMiss",
];

const EditSearch = () => {
  const [selectedModule, setSelectedModule] = useState("Near Miss");
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-background">
      <Sidebar />
      
      <main className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-muted/50 border-b border-border px-6 py-4">
          <div className="flex items-center gap-2">
            <SearchIcon className="w-5 h-5 text-muted-foreground" />
            <h1 className="text-xl font-semibold text-foreground">Edit/Search</h1>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-6">
              Through this Module, You can track the performance of various HSSE Measures. Please select the Module from the drop down list to track the performance.
            </p>

            {/* Module Type Dropdown */}
            <div className="mb-8">
              <Label htmlFor="module-type" className="text-base font-semibold mb-2 block">
                Module Type
              </Label>
              <Select value={selectedModule} onValueChange={setSelectedModule}>
                <SelectTrigger id="module-type" className="w-full max-w-md">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover z-50">
                  {moduleTypes.map((module) => (
                    <SelectItem key={module} value={module}>
                      {module}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search Filters */}
            <Card className="p-6 bg-muted/20">
              <h2 className="text-lg font-semibold mb-6 text-foreground">Search</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="directorate" className="text-sm">Directorate</Label>
                    <Input id="directorate" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="group" className="text-sm">Group</Label>
                    <Input id="group" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="team" className="text-sm">Team</Label>
                    <Input id="team" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="work-operation" className="text-sm">Work Operation</Label>
                    <Input id="work-operation" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="reporter" className="text-sm">Reporter</Label>
                    <Input id="reporter" className="mt-1" />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="priority" className="text-sm">Near Miss Priority</Label>
                    <Select>
                      <SelectTrigger id="priority" className="mt-1">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover z-50">
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="tl-hse" className="text-sm">TL-HSE (As Entered By)</Label>
                    <Input id="tl-hse" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="entered-by" className="text-sm">Entered (or Registered On Behalf)</Label>
                    <Select>
                      <SelectTrigger id="entered-by" className="mt-1">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover z-50">
                        <SelectItem value="self">Self</SelectItem>
                        <SelectItem value="behalf">On Behalf</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="status" className="text-sm">Status</Label>
                    <Select>
                      <SelectTrigger id="status" className="mt-1">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover z-50">
                        <SelectItem value="open">Open</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Label htmlFor="date-from" className="text-sm">Date From</Label>
                      <Input id="date-from" type="date" className="mt-1" />
                    </div>
                    <div className="flex items-end">
                      <Button variant="outline" size="sm">
                        Select Date
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Show All Checkbox and Search Button */}
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="show-all" 
                    checked={showAll}
                    onCheckedChange={(checked) => setShowAll(checked as boolean)}
                  />
                  <Label htmlFor="show-all" className="text-sm cursor-pointer">
                    Show All
                  </Label>
                </div>
                
                <Button className="ml-4">
                  Search
                </Button>
              </div>
            </Card>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default EditSearch;
