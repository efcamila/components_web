import { ReactNode } from "react";

interface ButtonProps {
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  style?: "primary" | "neutral" | "black" | "danger" | "warning" | "success";
  variant?: "solid" | "border" | "light" | "icon";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  isIcon?: boolean;
  value?: boolean;
}

interface ButtonStyles {
  [variant: string]: {
    noActive: string;
    active: string;
    disabled: string;
  };
}

interface StyledButtonProps {
  [style: string]: ButtonStyles;
}

const styledButton: StyledButtonProps = {
  primary: {
    solid: {
      noActive:
        "transition ease-in-out duration-300 bg-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white border border-blue-600",
      active: "bg-blue-600 text-white border border-blue-600",
      disabled: "bg-blue-600/20 text-white",
    },
    border: {
      noActive:
        "transition ease-in-out duration-300 bg-transparent text-blue-500 hover:bg-blue-600 dark:text-blue-400 border border-blue-600 dark:hover:bg-blue-900 dark:hover:border-blue-700 hover:text-white",
      active: "bg-blue-600 text-white border border-blue-600",
      disabled: "bg-blue-600/20 text-white",
    },
    light: {
      noActive:
        "transition ease-in-out duration-300 text-blue-600 dark:text-blue-400 hover:bg-blue-300 hover:bg-opacity-50 dark:hover:bg-blue-800 dark:hover:bg-opacity-30",
      active:
        "transition ease-in-out duration-300 text-blue-600 dark:text-blue-400 bg-blue-300/50 dark:bg-blue-800/30",
      disabled: "bg-blue-600/20 text-white",
    },
    icon: {
      noActive: "text-blue-400 hover:text-blue-700",
      active: "text-blue-700 dark:text-blue-600",
      disabled: "text-blue-600/20 text-white",
    },
  },
  neutral: {
    solid: {
      noActive:
        "transition ease-in-out duration-300 bg-gray-700 hover:bg-gray-800 hover:border-gray-800 text-white border border-gray-700",
      active: "bg-gray-800 text-white border border-gray-800",
      disabled: "bg-gray-600/30 text-white",
    },
    border: {
      noActive:
        "transition ease-in-out duration-300 text-gray-900 border border-gray-800 hover:bg-gray-800 hover:text-white dark:border-gray-300 dark:text-gray-300",
      active: "bg-gray-800 text-white border border-gray-800",
      disabled: "bg-gray-600/30 text-white",
    },
    light: {
      noActive:
        "transition ease-in-out duration-300 text-gray-900 hover:bg-gray-400/30 dark:text-gray-300 dark:bg-opacity-70",
      active:
        "transition ease-in-out duration-300 text-gray-900 bg-gray-400/50 dark:text-gray-300 dark:bg-opacity-70",
      disabled: "bg-gray-600/30 text-white",
    },
    icon: {
      noActive: "text-gray-600 hover:text-gray-800",
      active: "text-gray-800",
      disabled: "text-gray-600/30 text-white",
    },
  },
  black: {
    solid: {
      noActive:
        "transition ease-in-out duration-300 bg-black-full hover:bg-black-800 hover:border-black-800 dark:hover:border-black-full dark:hover:bg-black-full text-white border border-black-full dark:border-black-400",
      active: "transition ease-in-out duration-300 bg-black-full text-white",
      disabled: "bg-black-600/30 text-white",
    },
    border: {
      noActive:
        "transition ease-in-out duration-300 text-black-full border border-black-full hover:bg-black-full hover:text-white dark:border-white dark:text-white",
      active: "bg-black-full text-white border border-black-full",
      disabled: "bg-black-600/30 text-white",
    },
    light: {
      noActive:
        "transition ease-in-out duration-300 text-black-full hover:bg-black-full hover:bg-opacity-40 dark:text-white dark:bg-opacity-100",
      active:
        "transition ease-in-out duration-300 text-black-full bg-black-full/40 dark:text-white dark:bg-black-full/70  ",
      disabled: "bg-black-600/30 text-white",
    },
    icon: {
      noActive: "text-black-600 hover:text-black-full dark:text-black-full",
      active: "text-black-full",
      disabled: "text-black-600/30 text-white",
    },
  },
  danger: {
    solid: {
      noActive:
        "transition ease-in-out duration-300 bg-rose-500 hover:bg-rose-600 hover:border-rose-600 text-white border border-rose-600",
      active:
        "transition ease-in-out duration-300 bg-rose-600 text-white border border-rose-600",
      disabled: "bg-rose-600/30 text-white",
    },
    border: {
      noActive:
        "transition ease-in-out duration-300 bg-transparent text-rose-500 hover:bg-rose-600 dark:text-rose-400 border border-rose-600 dark:hover:bg-rose-900 dark:hover:border-rose-700 hover:text-white",
      active:
        "transition ease-in-out duration-300 bg-rose-600 text-white border border-rose-600",
      disabled: "bg-rose-600/30 text-white",
    },
    light: {
      noActive:
        "transition ease-in-out duration-300 text-rose-700 dark:text-rose-400 hover:bg-rose-300 hover:bg-opacity-50 dark:hover:bg-rose-800 dark:hover:bg-opacity-30",
      active:
        "transition ease-in-out duration-300 text-rose-700 dark:text-rose-400 bg-rose-300/50 dark:hover:bg-rose-800 dark:hover:bg-opacity-30",
      disabled: "bg-rose-600/30 text-white",
    },
    icon: {
      noActive: "text-rose-600 hover:text-rose-800",
      active: "text-rose-800",
      disabled: "text-rose-600/30 text-white",
    },
  },
  warning: {
    solid: {
      noActive:
        "transition ease-in-out duration-300 bg-amber-400 hover:bg-amber-500 hover:border-amber-500 text-black-800 border border-amber-400",
      active:
        "transition ease-in-out duration-300 bg-amber-500 border-amber-500 text-black-800",
      disabled: "bg-amber-600/30 text-white",
    },
    border: {
      noActive:
        "transition ease-in-out duration-300 bg-transparent text-amber-700 border border-amber-700 hover:bg-amber-400 hover:border-amber-400 dark:text-amber-400 hover:text-black-800 dark:hover:bg-amber-900 dark:hover:border-amber-700",
      active:
        "transition ease-in-out duration-300 bg-amber-500 border-amber-500 text-black-800",
        disabled: "bg-amber-600/30 text-white",
      },
    light: {
      noActive:
        "transition ease-in-out duration-300 text-amber-700 dark:text-amber-400 hover:bg-amber-200/40 dark:hover:bg-amber-800 dark:hover:bg-opacity-30",
      active:
        "transition ease-in-out duration-300 bg-amber-200/40 border-amber-500 text-amber-700",
        disabled: "bg-amber-600/30 text-white",
      },
    icon: {
      noActive: "text-amber-400 hover:text-amber-500",
      active: "text-amber-500",
      disabled: "text-amber-600/30 text-white",
    },
  },
  success: {
    solid: {
      noActive:
        "transition ease-in-out duration-300 bg-green-400 hover:bg-green-500 hover:border-green-500 text-black-800 border border-green-400",
      active:
        "transition ease-in-out duration-300 bg-green-500 border-green-500 text-black-800",
        disabled: "bg-green-700/30 text-white",
      },
    border: {
      noActive:
        "transition ease-in-out duration-300 bg-transparent text-green-500 border border-green-400 hover:bg-green-400 hover:border-green-400 dark:text-green-400 hover:text-black-800 dark:hover:bg-green-900 dark:hover:border-green-700",
      active:
        "transition ease-in-out duration-300 bg-green-400 border-green-400 text-black-800",
        disabled: "bg-green-700/30 text-white",
      },
    light: {
      noActive:
        "transition ease-in-out duration-300 text-green-500 dark:text-green-400 hover:bg-green-200/30 dark:hover:bg-green-800 dark:hover:bg-opacity-30",
      active:
        "transition ease-in-out duration-300 bg-green-200/30 border-green-500 text-green-700 dark:bg-green-400/70 dark:text-white",
        disabled: "bg-green-700/30 text-white",
      },
    icon: {
      noActive: "text-green-400 hover:text-green-500",
      active: "text-green-500",
      disabled: "text-green-700/30 text-white",
    },
  },
};

const getRoundedClass = (rounded: string) => {
  switch (rounded) {
    case "sm":
      return "rounded-sm";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
    case "xl":
      return "rounded-xl";
    case "full":
      return "rounded-full";
    default:
      return "rounded-none";
  }
};

const getButtonClassName = (
  style: string,
  variant: string,
  isActive: boolean,
  isDisabled: boolean
) => {
  return styledButton[style][variant][
    isDisabled ? "disabled" : isActive ? "active" : "noActive"
  ];
};

const Button = ({
  type = "button",
  onClick,
  children,
  disabled = false,
  style = "primary",
  rounded = "none",
  variant = "solid",
  isIcon = false,
  value = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`h-10 text-sm font-normal flex justify-center items-center ${getButtonClassName(
        style,
        variant,
        value,
        disabled
      )} ${getRoundedClass(rounded)} ${
        isIcon ? "w-10" : variant === "icon" ? "px-0" : "px-4"
      }`}
    >
      {children}
    </button>
  );
};

export { Button };
