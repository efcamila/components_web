import TestBadge from "../components/bagde/TestBadge";
import Text from "../components/text/Text";
import React from "react";

const PageBadge = () => {
  return (
    <div className="mt-7 container-heading-pages">
      <Text.Subheading4 className="componente-props">
        Componentes
      </Text.Subheading4>
      <Text.Heading1>Badges | Insignias</Text.Heading1>
      <Text.Subheading2>
        Destaca información clave como notificaciones, estados y contadores con
        los badges.
      </Text.Subheading2>
      <TestBadge />
    </div>
  );
};

export default PageBadge;
