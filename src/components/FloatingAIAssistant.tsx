import { useState } from "react";
import { Sparkles, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const quickSuggestions = [
  "Help me report a leak incident",
  "Show my pending HSSE actions",
  "Explain confined space entry procedure",
];

export const FloatingAIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
  };

  const handleSend = () => {
    if (message.trim()) {
      // TODO: Implement AI chat functionality
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-foreground hover:bg-foreground/90 z-50"
        size="icon"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
      </Button>

      {/* Chat Panel */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 shadow-xl z-50 overflow-hidden">
          <div className="bg-foreground p-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">AI Assistant</h3>
                <p className="text-xs text-white/80">Powered by Gemini</p>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Quick suggestions:</p>
              <div className="space-y-2">
                {quickSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything about HSSE..."
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};
