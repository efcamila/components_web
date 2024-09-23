import React, { Dispatch, SetStateAction, useState } from 'react'
import { Navbar, NavbarContent, NavbarBrand, NavbarMenu, NavbarItem } from '../components/navigation/navbar/Navbar'
import ThemeButton from '../components/theme/Theme';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { urls } from '../data/links';

const NavbarLayout = ({menu,setMenu}:{menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;}) => {
    
  return (
    
    <Navbar menu={menu} setMenu={setMenu}>
      <NavbarContent>
        <NavbarBrand>
          <Link to="/">
          <p className="font-bold">web by <span className='text-blue-600'>camila</span></p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent menuSidebar>
      {urls.map((url,index)=>(
         <NavLink
            to={url.url}
            key={index}
          >
            {({ isActive }) => (
            <NavbarItem
          onClick={() => {}} isActive={isActive}>
          {url.name}
          </NavbarItem>
          )}
        </NavLink>
        
      ))}
      </NavbarContent>
      <NavbarContent>
        <ThemeButton colorSwitch="primary-solid" />
        <NavbarMenu/>
      </NavbarContent>
    </Navbar> 
  );
}

export default NavbarLayout