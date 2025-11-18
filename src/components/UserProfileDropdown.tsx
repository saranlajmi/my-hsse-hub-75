import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check } from "lucide-react";
import { useUser, accounts } from "@/contexts/UserContext";

export const UserProfileDropdown = () => {
  const { selectedAccount, setSelectedAccount } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-sidebar-foreground font-medium cursor-pointer hover:bg-sidebar-accent transition-colors">
          {accounts[selectedAccount].initials}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 bg-sidebar border-sidebar-border z-50" align="end">
        <DropdownMenuLabel className="text-sidebar-foreground">Switch Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-sidebar-border" />
        {accounts.map((account, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => setSelectedAccount(index)}
            className="flex items-start gap-3 p-3 cursor-pointer text-sidebar-foreground hover:bg-sidebar-accent focus:bg-sidebar-accent"
          >
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium flex-shrink-0">
              {account.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium">{account.name}</div>
              <div className="text-xs text-sidebar-foreground/70">{account.title}</div>
            </div>
            {selectedAccount === index && (
              <Check className="w-4 h-4 text-sidebar-foreground flex-shrink-0" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
