import { ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface ModalProps {
  size: "sm" | "md" | "lg";
  children: ReactNode;
}

interface ModalHeaderProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ size = "sm", children }: ModalProps) => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-950 bg-opacity-70 fixed inset-0 z-[70] flex justify-center items-center dark:bg-gray-800 dark:bg-opacity-50">
      <div
        className={`${
          size === "sm"
            ? "w-96"
            : size === "md"
            ? "w-[450px]"
            : size === "lg"
            ? "w-[520px]"
            : ""
        } flex flex-col bg-white rounded-2xl m-1 dark:bg-black-full`}
      >
        {children}
      </div>
    </div>
  );
};

const ModalHeader = ({ children, onClose }: ModalHeaderProps) => {
  return (
    <header className="w-full flex flex-col py-4 px-6 gap-4">
      <div className="flex justify-between">
        <div className="flex flex-col w-full">{children}</div>
        <div className="">
          <button className="hover:rounded-full hover:bg-gray-200 p-2 dark:hover:bg-black-900">
            <IoCloseOutline
              onClick={onClose}
              className="text-gray-800 text-2xl hover:rounded-full dark:text-black-200"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

const ModalTitle = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-lg font-semibold text-gray-900 pt-2 dark:text-gray-100">{children}</h3>;
};

const ModalSubtitle = ({ children }: { children: React.ReactNode }) => {
  return <h5 className="text-gray-600 text-sm dark:text-gray-400">{children}</h5>;
};

const ModalContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col flex-1 py-2 px-6 gap-3 text-gray-950 dark:text-gray-200">
      {children}
    </section>
  );
};

const ModalFooter = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="py-4 px-6 flex gap-3 justify-end">{children}</footer>
  );
};


export {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalTitle,
  ModalSubtitle,
};
