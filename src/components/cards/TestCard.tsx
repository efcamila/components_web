import Button from "../buttons/clasic/Button";
import Badge from "../bagde/Badge";
import Card from "./Card";
import Container from "../container/Container";
import Text from "../text/Text";
import Table from "../tables/TableAction";
import React from "react";
import TableInfoPages from "../../pages/componentsPages/TableInfoPages";

const data = [
  {
    attribute: "children",
    type: "ReactNode",
    description: "Contenido que se renderiza dentro de la Card.",
    default: "-",
  },
  {
    attribute: "horizontal?",
    type: "boolean",
    description: "Define la posición horizontal de la tarjeta.",
    default: "false",
  },
  {
    attribute: "hasPadding?",
    type: "boolean",
    description: "Define un padding estándar si contiene una ImageCard.",
    default: "false",
  },
  {
    attribute: "className?",
    type: "string",
    description: "Permite aplicar clases CSS personalizadas a la tarjeta.",
    default: "bg-gray-50 dark:bg-black-600",
  },
];

const TestCard = () => {
  return (
    <div className="flex flex-col gap-8 pt-4">
      <TableInfoPages data={data}/>

      <Container col className="gap-5">
        <Text.Heading3>Horizontal</Text.Heading3>
        <Container className="items-start gap-3">
          <Card
            className="bg-gray-50 dark:bg-black-700 border border-gray-200 dark:border-black-600 w-full md:w-2/5"
            hasPadding
          >
            <Badge position="inside-right">You can add Badges</Badge>
            <Card.Header>
              <Card.Title>Title</Card.Title>
              <Card.Subtitle>Subtitle</Card.Subtitle>
            </Card.Header>
            <Card.Footer>
              <div className="flex gap-2">
                <Button rounded="full" className="w-1/2 primary-light">
                  Action
                </Button>
                <Button rounded="full" className="w-1/2 primary-border">
                  Action
                </Button>
              </div>
            </Card.Footer>
          </Card>

          <Card
            horizontal
            className="bg-gray-50 dark:bg-black-700 border border-gray-200 dark:border-black-600 w-full md:w-1/2"
            hasPadding
          >
            <Card.Header>
              <Card.Title>Title</Card.Title>
              <Card.Subtitle>Subtitle</Card.Subtitle>
            </Card.Header>
            <Card.Footer>
              <Button rounded="full" className="primary-light">
                Action
              </Button>
              <Button rounded="full" className="primary-border">
                Action
              </Button>
            </Card.Footer>
          </Card>
        </Container>
        <Container className="gap-2">
          <Text.Heading3>HasPadding</Text.Heading3>
          <Container className="items-start">
            <Card
              className="bg-gray-50 dark:bg-black-700 border border-gray-200 dark:border-black-600 w-full md:w-2/5"
              hasPadding
            >
              <Card.Image src="/example.jpg" alt="Vite" />
              <Card.Header>
                <Card.Title>Title</Card.Title>
                <Card.Subtitle>Subtitle</Card.Subtitle>
              </Card.Header>
              <Card.Body>
                Body
                <Card.Detail>Detail</Card.Detail>
              </Card.Body>
              <Card.Footer>
                <Button rounded="full" className="primary-border">
                  Action
                </Button>
              </Card.Footer>
            </Card>
            <Card className="bg-gray-50 dark:bg-black-700 border border-gray-200 dark:border-black-600 w-full md:w-2/5">
              <Card.Image src="/example.jpg" alt="Vite" />
              <Card.Header>
                <Card.Title>Title</Card.Title>
                <Card.Subtitle>Subtitle</Card.Subtitle>
              </Card.Header>
              <Card.Body>
                Body
                <Card.Detail>Detail</Card.Detail>
              </Card.Body>
              <Card.Footer>
                <Button rounded="full" className="primary-border">
                  Action
                </Button>
              </Card.Footer>
            </Card>
          </Container>
        </Container>
      </Container>
    </div>
  );
};

export default TestCard;
