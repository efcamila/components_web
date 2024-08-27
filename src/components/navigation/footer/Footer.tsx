import { ReactNode } from "react";

const Footer = ({ children }: { children: ReactNode }) => {
  return (
    <footer className="w-full grid grid-cols-1 place-items-center backdrop-blur-lg py-6  min-h-16 gap-5">
      <hr className="w-full border dark:border-black-500" />
      <div className="w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-2 content-around gap-5 px-6">
        {children}
      </div>
    </footer>
  );
};

const FooterBrand = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full grid place-items-start col-span-1 mx-auto text-lg dark:text-gray-50">
      <div className="flex items-center w-full gap-4">{children}</div>
    </div>
  );
};

const FooterContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-2 col-span-1 md:grid-cols-auto gap-8 justify-end">
      {children}
    </div>
  );
};

const FooterItems = ({
  children,
  title,
}: {
  title?: string;
  children: ReactNode;
}) => {

  return (
    <div
      className={`flex flex-col h-full gap-3 items-start text-black-400 dark:text-gray-300`}
    >
      {title && (
        <div className="uppercase text-xs font-semibold">
          <h3 className="flex text-black-700 dark:text-gray-100">{title}</h3>
        </div>
      )}
      <div className="flex flex-col gap-3 text-sm">{children}</div>
    </div>
  );
};

const FooterCopy = ({ company }: { company: string }) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="grid col-span-1 md:col-span-2 place-items-center py-2">
      <p className="text-sm text-black-400 dark:text-gray-300">
        &copy; {currentYear} {company}. All rights reserved.
      </p>
    </div>
  );
};

export { Footer, FooterBrand, FooterContent, FooterItems, FooterCopy };
