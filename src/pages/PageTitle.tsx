import TestText from '../components/text/TestText'
import Text from '../components/text/Text'
import React from 'react'

const PageText = () => {
  return (
    <div className="md:mt-7 container-heading-pages">
          <Text.Subheading4 className="componente-props">Componentes</Text.Subheading4>
            <Text.Heading1>Texts | Textos</Text.Heading1>
            <Text.Subheading2>
              Títulos, subtítulos y contenidos.
            </Text.Subheading2>
          
            <TestText/>
        </div>
  )
}

export default PageText