import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface Activity {
  id: string;
  type: "incident" | "near-miss" | "observation" | "action";
  title: string;
  status: "open" | "in-progress" | "closed";
  timestamp: string;
  location: string;
}

const activities: Activity[] = [
  {
    id: "1",
    type: "incident",
    title: "Minor slip on wet floor - Building A",
    status: "in-progress",
    timestamp: "2 hours ago",
    location: "Building A, Floor 2",
  },
  {
    id: "2",
    type: "near-miss",
    title: "Unsecured equipment near work area",
    status: "open",
    timestamp: "5 hours ago",
    location: "Workshop C",
  },
  {
    id: "3",
    type: "observation",
    title: "Good practice: Proper PPE usage observed",
    status: "closed",
    timestamp: "1 day ago",
    location: "Asset 3",
  },
  {
    id: "4",
    type: "action",
    title: "Complete fire safety training",
    status: "in-progress",
    timestamp: "2 days ago",
    location: "Training Center",
  },
];

const statusColors = {
  open: "bg-warning text-warning-foreground",
  "in-progress": "bg-info text-info-foreground",
  closed: "bg-success text-success-foreground",
};

const typeColors = {
  incident: "text-destructive",
  "near-miss": "text-warning",
  observation: "text-success",
  action: "text-primary",
};

export const RecentActivity = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold text-foreground mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
            <div className="flex-1 space-y-1">
              <p className={`font-medium ${typeColors[activity.type]}`}>{activity.title}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{activity.timestamp}</span>
                <span>•</span>
                <span>{activity.location}</span>
              </div>
            </div>
            <Badge className={statusColors[activity.status]}>
              {activity.status}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
};
