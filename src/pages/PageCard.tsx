import TestCard from "../components/cards/TestCard";
import Text from "../components/text/Text";
import React from "react";

const PageCard = () => {
  return (
    <div className="mt-7 container-heading-pages">
      <Text.Subheading4 className="componente-props">
        Componentes
      </Text.Subheading4>
      <Text.Heading1>Cards | Tarjetas</Text.Heading1>
      <Text.Subheading2>
        Tarjetas para mostrar contenido de manera organizada incluyendo
        imágenes, texto y botones.
      </Text.Subheading2>

      <TestCard />
    </div>
  );
};

export default PageCard;
