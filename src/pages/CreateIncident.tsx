import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, Upload, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CreateIncident = () => {
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments([...attachments, ...Array.from(e.target.files)]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <main className="flex-1 ml-64">
        {/* Header Bar with HSSE Links */}
        <div className="bg-primary/5 border-b border-border px-6 py-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-foreground hover:bg-primary/10" asChild>
              <Link to="/hsse-reports">HSSE Reports</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:bg-primary/10">
              HSSE Tutorials
            </Button>
          </div>
        </div>

        {/* Top Navigation Bar */}
        <div className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">← Back</Button>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Report Health and Safety Incident</h1>
          </div>
          <div className="flex items-center gap-3">
            <Input 
              placeholder="Search..." 
              className="w-64"
            />
            <Button variant="default" size="sm">
              Feedback
            </Button>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
              AK
            </div>
          </div>
        </div>

        <div className="p-6 max-w-4xl mx-auto">
          {/* Emergency Notice */}
          <Card className="p-4 mb-6 bg-destructive/10 border-destructive/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">
                <strong>Emergency Notice:</strong> If you think you or someone is having a medical or mental health emergency, call 911 or go to the nearest hospital.
              </p>
            </div>
          </Card>

          {/* Incident Reporting Form */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Incident Details</h2>
            
            <form className="space-y-6">
              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category" className="text-sm font-medium">
                  Category <span className="text-destructive">*</span>
                </Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select incident category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="equipment-damage">Equipment Damage</SelectItem>
                    <SelectItem value="injury-illness">Injury and Illness</SelectItem>
                    <SelectItem value="near-miss">Near Miss</SelectItem>
                    <SelectItem value="environmental">Environmental Incident</SelectItem>
                    <SelectItem value="property-damage">Property Damage</SelectItem>
                    <SelectItem value="vehicle-incident">Vehicle Incident</SelectItem>
                    <SelectItem value="security">Security Incident</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Affected Person(s) */}
              <div className="space-y-2">
                <Label htmlFor="affected-person" className="text-sm font-medium">
                  Affected Person(s) <span className="text-destructive">*</span>
                </Label>
                <Input 
                  id="affected-person"
                  placeholder="Enter name of affected person(s)"
                  className="w-full"
                />
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="incident-date" className="text-sm font-medium">
                    Date <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    id="incident-date"
                    type="date"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="incident-time" className="text-sm font-medium">
                    Time <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    id="incident-time"
                    type="time"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-medium">
                  Location <span className="text-destructive">*</span>
                </Label>
                <Select>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="campus-1">Illinois Campus 1</SelectItem>
                    <SelectItem value="campus-2">Texas Campus 2</SelectItem>
                    <SelectItem value="campus-3">California Campus 3</SelectItem>
                    <SelectItem value="office-building-a">Office Building A</SelectItem>
                    <SelectItem value="warehouse">Warehouse</SelectItem>
                    <SelectItem value="parking-lot">Parking Lot</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* What Happened - Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium">
                  What happened? <span className="text-destructive">*</span>
                </Label>
                <Textarea 
                  id="description"
                  placeholder="Provide a detailed description of what happened..."
                  className="w-full min-h-[120px]"
                />
              </div>

              {/* Injury Details (if applicable) */}
              <div className="space-y-2">
                <Label htmlFor="injury-details" className="text-sm font-medium">
                  What was the injury? (if applicable)
                </Label>
                <Input 
                  id="injury-details"
                  placeholder="Describe the nature of the injury"
                  className="w-full"
                />
              </div>

              {/* Witness Information */}
              <div className="space-y-2">
                <Label htmlFor="witnesses" className="text-sm font-medium">
                  Witness(es)
                </Label>
                <Textarea 
                  id="witnesses"
                  placeholder="List any witnesses and their contact information..."
                  className="w-full min-h-[80px]"
                />
              </div>

              {/* Root Cause */}
              <div className="space-y-2">
                <Label htmlFor="root-cause" className="text-sm font-medium">
                  Suspected Root Cause
                </Label>
                <Textarea 
                  id="root-cause"
                  placeholder="What do you believe caused this incident?"
                  className="w-full min-h-[80px]"
                />
              </div>

              {/* Corrective Actions */}
              <div className="space-y-2">
                <Label htmlFor="corrective-actions" className="text-sm font-medium">
                  Corrective Actions Taken
                </Label>
                <Textarea 
                  id="corrective-actions"
                  placeholder="What immediate actions were taken to address the incident?"
                  className="w-full min-h-[80px]"
                />
              </div>

              {/* Attachments */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Add Attachments
                </Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Upload className="w-8 h-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Photos, documents, or any relevant files
                    </p>
                    <Input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById('file-upload')?.click()}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Select Files
                    </Button>
                  </div>
                </div>
                
                {/* Display uploaded files */}
                {attachments.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {attachments.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-md">
                        <span className="text-sm text-foreground">{file.name}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeAttachment(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Form Actions */}
              <div className="flex items-center justify-end gap-3 pt-6 border-t">
                <Button type="button" variant="outline" asChild>
                  <Link to="/">Cancel</Link>
                </Button>
                <Button type="submit" variant="default">
                  Submit Report
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CreateIncident;
