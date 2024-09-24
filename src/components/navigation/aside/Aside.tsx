import React, { ReactNode } from "react";

const Aside = ({children}:{children:ReactNode}) => {
  return (
    <aside className="flex flex-col gap-8 py-6 pl-16 overflow-y-auto min-h-full">
        {children}
    </aside>
  )
}

const AsideContent = ({children, title}:{children:ReactNode, title?:string}) => {
    return (
      <div className="flex flex-col gap-2">
        <h5 className="text-sm font-semibold dark:text-gray-200 text-black-800 mb-4">{title}</h5>
          <ul className="text-sm flex flex-col gap-5">
          {children}
          </ul>
      </div>
    )
  }

  
const AsideItem = ({children}:{children:ReactNode}) => {
    return (
      <li className="flex dark:text-gray-200">
          {children}
      </li>
    )
  }

export {Aside, AsideContent, AsideItem}