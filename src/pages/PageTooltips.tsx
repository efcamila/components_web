import TestTooltip from '../components/tooltips/TestTooltip';
import Text from '../components/text/Text';
import React from 'react'

const PageTooltips = () => {
    return (
        <div className="mt-7 container-heading-pages">
          <Text.Subheading4 className="componente-props">
            Componentes
          </Text.Subheading4>
          <Text.Heading1>Tooltips | Mensajes de ayuda</Text.Heading1>
          <Text.Subheading2>
          Proporcionan información adicional sobre un elemento cuando el usuario pasa el cursor sobre el mismo. 
          </Text.Subheading2>
          <TestTooltip/>
        </div>
      );
}

export default PageTooltips