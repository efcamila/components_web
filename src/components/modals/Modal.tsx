import classNames from "classnames";
import "./Modal.css";
import { ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Text from "../text/Text";

interface ModalProps {
  size: "sm" | "md" | "lg";
  children: ReactNode;
}

interface ModalHeaderProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ size = "md", children }: ModalProps) => {
  const modalClassNames = classNames(
    "h-auto max-h-[30rem] flex flex-col bg-white rounded-2xl m-1 dark:bg-black-full",
    {
      "w-96": size === "sm",
      "w-[500px]": size === "md",
      "w-[720px]": size === "lg",
    }
  );

  return (
    <div className="min-w-screen min-h-screen modal max-h-96">
      <div className={modalClassNames}>{children}</div>
    </div>
  );
};

const ModalHeader = ({ children, onClose }: ModalHeaderProps) => {
  return (
    <header className="w-full flex flex-col py-4 px-6 gap-4 ">
      <div className="flex justify-between">
        <div className="flex flex-col w-full mt-1">{children}</div>
        <div className="">
          <button
            onClick={onClose}
            className="hover:rounded-full hover:bg-gray-200 p-2 dark:hover:bg-black-900"
          >
            <IoCloseOutline className="text-gray-800 text-2xl hover:rounded-full dark:text-black-200" />
          </button>
        </div>
      </div>
    </header>
  );
};

const ModalTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text.Heading2>
      {children}
    </Text.Heading2>
  );
};

const ModalSubtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text.Subheading3>{children}</Text.Subheading3>
  );
};

const ModalContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="overflow-y-auto flex flex-col flex-1 py-2 px-6 gap-3 text-gray-950 dark:text-gray-200">
      {children}
    </section>
  );
};

const ModalFooter = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="py-4 px-6 flex gap-3 justify-end ">{children}</footer>
  );
};

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Subtitle = ModalSubtitle;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;
