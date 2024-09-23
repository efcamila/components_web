import React from "react";
import Text from "../components/text/Text";
import TestTheme from "../components/theme/TestTheme";

const PageTheme = () => {
  return (
    <div className="md:mt-7 container-heading-pages">
        <Text.Subheading4 className="componente-props">Componentes</Text.Subheading4>
          <Text.Heading1 className="mb-2 dark:text-white">Theme | Tema</Text.Heading1>
          <Text.Subheading2>
            Incorpora el <strong>Theme</strong> para hacer que tu sitio sea
            claro u oscuro.
          </Text.Subheading2>
        <TestTheme/>
    </div>
  );
};

export default PageTheme;
