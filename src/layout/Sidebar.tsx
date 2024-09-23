import React, { Dispatch, SetStateAction, useState } from 'react'
import { Sidebar, SidebarContent, SidebarItem, SidebarLink, SidebarMenu } from '../components/navigation/sidebar/Sidebar';
import { urls } from '../data/links';
import { Link, NavLink, useLocation } from 'react-router-dom';

const SidebarLayout = ({menu,setMenu}:{menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;}) => {
 
    return (
      <Sidebar menu={menu} setMenu={setMenu} noIcon>
        
        <SidebarContent>
        {urls.map((url, index) => (
          <SidebarItem onClick={()=>{}} key={index}>
            <NavLink
              to={url.url}
              className={({ isActive }) => `border border-transparent pl-3 dark:text-gray-300 ${isActive ? 'border-l-blue-400 text-blue-600 font-semibold' :'hover:border-l-blue-400 text-black-600'}`}
            >
              {url.name}
            </NavLink>
          </SidebarItem>
        ))}
        </SidebarContent>

        <SidebarContent title="Componentes">
        {urls[1].urls.map((url, index) => (
          <SidebarItem onClick={()=>{}} key={index}>
            <NavLink
              to={url.url}
              className={({ isActive }) => `border border-transparent pl-3 dark:text-gray-300 ${isActive ? 'border-l-blue-400 text-blue-600 font-semibold' :'hover:border-l-blue-400 text-black-600'}`}
            >
              {url.name}
            </NavLink>
          </SidebarItem>
        ))}
        </SidebarContent>
      </Sidebar>
    );
}

export default SidebarLayout