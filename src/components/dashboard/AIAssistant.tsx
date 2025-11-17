import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain, Send } from "lucide-react";
import { useState } from "react";

export const AIAssistant = () => {
  const [message, setMessage] = useState("");

  const suggestions = [
    "Help me report a leak incident",
    "Show my pending HSSE actions",
    "Explain confined space entry procedure",
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
          <Brain className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">AI Assistant</h2>
          <p className="text-sm text-muted-foreground">Powered by Gemini</p>
        </div>
      </div>

      <div className="space-y-4 mb-4">
        <p className="text-sm text-muted-foreground">Quick suggestions:</p>
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full justify-start text-left h-auto py-3 px-4"
            onClick={() => setMessage(suggestion)}
          >
            <span className="text-sm">{suggestion}</span>
          </Button>
        ))}
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Ask me anything about HSSE..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1"
        />
        <Button size="icon">
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};
