import React, { useState } from "react";
import {
  Sidebar,
  SidebarBrand,
  SidebarContent,
  SidebarIcon,
  SidebarItem,
  SidebarLink,
  SidebarMenu,
} from "./Sidebar";
import { IoAccessibility } from "react-icons/io5";
import ThemeButton from "../../theme/Theme";
import { MdEdit, MdOutlineMessage } from "react-icons/md";
import { FaCamera, FaRegTrashAlt } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

const TestSidebar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Sidebar menu={menu} setMenu={setMenu}>
       <SidebarContent>
        <ThemeButton colorSwitch="primary-solid" vertical/>
      </SidebarContent>
      <SidebarContent>
        <SidebarBrand src="./vite.svg" alt="logo" brand="Vite"/>
      </SidebarContent>
      <SidebarMenu/>
      <SidebarContent>
        <SidebarItem onClick={() => {}}>
          <SidebarIcon>
            <IoAccessibility></IoAccessibility>
          </SidebarIcon>
          <SidebarLink>Accesibility</SidebarLink>
        </SidebarItem>
        <SidebarItem onClick={() => {}}>
          <SidebarIcon>
          <FaCamera />
          </SidebarIcon>
          <SidebarLink>Camera</SidebarLink>
        </SidebarItem>
        <SidebarItem onClick={() => {}}>
          <SidebarIcon>
          <MdOutlineMessage />
          </SidebarIcon>
          <SidebarLink>Messages</SidebarLink>
        </SidebarItem>
      </SidebarContent>
      <SidebarContent>
        <SidebarItem onClick={() => {}}>
          <SidebarIcon>
          <FaRegTrashAlt />
          </SidebarIcon>
          <SidebarLink>Delete</SidebarLink>
        </SidebarItem>
        <SidebarItem onClick={() => {}}>
          <SidebarIcon>
          <MdEdit />
          </SidebarIcon>
          <SidebarLink>Edit</SidebarLink>
        </SidebarItem>
        <SidebarItem onClick={() => {}}>
          <SidebarIcon>
          <IoIosAddCircle />
          </SidebarIcon>
          <SidebarLink>Add a element</SidebarLink>
        </SidebarItem>
      </SidebarContent>
     
    </Sidebar>
  );
};

export default TestSidebar;
