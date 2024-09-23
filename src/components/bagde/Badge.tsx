import React from "react";
import classNames from "classnames";
import { ReactNode } from "react";
import "./Badge.css"

interface BadgeProps {
  children: ReactNode;
  position:
    | "normal"
    | "inside-left"
    | "inside-right"
    | "outside-left"
    | "outside-right";
  className?: string;
}

const Badge = ({ children, position, className }: BadgeProps) => {
  const validPositions = [
    "normal",
    "inside-left",
    "inside-right",
    "outside-left",
    "outside-right",
  ];

  if (!validPositions.includes(position)){
    console.error(`Invalid position prop: ${position}. Valid values are: ${validPositions.join(', ')}.`);
    position = "inside-left";
  }

  const badgeClassNames = classNames(
    "badge",
    className || "primary", // Clase predeterminada si no se proporciona className
    {
      "flex items-center justify-center text-nowrap": position === "normal",
      "absolute z-50 top-2 left-2": position === "inside-left",
      "absolute z-50 top-2 right-2": position === "inside-right",
      "absolute z-50 -top-3 -left-2": position === "outside-left",
      "absolute z-50 -top-3 -right-2": position === "outside-right",
    }
  );

  return <span className={badgeClassNames}>{children}</span>;
};

export default Badge;
