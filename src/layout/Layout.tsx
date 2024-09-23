import AsideLayout from "./Aside";
import { Outlet } from "react-router-dom";
import NavbarLayout from "./Navbar";
import SidebarLayout from "./Sidebar";
import FooterLayout from "./Footer";
import React, { useEffect, useState } from "react";

const Layout = ({ documentation }: { documentation?: boolean }) => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dark:bg-black-800 bg-gray-50 w-full min-h-screen flex flex-col">
      <NavbarLayout menu={menu} setMenu={setMenu} />
      <section className="md:hidden">
        <SidebarLayout menu={menu} setMenu={setMenu} />
      </section>
      <div className="flex flex-col gap-5 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        {documentation ? (
          <>
            <section className="hidden md:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto border border-transparent border-r-black-100/15">
              <AsideLayout />
            </section>
            <section className="md:pl-[19.5rem] mt-5">
              <Outlet />
            </section>
            <section className="md:pl-[19.5rem] md:mt-[2rem]">
              <FooterLayout />
            </section>
          </>
        ) : (
          <>
            <Outlet />
            <section className="">
              <FooterLayout />
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Layout;
