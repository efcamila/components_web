import Text from "../components/text/Text";
import TestToast from "../components/toast/TestToast";
import React from "react";

const PageToast = () => {
  return (
    <div className="container-heading-pages md:mt-7">
      <Text.Subheading4 className="componente-props">
        Componentes
      </Text.Subheading4>
      <Text.Heading1>Toast | Tostada</Text.Heading1>
      <Text.Subheading2>
        Destaca información clave como notificaciones, estados y contadores con
        los <strong>toast</strong>.
      </Text.Subheading2>
      <TestToast />
    </div>
  );
};

export default PageToast;
