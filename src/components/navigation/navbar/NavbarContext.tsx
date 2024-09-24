import React,{
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from "react";

interface NavbarContextProps {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}

const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

export const NavbarProvider = ({
  menu,
  setMenu,
  children,
}: {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}) => {
  return (
    <NavbarContext.Provider value={{ menu, setMenu }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error("useNavbarContext must be used within a NavbarProvider");
  }
  return context;
};
