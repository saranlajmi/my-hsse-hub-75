import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import bodyFront from "@/assets/body-diagram-front-new.png";
import bodyBack from "@/assets/body-diagram-back-new.png";
import { Button } from "@/components/ui/button";

interface BodyDiagramProps {
  selectedParts: string[];
  onSelectionChange: (parts: string[]) => void;
}

const bodyParts = {
  front: [
    { id: "head-front", label: "Head", x: 50, y: 10, width: 14, height: 14 },
    { id: "neck-front", label: "Neck", x: 50, y: 22, width: 8, height: 5 },
    { id: "right-shoulder", label: "Right Shoulder", x: 35, y: 28, width: 12, height: 8 },
    { id: "left-shoulder", label: "Left Shoulder", x: 65, y: 28, width: 12, height: 8 },
    { id: "chest", label: "Chest", x: 50, y: 38, width: 20, height: 14 },
    { id: "right-upper-arm", label: "Right Upper Arm", x: 25, y: 42, width: 8, height: 16 },
    { id: "left-upper-arm", label: "Left Upper Arm", x: 75, y: 42, width: 8, height: 16 },
    { id: "abdomen", label: "Abdomen", x: 50, y: 52, width: 18, height: 12 },
    { id: "right-forearm", label: "Right Forearm", x: 22, y: 60, width: 7, height: 16 },
    { id: "left-forearm", label: "Left Forearm", x: 78, y: 60, width: 7, height: 16 },
    { id: "right-hand", label: "Right Hand", x: 20, y: 77, width: 6, height: 8 },
    { id: "left-hand", label: "Left Hand", x: 80, y: 77, width: 6, height: 8 },
    { id: "groin", label: "Groin/Pelvis", x: 50, y: 64, width: 16, height: 8 },
    { id: "right-thigh", label: "Right Thigh", x: 44, y: 76, width: 9, height: 18 },
    { id: "left-thigh", label: "Left Thigh", x: 56, y: 76, width: 9, height: 18 },
    { id: "right-knee", label: "Right Knee", x: 44, y: 94, width: 8, height: 6 },
    { id: "left-knee", label: "Left Knee", x: 56, y: 94, width: 8, height: 6 },
    { id: "right-shin", label: "Right Lower Leg", x: 44, y: 104, width: 7, height: 18 },
    { id: "left-shin", label: "Left Lower Leg", x: 56, y: 104, width: 7, height: 18 },
    { id: "right-ankle", label: "Right Ankle", x: 44, y: 122, width: 6, height: 4 },
    { id: "left-ankle", label: "Left Ankle", x: 56, y: 122, width: 6, height: 4 },
    { id: "right-foot", label: "Right Foot", x: 44, y: 128, width: 8, height: 6 },
    { id: "left-foot", label: "Left Foot", x: 56, y: 128, width: 8, height: 6 },
  ],
  back: [
    { id: "head-back", label: "Back of Head", x: 50, y: 10, width: 14, height: 14 },
    { id: "neck-back", label: "Neck (Back)", x: 50, y: 22, width: 8, height: 5 },
    { id: "right-shoulder-back", label: "Right Shoulder", x: 35, y: 28, width: 12, height: 8 },
    { id: "left-shoulder-back", label: "Left Shoulder", x: 65, y: 28, width: 12, height: 8 },
    { id: "upper-back", label: "Upper Back", x: 50, y: 38, width: 20, height: 14 },
    { id: "right-upper-arm-back", label: "Right Upper Arm", x: 25, y: 42, width: 8, height: 16 },
    { id: "left-upper-arm-back", label: "Left Upper Arm", x: 75, y: 42, width: 8, height: 16 },
    { id: "lower-back", label: "Lower Back", x: 50, y: 52, width: 18, height: 12 },
    { id: "right-forearm-back", label: "Right Forearm", x: 22, y: 60, width: 7, height: 16 },
    { id: "left-forearm-back", label: "Left Forearm", x: 78, y: 60, width: 7, height: 16 },
    { id: "right-hand-back", label: "Right Hand", x: 20, y: 77, width: 6, height: 8 },
    { id: "left-hand-back", label: "Left Hand", x: 80, y: 77, width: 6, height: 8 },
    { id: "buttocks", label: "Buttocks", x: 50, y: 64, width: 16, height: 10 },
    { id: "right-thigh-back", label: "Right Thigh (Back)", x: 44, y: 76, width: 9, height: 18 },
    { id: "left-thigh-back", label: "Left Thigh (Back)", x: 56, y: 76, width: 9, height: 18 },
    { id: "right-knee-back", label: "Right Knee (Back)", x: 44, y: 94, width: 8, height: 6 },
    { id: "left-knee-back", label: "Left Knee (Back)", x: 56, y: 94, width: 8, height: 6 },
    { id: "right-calf", label: "Right Calf", x: 44, y: 104, width: 7, height: 18 },
    { id: "left-calf", label: "Left Calf", x: 56, y: 104, width: 7, height: 18 },
    { id: "right-ankle-back", label: "Right Ankle", x: 44, y: 122, width: 6, height: 4 },
    { id: "left-ankle-back", label: "Left Ankle", x: 56, y: 122, width: 6, height: 4 },
    { id: "right-foot-back", label: "Right Foot (Back)", x: 44, y: 128, width: 8, height: 6 },
    { id: "left-foot-back", label: "Left Foot (Back)", x: 56, y: 128, width: 8, height: 6 },
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
            viewBox="0 0 100 135"
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
