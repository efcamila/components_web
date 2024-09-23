import React, { useState } from "react";
import classNames from "classnames";

const ImageLoader = ({ children, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    alert("Error al cargar la imagen.");
  };

  return (
    <div className="flex relative h-full w-full">
      {React.cloneElement(children, {
        onLoad: handleLoad,
        onError: handleError,
      })}
      {isLoading && (
      <div className="absolute h-full w-full bg-white">
        <div
          className={`absolute top-0 bg-gray-400 flex items-center justify-center animate-pulse ${className}`}
        ></div>
      </div>
      )}
    </div>
  );
};

const ImageAvatar = ({
  src,
  alt,
  size = "md",
  isLoading = false,
}: {
  src: string;
  alt: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
}) => {
  const avatarClassName = classNames("rounded-full object-cover", {
    "w-8 h-8": size === "xs",
    "w-12 h-12": size === "sm",
    "w-16 h-16": size === "md",
    "w-20 h-20": size === "lg",
    "w-24 h-24": size === "xl",
  });

  return (
    <ImageLoader className={avatarClassName}>
      <img src={src} alt={alt} className={avatarClassName} loading="lazy" />
    </ImageLoader>
  );
};

const ImageCard = ({
  src,
  alt,
  hasPadding = false,
}: {
  src: string;
  alt: string;
  hasPadding?: boolean;
}) => {
  const imageClassNames = classNames("w-full h-full object-cover", {
    "rounded-lg": hasPadding,
    "rounded-t-lg": !hasPadding,
  });

  return (
    <ImageLoader className={imageClassNames}>
      <img src={src} alt={alt} className={imageClassNames} loading="lazy" />
    </ImageLoader>
  );
};

const Image = {
  Avatar: ImageAvatar,
  Card: ImageCard,
};

export default Image;
