import { useState } from "react";
import { Button } from "../buttons/clasic/Button";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalSubtitle,
  ModalTitle,
} from "./Modal";

const TestModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="m-4 w-32">
      <Button
        type="button"
        style="primary"
        onClick={() => setShowModal(true)}
        rounded="lg"
      >
        Abrir modal
      </Button>

      {showModal && (
        <Modal size="sm">
          <ModalHeader onClose={() => setShowModal(false)}>
            <ModalTitle>Título</ModalTitle>
            <ModalSubtitle>Esto es un subtítulo</ModalSubtitle>
          </ModalHeader>
          <ModalContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Magna exercitation reprehenderit magna aute tempor cupidatat
              consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
              incididunt cillum quis. Velit duis sit officia eiusmod Lorem
              aliqua enim laboris do dolor eiusmod.
            </p>
          </ModalContent>
          <ModalFooter>
            <Button
              type="button"
              style="neutral"
              rounded = "lg"
              variant="border"
              onClick={() => setShowModal(false)}
            >
              Cerrar
            </Button>
            <Button type="button" style="primary" rounded="lg">
              Aceptar
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </section>
  );
};

export default TestModal;
