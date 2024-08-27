import { ReactNode } from "react";
import ImageCard from "../images/Image";
import { CardProvider, useCardContext } from "./CardContext";
import Badge from "../bagde/Badge";

const Card = ({
  children,
  horizontal = false,
  hasPadding = false,
}: {
  children: ReactNode;
  horizontal?: boolean;
  hasPadding?: boolean;
}) => {
  return (
    <CardProvider horizontal={horizontal} hasPadding={hasPadding}>
      <section
        className={`${
          horizontal
            ? "box-border w-96 grid grid-cols-2 grid-rows-[auto,auto,auto]"
            : "w-80 flex flex-col"
        } bg-white rounded-2xl shadow-md overflow-visible dark:bg-black-700 relative`}
      >
        {children}
      </section>
    </CardProvider>
  );
};

const CardHeader = ({ children }: { children: ReactNode }) => {
  return <div className="px-4 py-2 gap-1 flex flex-col">{children}</div>;
};

const CardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-xl font-semibold text-black-700 dark:text-gray-200 flex flex-col">
      {children}
    </h1>
  );
};

const CardSubtitle = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-sm text-black-600 dark:text-gray-400">{children}</p>
  );
};

const CardBadge = ({
  children,
  style
}: {
  children: ReactNode;
  style?: string
}) => {
  return (
    <Badge position={"inside-left"} style={style}>
      {children}
    </Badge>
  );
};

const CardDetail = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="font-bold text-2xl text-black-700 dark:text-gray-200">
      {children}
    </h1>
  );
};

const CardBody = ({ children }: { children: ReactNode }) => {
  return <div className="px-4 py-2">{children}</div>;
};

const CardFooter = ({ children }: { children: ReactNode }) => {
  const horizontal = useCardContext();

  return (
    <footer
      className={`w-full ${
        horizontal ? "px-3 py-2 flex flex-col gap-3" : "px-4 pt-2"
      }`}
    >
      {children}
    </footer>
  );
};

const CardImage = ({ src, alt }: { src: string; alt: string }) => {
  const { horizontal, hasPadding } = useCardContext();

  const getClassName = (horizontal: boolean, hasPadding: boolean) => {
    if (horizontal && hasPadding) {
      return "row-span-3 col-span-1 py-2 px-3";
    }

    if (horizontal) {
      return "row-span-3 col-span-1";
    }

    if (hasPadding) {
      return "pt-2 px-3";
    }
  };

  return (
    <div className={`overflow-hidden rounded-lg ${getClassName(horizontal, hasPadding)}`}>
      <ImageCard src={src} alt={alt} hasPadding={hasPadding} />
    </div>
  );
};

export {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardFooter,
  CardDetail,
  CardBadge,
};
