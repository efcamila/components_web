import TestModal from '../components/modals/TestModal'
import Text from '../components/text/Text'
import React from 'react'

const PageModal = () => {
  return (
    <div className="mt-7 container-heading-pages">
      <Text.Subheading4 className="componente-props">Componentes</Text.Subheading4>
        <Text.Heading1>Modal | Ventana</Text.Heading1>
        <Text.Subheading2>Ventanas emergentes que muestran información.</Text.Subheading2>
        <TestModal/>
    </div>
  )
}

export default PageModal