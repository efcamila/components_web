import TestNavigation from "../components/navigation/TestNavigation";
import Text from "../components/text/Text";
import React from "react";

const PageNavigation = () => {
  return (
    <div className="w-full">
      <div className="mt-7 container-heading-pages">
        <Text.Subheading4 className="componente-props">
          Componentes
        </Text.Subheading4>
        <Text.Heading1>Navigation | Navegación</Text.Heading1>
        <Text.Subheading2>Diferentes maneras de navegación.</Text.Subheading2>
      </div>
      <TestNavigation />
    </div>
  );
};

export default PageNavigation;
