import Button from "../buttons/clasic/Button";
import Badge from "./Badge";
import Card from "../cards/Card";
import Container from "../container/Container";
import Text from "../text/Text";
import React from "react";
import TableInfoPages from "../../pages/componentsPages/TableInfoPages";

const data = [
  {
    attribute: "children",
    type: "ReactNode",
    description: "Contenido que se renderiza dentro del Badge.",
    default: "-",
  },
  {
    attribute: "position",
    type: [
      "normal",
      "inside-left",
      "inside-right",
      "outside-left",
      "outside-right",
    ],
    description: <>Define la posición del badge en relación a otros elementos.
        <br /> Se debe utilizar un contenedor con la propiedad{" "}
        <strong>relative</strong>.
      </>,
    default: "normal",
  },
  {
    attribute: "className?",
    type: "string",
    description: "Permite aplicar clases CSS adicionales al componente.",
    default: "primary",
  },
];

const TestBadge = () => {
  return (
    <div className="flex flex-col gap-2 pt-6">
      <TableInfoPages data={data}/>

      <Text.Heading3 className="mt-7 mb-3 dark:text-white">
        Position
      </Text.Heading3>

      <div className="flex flex-col gap-8">
      <Container col className="gap-3">
        <Text.Content1>
          <strong className="text-blue-600 font-medium">Normal</strong>,
          posición fija para usar en tablas.
        </Text.Content1>
        <Container className="container-rounded">
          <Badge position="normal" className="success-solid">
            This is a Badge
          </Badge>
        </Container>
      </Container>

      <Container col className="gap-3">
        <Text.Content1>
          <strong className="text-blue-600 font-medium">Inside</strong>, para
          resaltar componentes.
        </Text.Content1>
        <Container className="container-rounded">
          <Card className="w-full max-w-96 bg-gray-100 dark:bg-black-700">
            <Badge position="inside-left" className="warning-solid">
              Inside left
            </Badge>
            <Card.Header>
              <br />
              <Card.Title>Title</Card.Title>
            </Card.Header>
          </Card>
          <Card className="w-full max-w-96 bg-gray-100 dark:bg-black-700">
            <Badge position="inside-right" className="warning-solid">
              Inside right
            </Badge>
            <Card.Header>
              <Card.Title>Title</Card.Title>
            </Card.Header>
          </Card>
        </Container>
      </Container>

      <Container col className="gap-3">
        <Text.Content1>
          <strong className="text-blue-600 font-medium">Outside</strong>, para
          notificaciones.
        </Text.Content1>
        <Container className="container-rounded gap-4">
          <Button className="primary-light-active relative">
            Text
            <Badge position="outside-left" className="primary">
              99+
            </Badge>
          </Button>

          <Button className="primary-light relative">
            Text
            <Badge position="outside-right" className="primary">
              99+
            </Badge>
          </Button>
        </Container>
      </Container>
      </div>
    </div>
  );
};

export default TestBadge;
