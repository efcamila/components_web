import classNames from "classnames";
import React, { ReactElement, ReactNode } from "react"

interface TextProps {
    children: ReactNode;
    className?: string;
}

const Text = ({children}:{children:ReactNode}) => {
  return (
    <>{children}</>
  )
}

const Headingxl = ({children, className}:TextProps) => {
    return (
        <h1 className={`flex-wrap text-3xl md:text-5xl font-bold ${className ? className : 'dark:text-white'}`}>{children}</h1>
    )
}

const Heading2xl = ({children, className}:TextProps) => {
    return (
        <h1 className={`text-5xl md:text-6xl font-bold ${className ? className : 'dark:text-white'}`}>{children}</h1>
    )
}


const Heading1 = ({children, className}:TextProps) => {
    return (
        <h1 className={`text-2xl md:text-3xl font-bold ${className ? className : 'dark:text-white'}`}>{children}</h1>
    )
}

const Heading2 = ({children, className}:TextProps) => {
    return (
        <h2 className={`text-xl md:text-2xl font-semibold ${className ? className : 'dark:text-white'}`}>{children}</h2>
    )
}

const Heading3 = ({children, className}:TextProps) => {
    return (
        <h3 className={`text-lg md:text-xl font-medium ${className ? className : 'dark:text-white'}`}>{children}</h3>
    )
}

const Subheading1 = ({children, className}:TextProps) => {
    return (
        <h1 className={`text-lg md:text-xl ${className ? className : 'text-black-300 dark:text-gray-100'}`}>{children}</h1>
    )
}

const Subheading2 = ({children, className}:TextProps) => {
    return (
        <h2 className={`text-base md:text-lg ${className ? className : 'text-black-300 dark:text-gray-100'}`}>{children}</h2>
    )
}

const Subheading3 = ({children, className}:TextProps) => {
    return (
        <h3 className={`text-sm md:text-base font-medium ${className ? className : 'text-black-300 dark:text-gray-100'}`}>{children}</h3>
    )
}

const Subheading4 = ({children, className}:TextProps) => {
    return (
        <h4 className={`text-xs md:text-sm font-medium ${className ? className : 'text-black-500 dark:text-black-100'}`}>{children}</h4>
    )
}

const Content1 = ({children, className}:TextProps) => {
    return (
        <p className={`text-base font-normal ${className ? className : 'dark:text-gray-300'}`}>{children}</p>
    )
}

const Content2 = ({children, className}:TextProps) => {
    return (
        <p className={`text-sm font-normal ${className ? className : 'dark:text-gray-300'}`}>{children}</p>
    )
}

const Content3 = ({children, className}:TextProps) => {
    return (
        <p className={`text-xs font-normal ${className ? className : 'dark:text-gray-300'}`}>{children}</p>
    )
}

Text.Headingxl = Headingxl; 
Text.Heading2xl = Heading2xl; 
Text.Heading1 = Heading1; 
Text.Heading2 = Heading2; 
Text.Heading3 = Heading3; 
Text.Subheading1 = Subheading1; 
Text.Subheading2 = Subheading2; 
Text.Subheading3 = Subheading3; 
Text.Subheading4 = Subheading4; 
Text.Content1 = Content1;
Text.Content2 = Content2;
Text.Content3 = Content3;

export default Text;