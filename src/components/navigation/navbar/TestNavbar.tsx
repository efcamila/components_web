import React,{ useState } from "react";
import ThemeButton from "../../theme/Theme";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
} from "./Navbar";

const TestNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
    <Navbar menu={showMenu} setMenu={setShowMenu} className="z-[40]">
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold">web by camila</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent hidden>
        <NavbarItem
          isActive={activeIndex === 0}
          onClick={() => setActiveIndex(0)}
        >
          <a href="#">Link 1</a>
        </NavbarItem>
        <NavbarItem
          isActive={activeIndex === 1}
          onClick={() => setActiveIndex(1)}
        >
          <a href="#">Link 2</a>
        </NavbarItem>
        <NavbarItem
          isActive={activeIndex === 2}
          onClick={() => setActiveIndex(2)}
        >
          <a href="#">Link 3</a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <ThemeButton colorSwitch="primary-solid" />
        <NavbarMenu/>
      </NavbarContent>
    </Navbar> 
    </>
  );
};

export default TestNavbar;
