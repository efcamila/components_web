import { useState } from "react";
import Button from "../buttons/clasic/Button";
import Modal from "./Modal";
import Container from "../container/Container";
import Text from "../text/Text";
import Table from "../tables/TableAction";
import React from "react";
import TableInfoPages from "../../pages/componentsPages/TableInfoPages";

const data = [
  {
    attribute: "children",
    type: "ReactNode",
    description: "Contenido que se renderiza dentro del Modal.",
    default: "-",
  },
  {
    attribute: "size",
    type: ["sm", "md", "lg"],
    description: "Define el tamaño del modal.",
    default: "md",
  },
  {
    attribute: "onClose",
    type: "() => void",
    description:
      "Función que se ejecuta cuando se hace un click sobre el ícono cerrar",
    default: "-",
  },
];

const TestModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalSize, setShowModalSize] = useState(false);
  const [size, setSize] = useState<Size>("sm");

  type Size = "sm" | "md" | "lg";

  const handleModal = (size: Size) => {
    setShowModalSize(true);
    setSize(size);
  };

  return (
    <div className="mt-5 flex flex-col gap-4 mb-4">
      <TableInfoPages data={data} />

      <Container col className="gap-6">
        <Container col className="gap-3 mt-4">
          <Text.Heading3>Basic usage</Text.Heading3>
          <Button
            onClick={() => setShowModal(true)}
            rounded="lg"
            className="w-40 primary"
          >
            Abrir modal
          </Button>
        </Container>

        <Container className="gap-3">
          <Text.Heading3>Sizes</Text.Heading3>
          <Container className="gap-3">
            <Button onClick={() => handleModal("sm")} rounded="lg">
              Small
            </Button>
            <Button onClick={() => handleModal("md")} rounded="lg">
              Medium
            </Button>
            <Button onClick={() => handleModal("lg")} rounded="lg">
              Large
            </Button>
          </Container>
        </Container>
      </Container>

      {showModal && (
        <Modal size="sm">
          <Modal.Header onClose={() => setShowModal(false)}>
            <Modal.Title>Título</Modal.Title>
            <Modal.Subtitle>Esto es un subtítulo</Modal.Subtitle>
          </Modal.Header>
          <Modal.Content>
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
          </Modal.Content>
          <Modal.Footer>
            <Button
              rounded="lg"
              onClick={() => setShowModal(false)}
              className="primary-light"
            >
              Cerrar
            </Button>
            <Button rounded="lg">Aceptar</Button>
          </Modal.Footer>
        </Modal>
      )}

      {showModalSize && (
        <Modal size={size}>
          <Modal.Header onClose={() => setShowModalSize(false)}>
            <Modal.Title>Título</Modal.Title>
            <Modal.Subtitle>Esto es un subtítulo</Modal.Subtitle>
          </Modal.Header>
          <Modal.Content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
          </Modal.Content>
          <Modal.Footer>
            <Button
              rounded="lg"
              onClick={() => setShowModalSize(false)}
              className="primary-light"
            >
              Cerrar
            </Button>
            <Button rounded="lg">Aceptar</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default TestModal;
