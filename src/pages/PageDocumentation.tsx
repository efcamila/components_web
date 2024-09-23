import Text from "../components/text/Text";
import React from "react";

const data = [
  {
    title: "1. Reusabilidad",
    content1:
      "La biblioteca está diseñada para integrar fácilmente los componentes en proyectos.",
    content2:
      "Esto acelera el proceso de desarrollo y mejora la consistencia visual en las aplicaciones.",
  },
  {
    title: "2. Personalizables",
    content1:
      "Los componentes son personalizables, permite la adaptación a necesidades específicas sin perder la funcionalidad base.",
    content2:
      "Esta flexibilidad asegura que se puedan modificar los componentes según requerimientos específicos.",
  },
  {
    title: "3. Disponibilidad",
    content1:
      "Actualmente, los componentes no están disponibles para descarga, pero el proyecto sigue en evolución.",
    content2:
      "Se están planificando futuras actualizaciones que permitirán su descarga.",
  },
  {
    title: "4. Tecnologías Utilizadas",
    content1:
      " Los componentes están construidos utilizando React, TypeScript y Tailwind CSS.",
    content2:
      "Esta combinación de tecnologías garantiza un desarrollo robusto y un diseño responsivo y atractivo, mejorando tanto la calidad del código como la experiencia del usuario.",
  },
  {
    title: "5. Navegación",
    content1:
      "Este sitio web ha sido desarrollado con la biblioteca de componentes y react-router-dom, para una navegación fluida entre diferentes secciones de la biblioteca.",
  },
];

const PageDocumentation = () => {
  return (
    <div>
      <div className="border border-transparent border-b-black-100/35">
        <Text.Heading1 className="my-7 text-title">
          Guía en la Biblioteca de Componentes
        </Text.Heading1>
      </div>
      <div className="flex flex-col gap-8 py-7 border border-transparent border-b-black-100/35">
        <Text.Heading2 className="text-title">Objetivo Principal</Text.Heading2>
        <ul className="flex flex-col gap-2 list-disc pl-[2rem] text-black-500 dark:text-gray-200">
          <li>
            <Text.Content1 className="text-content">
              Fomentar la reusabilidad y facilitar el desarrollo de aplicaciones
              en React.
            </Text.Content1>
          </li>
          <li>
            <Text.Content1 className="text-content">
              Demostrar mis conocimientos en desarrollo web y en el uso de estas
              tecnologías modernas.
            </Text.Content1>
          </li>
        </ul>
        <Text.Content1 className="text-content">
          A continuación, detallo las características clave de esta biblioteca.
        </Text.Content1>
      </div>
      <div className="py-7 flex flex-col gap-8">
        <Text.Heading2 className="text-title">Características</Text.Heading2>
        {data.map((data, index) => (
          <div key={index} className="flex flex-col gap-3">
            <Text.Heading3 className="text-title">{data.title}</Text.Heading3>
            <div className="flex flex-col gap-2">
              <Text.Content1 className="text-content">
                {data.content1}
              </Text.Content1>
              <Text.Content1 className="text-content">
                {data.content2}
              </Text.Content1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageDocumentation;
