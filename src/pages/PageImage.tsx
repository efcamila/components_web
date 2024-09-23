import TestImage from "../components/images/TestImage";
import Text from "../components/text/Text";
import React from "react";

const PageImage = () => {
  return (
    <div className="mt-7 container-heading-pages">
      <Text.Subheading4 className="componente-props">
        Componentes
      </Text.Subheading4>
      <Text.Heading1>Images | Imágenes</Text.Heading1>
      <Text.Subheading2>Opciones de imágenes para reutilizar.</Text.Subheading2>
      <TestImage />
    </div>
  );
};

export default PageImage;
