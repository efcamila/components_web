import React from "react";
import TestTableAction from "../components/tables/TestTableAction";
import Text from "../components/text/Text";

const PageTable = () => {
  return (
    <div className="md:mt-7 container-heading-pages">
      <Text.Subheading4 className="componente-props">Componentes</Text.Subheading4>
        <Text.Heading1>Table | Tabla</Text.Heading1>
        <Text.Subheading2>
          Mostrar información en tablas responsivas.
        </Text.Subheading2>
      <TestTableAction />
    </div>
  );
};

export default PageTable;
