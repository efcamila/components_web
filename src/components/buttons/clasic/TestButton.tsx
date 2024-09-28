import { FaCheck } from "react-icons/fa";
import Button from "./Button";
import { useState } from "react";
import Container from "../../container/Container";
import { GrDislike, GrLike } from "react-icons/gr";
import { FaMessage } from "react-icons/fa6";
import Text from "../../text/Text"
import React from "react";
import TableInfoPages from "../../../pages/componentsPages/TableInfoPages";

const data = [
  {
    "attribute":"children",
    "type": "ReactNode",
    "description": "Contenido que se renderiza dentro del Button.",
    "default": "-"
  },
  {
    "attribute":"size?",
    "type": ["sm","md","lg"],
    "description": "Define el tamaño del botón.",
    "default": "md"
  },
  {
    "attribute":"icon?",
    "type": "boolean",
    "description": "Indica si el botón debe mostrar solo un ícono.",
    "default": "-"
  },
  {
    "attribute":"disabled?",
    "type": "boolean",
    "description": "Define si el botón esta deshabilitado.",
    "default": "-"
  },
  {
    "attribute":"rounded?",
    "type": ["none","sm","md","lg","xl","full"],
    "description": "Nivel de redondeo de los bordes del botón.",
    "default": "md"
  },
  {
    "attribute":"onClick?",
    "type": "() => void",
    "description": "Función que se ejecuta cuando se hace un click sobre el botón.",
    "default": "-"
  },
  {
    "attribute":"ariaLabel?",
    "type": "string",
    "description": "Proporciona un texto alternativo para accesibilidad.",
    "default": "-"
  },
  {
    "attribute":"className?",
    "type": "string",
    "description": "Permite aplicar clases CSS personalizadas al botón.",
    "default": "primary"
  }
]

const TestButton = () => {
  const [like, setLike] = useState(false);

  return (
    <div className="flex flex-col gap-6 pt-6">
      <TableInfoPages data={data}/>
      
      <Container col className="gap-3">
        <Text.Heading3>Sizes</Text.Heading3>
        <Container className="container-rounded">
          <Button size="sm" rounded="full">
            <FaCheck />
            Small
          </Button>
          <Button size="md" rounded="full">
            <FaCheck />
            Medium
          </Button>
          <Button size="lg" rounded="full">
            <FaCheck />
            Large
          </Button>
        </Container>
      </Container>

      <Container col className="gap-3">
      <Text.Heading3>Icon</Text.Heading3>
        <Container className="container-rounded">
          <Button
            icon
            className="primary-light-active">
            <FaMessage/>
          </Button>
        </Container>
      </Container>

      <Container col className="gap-3">
      <Text.Heading3>Disabled</Text.Heading3>
        <Container className="container-rounded">
          <Button rounded="full" disabled>
            Disabled
          </Button>
        </Container>
      </Container>

      <Container col className="gap-3">
      <Text.Heading3>Rounded</Text.Heading3>
        <Container className="container-rounded">
          <Button rounded="none">None</Button>
          <Button rounded="sm">Small</Button>
          <Button rounded="md">Medium</Button>
          <Button rounded="lg">Large</Button>
          <Button rounded="xl">Extra Large</Button>
          <Button rounded="full">Full</Button>
        </Container>
      </Container>

      <Container col className="gap-3">
      <Text.Heading3>On Click</Text.Heading3>
        <Container className="p-5 gap-3 items-center border border-gray-200 rounded-xl">
          <Button
            rounded="lg"
            onClick={() => setLike(prevLike => !prevLike)}
          >
            {like ? <><GrDislike/> I dont like</> : <><GrLike /> I like</>}
          </Button>
        </Container>
      </Container>
    </div>
  );
};
export default TestButton;
