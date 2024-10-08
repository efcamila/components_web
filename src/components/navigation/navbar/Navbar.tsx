import React from "react";
import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { NavbarProvider, useNavbarContext } from "./NavbarContext";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./Navbar.css"

const Navbar = ({
  children,
  menu,
  setMenu,
  className,
}: {
  children: ReactNode;
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
  className?:string,
}) => {
  return (
    <NavbarProvider menu={menu} setMenu={setMenu}>
      <nav className={`w-full flex justify-center border border-gray-50 border-b-black-100/15 dark:border-black-900 dark:border-b-black-400 dark:bg-black-800/80 backdrop-blur-lg sticky top-0 z-[70] ${className}`}>
        <header
          className="justify-between h-16 w-full max-w-[1000px] flex items-center px-2 sm:px-6"
        >
          {children}
        </header>
      </nav>
    </NavbarProvider>
  );
};

const NavbarBrand = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center gap-4 text-lg dark:text-gray-50">
      {children}
    </div>
  );
};

const NavbarContent = ({
  children,
  hidden,
  menuSidebar
}: {
  children: ReactNode;
  hidden?: boolean;
  menuSidebar?: boolean;
}) => {
  const { menu, setMenu } = useNavbarContext();
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 640) {
      // 640px es el breakpoint para sm en Tailwind
      setMenu(false); // Cierra el menú cuando el tamaño de la pantalla sea sm o mayor
    }
  }, [width, setMenu]);

  const convertToMenu = () => {
    if (!hidden) return "flex flex-row items-center gap-4 h-full";
    
    return `grid justify-items-start gap-7 text-lg py-2 max-h-screen md:flex md:flex-row md:text-base md:py-0 items-center gap-4 md:h-full `;
  };

  return (
    <div
      className={`${
        hidden
          ? `w-full absolute top-16 left-0 px-6 bg-gray-100/95 dark:bg-black-900/95 transition-height overflow-y-auto ${
              menu ? "h-screen" : "h-0 md:h-full"
            } md:w-auto md:static md:top-auto md:left-auto md:flex md:items-center md:bg-transparent md:dark:bg-transparent`
          : ""
      } ${menuSidebar ? 'hidden md:flex' : ''}`}
    >
      <ul className={`${convertToMenu()}`}>{children}</ul>
    </div>
  );
};

const NavbarMenu = () => {
  const { menu, setMenu } = useNavbarContext();
  return (
    <div
      className="flex md:hidden cursor-pointer"
      onClick={() => setMenu(!menu)}
    >
      {menu ? (
        <IoCloseOutline className="text-3xl text-gray-700 dark:text-black-100" />
      ) : (
        <IoMenuOutline className="text-3xl text-gray-700 dark:text-black-100" />
      )}
    </div>
  );
};

const NavbarItem = ({
  children,
  isActive,
  onClick,
  className
}: {
  children: ReactNode;
  isActive?: boolean;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <li
      className={`relative transition-all duration-200 ease-in-out h-full flex items-center cursor-pointer pt-2 pb-3 ${
        isActive
          ? "text-blue-400 h-full"
          : "text-gray-600 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400"
      } ${className}`}
      onClick={onClick}
    >
      <span
        className={`absolute bottom-0 h-0.5 left-1/2 bg-blue-400 transform -translate-x-1/2 transition-all duration-200 ease-in-out ${
          isActive ? "w-full " : "w-0"
        }`}
      ></span>
      {children}
    </li>
  );
};

export { Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarItem };
