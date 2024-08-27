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
        "primary-solid transition ease-in-out duration-300 hover:bg-blue-700 hover:border-blue-700",
      active: "primary-solid",
      disabled: "primary-disabled",
    },
    border: {
      noActive:
        "primary-border transition ease-in-out duration-300 hover:bg-blue-600 hover:text-white",
      active: "primary-solid",
      disabled: "primary-disabled",
    },
    light: {
      noActive:
        "text-blue-600 transition ease-in-out duration-300 text-blue-600 dark:text-blue-400 hover:bg-blue-300/50 dark:hover:bg-blue-800/30",
      active:
        "primary-light transition ease-in-out duration-300",
      disabled: "primary-disabled",
    },
    icon: {
      noActive: "text-blue-400 hover:text-blue-700",
      active: "primary-icon",
      disabled: "primary-disabled",
    },
  },
  neutral: {
    solid: {
      noActive:
        "transition ease-in-out duration-300 bg-gray-700 hover:bg-gray-800 hover:border-gray-800 text-white border border-gray-700",
      active: "neutral-solid",
      disabled: "neutral-disabled",
    },
    border: {
      noActive:
        "neutral-border transition ease-in-out duration-300 hover:bg-gray-800 hover:text-white",
      active: "neutral-solid",
      disabled: "neutral-disabled",
    },
    light: {
      noActive:
        "transition ease-in-out duration-300 text-gray-900 hover:bg-gray-400/30 dark:text-gray-300 dark:bg-opacity-70",
      active:
        "neutral-light transition ease-in-out duration-300",
      disabled: "neutral-disabled",
    },
    icon: {
      noActive: "text-gray-600 hover:text-gray-800",
      active: "text-gray-800",
      disabled: "neutral-icon-disabled",
    },
  },
  black: {
    solid: {
      noActive:
        "transition ease-in-out duration-300 bg-black-full hover:bg-black-800 hover:border-black-800 dark:hover:border-black-full dark:hover:bg-black-full text-white border border-black-full dark:border-black-400",
      active: "black-solid transition ease-in-out duration-300",
      disabled: "black-disabled",
    },
    border: {
      noActive:
        "black-border transition ease-in-out duration-300 hover:bg-black-full hover:text-white",
      active: "black-solid",
      disabled: "black-disabled",
    },
    light: {
      noActive:
        "transition ease-in-out duration-300 text-black-full hover:bg-black-full hover:bg-opacity-40 dark:text-white dark:bg-opacity-100",
      active:
        "transition ease-in-out duration-300 text-black-full bg-black-full/40 dark:text-white dark:bg-black-full/70  ",
      disabled: "black-disabled",
    },
    icon: {
      noActive: "text-black-600 hover:text-black-full dark:text-black-full",
      active: "black-icon",
      disabled: "black-icon-disabled",
    },
  },
  danger: {
    solid: {
      noActive:
        "transition ease-in-out duration-300 bg-rose-500 hover:bg-rose-600 hover:border-rose-600 text-white border border-rose-500",
        active: "danger-solid transition ease-in-out duration-300",
      disabled: "danger-disabled",
    },
    border: {
      noActive:
        "transition ease-in-out duration-300 bg-transparent text-rose-500 hover:bg-rose-600 dark:text-rose-400 border border-rose-600 dark:hover:bg-rose-900 dark:hover:border-rose-700 hover:text-white",
        active: "danger-solid transition ease-in-out duration-300",
      disabled: "danger-disabled",
    },
    light: {
      noActive:
        "transition ease-in-out duration-300 text-rose-700 dark:text-rose-400 hover:bg-rose-300 hover:bg-opacity-50 dark:hover:bg-rose-800 dark:hover:bg-opacity-30",
      active:
        "danger-light transition ease-in-out duration-300 dark:text-rose-400 dark:hover:bg-rose-800 dark:hover:bg-opacity-30",
      disabled: "danger-disabled",
    },
    icon: {
      noActive: "text-rose-600 hover:text-rose-800",
      active: "danger-icon",
      disabled: "danger-icon-disabled",
    },
  },
  warning: {
    solid: {
      noActive:
        "transition ease-in-out duration-300 bg-amber-400 hover:bg-amber-500 hover:border-amber-500 text-black-800 border border-amber-400",
      active:
        "warning-solid transition ease-in-out duration-300",
      disabled: "warning-disabled",
    },
    border: {
      noActive:
        "warning-border transition ease-in-out duration-300 hover:bg-amber-400 hover:border-amber-400 hover:text-amber-400 hover:text-black-800 dark:hover:bg-amber-900 dark:hover:border-amber-700",
      active:
        "warning-solid transition ease-in-out duration-300",
        disabled: "warning-disabled",
      },
    light: {
      noActive:
        "transition ease-in-out duration-300 text-amber-700 dark:text-amber-400 hover:bg-amber-200/40 dark:hover:bg-amber-800 dark:hover:bg-opacity-30",
      active:
        "warning-light transition ease-in-out duration-300",
        disabled: "warning-disabled",
      },
    icon: {
      noActive: "text-amber-400 hover:text-amber-500",
      active: "warning-icon",
      disabled: "warning-icon-disabled",
    },
  },
  success: {
    solid: {
      noActive:
        "transition ease-in-out duration-300 bg-green-400 hover:bg-green-500 hover:border-green-500 text-black-800 border border-green-400",
      active:
        "success-solid transition ease-in-out duration-300",
        disabled: "success-disabled",
      },
    border: {
      noActive:
        "success-border transition ease-in-out duration-300 hover:bg-green-400 hover:border-green-400 dark:text-green-400 hover:text-black-800 dark:hover:bg-green-900 dark:hover:border-green-700",
      active:
        "success-solid transition ease-in-out duration-300",
        disabled: "success-disabled",
      },
    light: {
      noActive:
        "transition ease-in-out duration-300 text-green-500 dark:text-green-400 hover:bg-green-200/30 dark:hover:bg-green-800 dark:hover:bg-opacity-30",
      active:
        "success-light transition ease-in-out duration-300",
        disabled: "success-disabled",
      },
    icon: {
      noActive: "text-green-400 hover:text-green-500",
      active: "success-icon",
      disabled: "success-icon-disabled",
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
      className={`button ${getButtonClassName(
        style,
        variant,
        value,
        disabled
      )} ${getRoundedClass(rounded)} ${
        isIcon ? "px-2 max-w-10" : variant === "icon" ? "px-0" : "px-4" // agregar w-full para botones en card
      }`}
    >
      {children}
    </button>
  );
};

export { Button };
