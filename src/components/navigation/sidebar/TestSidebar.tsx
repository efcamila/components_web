import React,{ useState } from "react";
import {
  Sidebar,
  SidebarBrand,
  SidebarContent,
  SidebarIcon,
  SidebarItem,
  SidebarLink,
  SidebarMenu,
} from "./Sidebar";
import { FaCakeCandles } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeButton from "../../theme/Theme";

const urls = [
  {
    name: "Link 1",
    icon: <IoHomeSharp />
  },
  {
    name: "Link 2",
    icon: <MdMessage />
  },
  {
    name: "Link 3",
    icon: <FaHashtag />
  },
];

const TestSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menu, setMenu] = useState(false);
  return (
    <Sidebar menu={menu} setMenu={setMenu}>
      <SidebarContent>
        <ThemeButton colorSwitch="primary" vertical/>
        {urls.map((url, index) => (
          <SidebarItem onClick={() => setActiveIndex(index)} key={index} isActive={index === activeIndex}>
          <Link to="#" className="flex">
            <SidebarIcon>{url.icon}</SidebarIcon>
            <SidebarLink>{url.name}</SidebarLink>
          </Link>
          </SidebarItem>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};

export default TestSidebar;
