import { Modal, ModalContent, ModalFooter, ModalHeader, ModalTitle } from './Modal'
import { Button } from '../buttons/clasic/Button'

const TestModalTable = ({selectedId, value, onClose}:{selectedId:string, value:boolean, onClose: ()=>void}) => {

    if (!value) return null
    
  return (
    <Modal size="md">
          <ModalHeader onClose={onClose}>
            <ModalTitle>Editar un archivo</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <p>#{selectedId}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            animi atque illum magnam, pariatur tenetur sit accusantium tempore
            facilis omnis nemo maiores quidem quasi tempora rem? Cum cupiditate
            ipsa accusamus.</p>
          </ModalContent>
          <ModalFooter>
            <Button
              type="button"
              style="neutral"
              rounded="lg"
              variant="light"
              onClick={onClose}
            >
              Cerrar
            </Button>
            <Button type="button" style="primary" rounded="lg">
              Aceptar
            </Button>
          </ModalFooter>
        </Modal>
  )
}

export default TestModalTable