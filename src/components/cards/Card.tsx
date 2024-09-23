import React from "react";
import { ReactNode } from "react";
import Image from "../images/Image";
import { CardProvider, useCardContext } from "./CardContext";
import "./Card.css";
import classNames from "classnames";
import Text from "../text/Text";

interface CardProps {
  children: ReactNode;
  horizontal?: boolean;
  hasPadding?: boolean;
  className?: string;
}

const Card = ({
  children,
  horizontal = false,
  hasPadding = false,
  className = "",
}: CardProps) => {
  const cardClassNames = classNames(
    "card",
    className || "bg-gray-50 dark:bg-black-600",
    {
      "card-horizontal": horizontal,
      "card-vertical": !horizontal,
    }
  );

  return (
    <CardProvider horizontal={horizontal} hasPadding={hasPadding}>
      <section className={cardClassNames}>{children}</section>
    </CardProvider>
  );
};

interface CardSectionProps {
  children: ReactNode;
  className?:string;
}

const CardHeader = ({ children, className }: CardSectionProps) => {
  return <div className={`px-4 py-2 gap-1 flex flex-col ${className}`}>{children}</div>;
};

const CardTitle = ({ children }: CardSectionProps) => {
  return <Text.Heading2>{children}</Text.Heading2>;
};

const CardSubtitle = ({ children }: CardSectionProps) => {
  return <Text.Subheading2>{children}</Text.Subheading2>;
};

const CardDetail = ({ children }: CardSectionProps) => {
  return (
    <Text.Heading2 className="font-bold text-2xl text-black-700 dark:text-gray-200">
      {children}
    </Text.Heading2>
  );
};

const CardBody = ({ children }: CardSectionProps) => {
  return <div className="px-4 py-2 dark:text-gray-300">{children}</div>;
};

const CardFooter = ({ children }: CardSectionProps) => {
  const { horizontal } = useCardContext();

  const footerClassNames = classNames("w-full flex flex-col", {
    "px-3 py-2 gap-3 justify-center": horizontal,
    "px-4 py-2 gap-2": !horizontal,
  });

  return <footer className={footerClassNames}>{children}</footer>;
};

interface CardImageProps {
  src: string;
  alt: string;
}

const CardImage = ({ src, alt }: CardImageProps) => {
  const { horizontal, hasPadding } = useCardContext();

  const imageClassNames = classNames(
    "overflow-hidden max-h-[200px]",
    {
      "row-span-3 col-span-1 py-2 px-3": horizontal && hasPadding,
      "row-span-3 col-span-1": horizontal,
      "pt-3 px-3": hasPadding,
    }
  );

  return (
    <div className={imageClassNames}>
      <Image.Card src={src} alt={alt} hasPadding={hasPadding} />
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Image = CardImage;
Card.Detail = CardDetail;

export default Card;
