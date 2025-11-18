import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HSSEReports from "./pages/HSSEReports";
import CreateIncident from "./pages/CreateIncident";
import EditSearch from "./pages/EditSearch";
import HSSETutorials from "./pages/HSSETutorials";
import HSSEProcedures from "./pages/HSSEProcedures";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/hsse-reports" element={<HSSEReports />} />
        <Route path="/create-new" element={<CreateIncident />} />
        <Route path="/create-incident" element={<CreateIncident />} />
        <Route path="/edit-search" element={<EditSearch />} />
        <Route path="/tutorials" element={<HSSETutorials />} />
        <Route path="/hsse-procedures" element={<HSSEProcedures />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
