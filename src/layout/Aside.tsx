import { Aside, AsideContent, AsideItem } from "../components/navigation/aside/Aside";
import { urls } from "../data/links";
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const AsideLayout = () => {

  return (
    <Aside>
      <AsideContent title="Componentes">
      {urls[1].urls.map((url, index) => (
          <AsideItem key={index}>
            <NavLink
              to={url.url}
              className={({ isActive }) => `border border-transparent pl-3 dark:text-gray-300 ${isActive ? 'border-l-blue-400 text-blue-600 font-semibold' :'hover:border-l-blue-400 text-black-600'}`}
            >
              {url.name}
            </NavLink>
          </AsideItem>
        ))}
      </AsideContent>
    </Aside>
  );
};

export default AsideLayout;
