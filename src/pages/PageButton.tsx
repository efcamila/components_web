import TestButton from "../components/buttons/clasic/TestButton";
import Text from "../components/text/Text";
import React from "react";

const PageButton = () => {
  return (
    <div className="mt-7 container-heading-pages">
      <Text.Subheading4 className="componente-props">
        Componentes
      </Text.Subheading4>
      <Text.Heading1>Button | Botón</Text.Heading1>
      <Text.Subheading2>
        Botones clásicos para utilizar en diferentes componentes.
      </Text.Subheading2>

      <TestButton />
    </div>
  );
};

export default PageButton;
