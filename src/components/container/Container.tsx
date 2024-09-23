import classNames from "classnames";
import React,{ ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  col?: boolean;
  className?: string;
}

const Container = ({ children, col, className }: ContainerProps) => {
  const containerClassName = classNames(
    "flex flex-wrap w-full",
    {
      "flex-col": col,
    },
    className
  );

  return <div className={containerClassName}>{children}</div>;
};

export default Container;
