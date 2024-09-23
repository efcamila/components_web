import Modal from "./Modal";
import Button from "../buttons/clasic/Button";
import React from "react";

const TestModalTable = ({
  selectedId,
  value,
  onClose,
}: {
  selectedId: string;
  value: boolean;
  onClose: () => void;
}) => {
  if (!value) return null;

  return (
    <Modal size="md">
      <Modal.Header onClose={onClose}>
        <Modal.Title>Editar un archivo</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <p>#{selectedId}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          animi atque illum magnam, pariatur tenetur sit accusantium tempore
          facilis omnis nemo maiores quidem quasi tempora rem? Cum cupiditate
          ipsa accusamus.
        </p>
      </Modal.Content>
      <Modal.Footer>
        <Button rounded="lg" className="primary-light" onClick={onClose}>
          Cerrar
        </Button>
        <Button rounded="lg">Aceptar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TestModalTable;
