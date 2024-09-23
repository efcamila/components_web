import React, { ReactNode } from 'react'
import "./Tooltip.css"

const Tooltip = ({children, className, horizontal}:{children:ReactNode, className?:string, horizontal?:boolean}) => {
  return (
    <span className={`tooltip-text ${className ? className : 'tooltip-style'}`}>{children}</span>
  )}

export default Tooltip