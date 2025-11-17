import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import bodyFront from "@/assets/body-diagram-front.png";
import bodyBack from "@/assets/body-diagram-back.png";
import { Button } from "@/components/ui/button";

interface BodyDiagramProps {
  selectedParts: string[];
  onSelectionChange: (parts: string[]) => void;
}

const bodyParts = {
  front: [
    { id: "head-front", label: "Head", x: 50, y: 8, width: 15, height: 12 },
    { id: "neck-front", label: "Neck", x: 50, y: 20, width: 12, height: 6 },
    { id: "right-shoulder", label: "Right Shoulder", x: 30, y: 26, width: 15, height: 10 },
    { id: "left-shoulder", label: "Left Shoulder", x: 70, y: 26, width: 15, height: 10 },
    { id: "chest", label: "Chest", x: 50, y: 35, width: 25, height: 15 },
    { id: "right-upper-arm", label: "Right Upper Arm", x: 20, y: 40, width: 12, height: 18 },
    { id: "left-upper-arm", label: "Left Upper Arm", x: 80, y: 40, width: 12, height: 18 },
    { id: "abdomen", label: "Abdomen", x: 50, y: 50, width: 22, height: 12 },
    { id: "right-forearm", label: "Right Forearm", x: 18, y: 58, width: 10, height: 18 },
    { id: "left-forearm", label: "Left Forearm", x: 82, y: 58, width: 10, height: 18 },
    { id: "right-hand", label: "Right Hand", x: 16, y: 76, width: 8, height: 10 },
    { id: "left-hand", label: "Left Hand", x: 84, y: 76, width: 8, height: 10 },
    { id: "right-thigh", label: "Right Thigh", x: 42, y: 62, width: 12, height: 18 },
    { id: "left-thigh", label: "Left Thigh", x: 58, y: 62, width: 12, height: 18 },
    { id: "right-knee", label: "Right Knee", x: 42, y: 80, width: 12, height: 8 },
    { id: "left-knee", label: "Left Knee", x: 58, y: 80, width: 12, height: 8 },
    { id: "right-shin", label: "Right Lower Leg", x: 42, y: 88, width: 10, height: 20 },
    { id: "left-shin", label: "Left Lower Leg", x: 58, y: 88, width: 10, height: 20 },
    { id: "right-foot", label: "Right Foot", x: 40, y: 108, width: 12, height: 8 },
    { id: "left-foot", label: "Left Foot", x: 58, y: 108, width: 12, height: 8 },
  ],
  back: [
    { id: "head-back", label: "Back of Head", x: 50, y: 8, width: 15, height: 12 },
    { id: "neck-back", label: "Neck", x: 50, y: 20, width: 12, height: 6 },
    { id: "right-shoulder-back", label: "Right Shoulder", x: 30, y: 26, width: 15, height: 10 },
    { id: "left-shoulder-back", label: "Left Shoulder", x: 70, y: 26, width: 15, height: 10 },
    { id: "upper-back", label: "Upper Back", x: 50, y: 35, width: 25, height: 15 },
    { id: "right-upper-arm-back", label: "Right Upper Arm", x: 20, y: 40, width: 12, height: 18 },
    { id: "left-upper-arm-back", label: "Left Upper Arm", x: 80, y: 40, width: 12, height: 18 },
    { id: "lower-back", label: "Lower Back", x: 50, y: 50, width: 22, height: 12 },
    { id: "right-forearm-back", label: "Right Forearm", x: 18, y: 58, width: 10, height: 18 },
    { id: "left-forearm-back", label: "Left Forearm", x: 82, y: 58, width: 10, height: 18 },
    { id: "right-hand-back", label: "Right Hand", x: 16, y: 76, width: 8, height: 10 },
    { id: "left-hand-back", label: "Left Hand", x: 84, y: 76, width: 8, height: 10 },
    { id: "right-thigh-back", label: "Right Thigh", x: 42, y: 62, width: 12, height: 18 },
    { id: "left-thigh-back", label: "Left Thigh", x: 58, y: 62, width: 12, height: 18 },
    { id: "right-knee-back", label: "Right Knee", x: 42, y: 80, width: 12, height: 8 },
    { id: "left-knee-back", label: "Left Knee", x: 58, y: 80, width: 12, height: 8 },
    { id: "right-calf", label: "Right Calf", x: 42, y: 88, width: 10, height: 20 },
    { id: "left-calf", label: "Left Calf", x: 58, y: 88, width: 10, height: 20 },
    { id: "right-foot-back", label: "Right Foot", x: 40, y: 108, width: 12, height: 8 },
    { id: "left-foot-back", label: "Left Foot", x: 58, y: 108, width: 12, height: 8 },
  ],
};

export const BodyDiagram = ({ selectedParts, onSelectionChange }: BodyDiagramProps) => {
  const [view, setView] = useState<"front" | "back">("front");

  const toggleBodyPart = (partId: string) => {
    if (selectedParts.includes(partId)) {
      onSelectionChange(selectedParts.filter((id) => id !== partId));
    } else {
      onSelectionChange([...selectedParts, partId]);
    }
  };

  const clearSelection = () => {
    onSelectionChange([]);
  };

  const currentParts = bodyParts[view];
  const currentImage = view === "front" ? bodyFront : bodyBack;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">Select Injured Body Part(s)</Label>
        <div className="flex gap-2">
          <Button
            type="button"
            variant={view === "front" ? "default" : "outline"}
            size="sm"
            onClick={() => setView("front")}
          >
            Front
          </Button>
          <Button
            type="button"
            variant={view === "back" ? "default" : "outline"}
            size="sm"
            onClick={() => setView("back")}
          >
            Back
          </Button>
          {selectedParts.length > 0 && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={clearSelection}
            >
              Clear
            </Button>
          )}
        </div>
      </div>

      <Card className="p-4">
        <div className="relative w-full max-w-md mx-auto">
          <img
            src={currentImage}
            alt={`Body diagram - ${view} view`}
            className="w-full h-auto"
          />
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 120"
            style={{ pointerEvents: "none" }}
          >
            {currentParts.map((part) => {
              const isSelected = selectedParts.includes(part.id);
              return (
                <g key={part.id}>
                  <rect
                    x={part.x - part.width / 2}
                    y={part.y - part.height / 2}
                    width={part.width}
                    height={part.height}
                    rx="2"
                    fill={isSelected ? "rgba(239, 68, 68, 0.3)" : "transparent"}
                    stroke={isSelected ? "rgb(239, 68, 68)" : "rgba(59, 130, 246, 0.3)"}
                    strokeWidth="0.5"
                    className="transition-all duration-200 cursor-pointer hover:fill-primary/10 hover:stroke-primary"
                    style={{ pointerEvents: "all" }}
                    onClick={() => toggleBodyPart(part.id)}
                  />
                </g>
              );
            })}
          </svg>
        </div>
      </Card>

      {selectedParts.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedParts.map((partId) => {
            const part = [...bodyParts.front, ...bodyParts.back].find(
              (p) => p.id === partId
            );
            return (
              part && (
                <Badge
                  key={partId}
                  variant="destructive"
                  className="cursor-pointer"
                  onClick={() => toggleBodyPart(partId)}
                >
                  {part.label} ×
                </Badge>
              )
            );
          })}
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        Click on body parts to select injured areas. You can select multiple parts.
      </p>
    </div>
  );
};
