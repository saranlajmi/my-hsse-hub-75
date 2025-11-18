import { createContext, useContext, useState, ReactNode } from "react";

interface UserAccount {
  name: string;
  title: string;
  initials: string;
}

export const accounts: UserAccount[] = [
  { name: "Aminah Rajab", title: "DCEO Gas & Environment", initials: "AR" },
  { name: "Nasser Al-Buhairi", title: "Manager HSE", initials: "NA" },
  { name: "Sara Al-Ajmi", title: "Safety Engineer HSE Systems Team", initials: "SA" },
];

interface UserContextType {
  selectedAccount: number;
  setSelectedAccount: (index: number) => void;
  currentUser: UserAccount;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [selectedAccount, setSelectedAccount] = useState(0);

  return (
    <UserContext.Provider value={{ 
      selectedAccount, 
      setSelectedAccount,
      currentUser: accounts[selectedAccount]
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
};
