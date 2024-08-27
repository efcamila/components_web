import { ReactNode } from "react";

interface BadgeProps {
  children?: ReactNode;
  position: "normal" | "inside-left" | "inside-right" | "outside-left" | "outside-right";
  style?: string;
}

const Badge = ({ children, position, style }: BadgeProps) => {
  const getPosition = () => {
    if (position === "normal") {
      return "flex items-center justify-center";
    }
    if (position === "inside-left") {
      return "absolute inline-block top-2 left-2";
    }
    if (position === "inside-right") {
      return "absolute inline-block top-2 right-2";
    }
    if (position === "outside-left") {
      return "absolute inline-block -top-2 -left-2";
    }
    if (position === "outside-right") {
      return "absolute inline-block -top-2 -right-2";
    }
  };

  return (
    <span
      className={`py-1 px-2 ${getPosition()} rounded-xl text-xs font-semibold z-50 ${style}`}
    >
      {children}
    </span>
  );
};

export default Badge;
