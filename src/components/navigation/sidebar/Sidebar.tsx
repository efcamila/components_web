import React, {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
} from "react";
import { NavbarProvider, useNavbarContext } from "../navbar/NavbarContext";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Text from "../../text/Text";

const Sidebar = ({
  children,
  menu,
  setMenu,
  noIcon,
}: {
  children: ReactNode;
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
  noIcon?: boolean;
}) => {
  const getPositionSidebar = () => {
    return noIcon ? ` ${menu ? "w-5/6 sm:w-64" : "w-0"}` : `${menu ? "w-64" : "w-16"}`;
  };

  return (
    <NavbarProvider menu={menu} setMenu={setMenu}>
      <nav
        className={`${getPositionSidebar()} fixed top-0 bottom-0 z-[80] shadow-xl backdrop-blur-2xl bg-gray-200/30 dark:bg-black-800/50 py-4 transform transition-all duration-300 ease-in-out overflow-y-auto overflow-x-hidden`}
        onMouseEnter={() => setMenu(true)}
        onMouseLeave={() => setMenu(false)}
      >
        <header className="flex flex-col gap-5 min-h-full">{children}</header>
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
        className={`text-2xl font-bold dark:text-gray-100 ${
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
      className={`w-8 h-8 z-[70] cursor-pointer rounded-full bg-gray-200 flex items-center justify-center absolute -right-4`}
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
const SidebarContent = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  const { menu } = useNavbarContext();

  return (
    <ul
      className={`flex flex-col gap-3 ${
        menu
          ? "w-44 ml-5 items-start justify-start"
          : "w-16 max-w-16 ml-0 items-center justify-center"
      } transform transition-all duration-100 ease-in-out`}
    >
      <Text.Subheading3>{title}</Text.Subheading3>
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
      className={`flex items-center cursor-pointer  dark:hover:text-white dark:text-gray-300 border border-transparent hover:border-l-blue-400 ${
        isActive ? "border-l-blue-400 text-blue-400" : "text-black-500"
      } ${menu ? "w-44" : "w-auto"}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

interface SidebarIconProps {
  children: ReactElement;
}
const SidebarIcon = ({ children }: SidebarIconProps) => {
  return (
    <div
      className={`flex items-center justify-center w-12  max-w-12 max- transition-colors duration-100`}
    >
      {React.cloneElement(children, {
        className: `w-6 h-6`,
      })}
    </div>
  );
};

const SidebarLink = ({ children }: { children: ReactNode }) => {
  const { menu } = useNavbarContext();

  return (
    <>
      <div
        className={`text-nowrap transition-colors duration-100 ${
          menu ? "flex items-center ml-4" : "hidden"
        }`}
      >
        {children}
      </div>
      <span
        className={` ${
          menu
            ? "hidden"
            : "text-nowrap px-3 absolute left-16 z-[80] bg-blue-400 p-2 rounded-lg hidden group-hover:flex"
        }`}
      >
        {children}
      </span>
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
