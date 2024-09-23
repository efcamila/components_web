import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/buttons/clasic/Button";
import Text from "../components/text/Text";
import { useRef } from "react";
import { LuExternalLink } from "react-icons/lu";
import Card from "../components/cards/Card";
import { GoGear } from "react-icons/go";
import { BsPalette2 } from "react-icons/bs";
import { HiOutlineArrowsExpand } from "react-icons/hi";

const PageIntroduction = () => {
  const textModern = useRef<HTMLHeadingElement>(null);

  function getRandomHexColor() {
    // Genera un color hexadecimal aleatorio
    console.log("hola");
    return `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")}`;
  }

  function getRandomColor() {
    // Obtén dos colores hexadecimales aleatorios
    const color = getRandomHexColor();
    console.log(color);
    return color;
  }

  const handleButton = () => {
    if (textModern.current) {
      textModern.current.style.backgroundImage = `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()} )`;
    }
  };

  return (
    <div className="mx-auto flex flex-1 min-h-full flex-col justify-center items-center">
      <div className="w-full flex flex-col gap-4 mt-10 md:mt-20">
        <div className="flex flex-col">
          <Text.Headingxl className="sm:text-center font-normal text-gray-700 dark:text-white">
            <span className="flex justify-center">
              Componentes
            </span>
          </Text.Headingxl>
          <h1
            className="text-3xl md:text-5xl font-bold text-wrap text-modern"
            ref={textModern}
          >
            <span className="flex justify-center text-center">
            Funcionales, Modernos y Adaptables
            </span>
          </h1>
        </div>
        <Text.Subheading2 className="text-center text-black-300 font-medium dark:text-gray-100">
          React.js + TypeScript
        </Text.Subheading2>
      </div>
      <div className="sm:text-center mt-14 flex flex-col gap-8 md:mx-24 max-w-[800px]">
        <div className="grid grid-cols-3 gap-5 mb-3">
          <Button onClick={handleButton}>Click</Button>
          <Button
            onClick={handleButton}
            rounded="full"
            className="bg-gradient-to-r from-cyan-300 to-blue-500 text-white"
          >
            Click
          </Button>
          <Button
            onClick={handleButton}
            rounded="lg"
            className="primary-border"
          >
            Click
          </Button>
        </div>
      </div>

      <div className="mt-6 mb-6 grid grid-cols-1 md:grid-cols-3">
      <Card className="bg-stone-50 px-2 py-4 dark:bg-black-700">
          <Card.Header>
          <div className="bg-stone-200/60 p-3 w-12 h-12 flex justify-center items-center rounded-lg dark:bg-stone-100/10">
          <GoGear size={28} className="text-black-500 dark:text-gray-100"/>
          </div>
          </Card.Header>
          <Card.Body>
            <div className="flex gap-2 flex-col">
            <Text.Subheading3 className="font-semibold text-black-700 dark:text-white">Funcional</Text.Subheading3>
          <Text.Subheading4 className="font-medium text-[#3c3c43c7] dark:text-gray-100">
          Proporciona una funcionalidad clara y eficiente.
          </Text.Subheading4>
            </div>
          </Card.Body>
        </Card>
        
        <Card className="bg-stone-50 px-2 py-4 dark:bg-black-700">
        <Card.Header>
        <div className="bg-stone-200/60 p-3 w-12 h-12 flex justify-center items-center rounded-lg dark:bg-stone-100/10">
        <BsPalette2 size={28} className="text-rose-600"/>
        </div>
        </Card.Header>
        <Card.Body>
        <div className="flex gap-2 flex-col">
            <Text.Subheading3 className="font-semibold text-black-700 dark:text-white">Moderno</Text.Subheading3>
          <Text.Subheading4 className="font-medium text-[#3c3c43c7] dark:text-gray-100">Incorpora un diseño creativo y actual.
          </Text.Subheading4>
          </div>
        </Card.Body>
        </Card>

        <Card className="bg-stone-50 px-2 py-4 dark:bg-black-700">
          <Card.Header>
          <div className="bg-stone-200/60 p-3 w-12 h-12 flex justify-center items-center rounded-lg dark:bg-stone-100/10">
          <HiOutlineArrowsExpand size={28} className="text-blue-600"/>
          </div>
          </Card.Header>
          <Card.Body>
          <div className="flex gap-2 flex-col">
            <Text.Subheading3 className="font-semibold text-black-700 dark:text-white">Adaptable</Text.Subheading3>
          <Text.Subheading4 className="font-medium text-[#3c3c43c7] dark:text-gray-100">
          Flexible y capaz de adaptarse a diferentes necesidades y contextos.
          </Text.Subheading4>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/docs">
          <Button size="lg" className="black-solid">
            Conoce más
            <LuExternalLink />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PageIntroduction;
