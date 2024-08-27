import React, {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
} from "react";
import { NavbarProvider, useNavbarContext } from "../navbar/NavbarContext";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = ({
  children,
  menu,
  setMenu,
}: {
  children: ReactNode;
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <NavbarProvider menu={menu} setMenu={setMenu}>
      <nav
        className={`min-h-screen fixed z-[60] shadow-xl backdrop-blur-2xl bg-gray-200/30 dark:bg-black-800/50 pt-2 pb-5 transform transition-all duration-300 ease-in-out ${
          menu ? "w-64" : "w-16"
        }`}
      >
        <header className="flex flex-col gap-5">
          {children}
        </header>
      </nav>
    </NavbarProvider>
  );
};

const SidebarBrand = ({
  src,
  alt,
  brand,
}: {
  src: string;
  alt: string;
  brand: string;
}) => {
  const { menu } = useNavbarContext();
  return (
    <div className="flex gap-2 h-full">
      <div className="flex items-center justify-center w-12 h-12 max-w-12 max-h-12 cursor-pointer bg-black-400 rounded-lg">
        <img src={src} alt={alt} width={40} height={40} />
      </div>
      <div
        className={`text-2xl font-bold dark:text-black-100 ${
          menu ? "flex items-center" : "hidden"
        }`}
      >
        {brand}
      </div>
    </div>
  );
};

const SidebarMenu = () => {
  const { menu, setMenu } = useNavbarContext();
  return (
    <div
      className={`absolute top-2 transform -right-3 bg-white z-[70] cursor-pointer rounded-full ${
        menu ? "translate-x-[calc(10%)]" : "translate-x-0"
      }`}
      onClick={() => setMenu(!menu)}
    >
      {menu ? (
        <MdKeyboardArrowLeft className="text-3xl text-gray-700 dark:text-black-100" />
      ) : (
        <MdKeyboardArrowRight className="text-3xl text-gray-700 dark:text-black-100" />
      )}
    </div>
  );
};
const SidebarContent = ({ children }: { children: ReactNode }) => {
  const { menu } = useNavbarContext();

  return (
    <ul
      className={`flex flex-col ${
        menu
          ? "w-44 ml-5 items-start justify-start"
          : "w-16 max-w-16 ml-0 items-center justify-center"
      } transform transition-all duration-100 ease-in-out`}
    >
      {children}
    </ul>
  );
};

const SidebarItem = ({
  children,
  onClick,
  isActive,
}: {
  children: ReactNode;
  isActive?: boolean;
  onClick: () => void;
}) => {
  const { menu } = useNavbarContext();

  return (
    <li
      className={`h-10 flex items-center cursor-pointer text-black-500 group hover:bg-blue-400 hover:text-white dark:hover:text-white dark:text-black-100 rounded-lg ${
        isActive ? "bg-blue-400" : ""
      } ${menu ? "pr-4 w-44" : "pr-0 w-auto"}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

interface SidebarIconProps {
  children: ReactElement; // Asegúrate de que children es un elemento React
}
const SidebarIcon = ({ children }: SidebarIconProps) => {
  return (
    <div
      className={`flex items-center justify-center w-12 h-10 max-w-12 max-h-10 transition-colors duration-100`}
    >
      {React.cloneElement(children, {
        className: `w-5 h-5`,
      })}
    </div>
  );
};

const SidebarLink = ({ children }: { children: ReactNode }) => {
  const { menu } = useNavbarContext();

  return (
    <>
      <div
        className={`text-nowrap h-10 max-h-10 transition-colors duration-100 ${
          menu ? "flex items-center ml-4" : "hidden"
        }`}
      >
        {children}
      </div>
      <span className={` ${menu ? 'hidden' : 'text-nowrap px-3 absolute left-16 z-[80] bg-blue-400 p-2 rounded-lg hidden group-hover:flex'}`}>{children}</span>
    </>
  );
};

export {
  Sidebar,
  SidebarBrand,
  SidebarContent,
  SidebarItem,
  SidebarMenu,
  SidebarIcon,
  SidebarLink,
};
