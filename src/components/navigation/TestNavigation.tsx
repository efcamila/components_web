import Container from "../container/Container";
import FooterTest from "./footer/FooterTest";
import Text from "../text/Text";
import Table from "../tables/TableAction";
import React from "react";
import TableInfoPages from "../../pages/componentsPages/TableInfoPages";

const dataNavbar = [
  {
    attribute: "children",
    type: "ReactNode",
    description: "Contenido que se renderiza dentro del Navbar.",
    default: "-",
  },
  {
    attribute: "menu",
    type: "boolean",
    description: "Indica si el menú está abierto o cerrado.",
    default: "-",
  },
  {
    attribute: "setMenu",
    type: "Dispatch<SetStateAction<boolean>>",
    description:
      "Función que se utiliza para actualizar el estado de menu.",
    default: "-",
  },
];

const dataSidebar = [
  {
    attribute: "children",
    type: "ReactNode",
    description: "Contenido que se renderiza dentro del Sidebar.",
    default: "-",
  },
  {
    attribute: "menu",
    type: "boolean",
    description: "Indica si el menú está abierto o cerrado.",
    default: "-",
  },
  {
    attribute: "setMenu",
    type: "Dispatch<SetStateAction<boolean>>",
    description:
      "Función que se utiliza para actualizar el estado de menu.",
    default: "-",
  },
  {
    attribute: "noIcon",
    type: "boolean",
    description:
      "Permite utilizarlo junto al Navbar.",
    default: "-",
  },
];

const dataFooter = [
  {
    attribute: "children",
    type: "ReactNode",
    description: "Contenido que se renderiza dentro del Footer.",
    default: "-",
  },
  {
    attribute: "company",
    type: "string",
    description: "Define el nombre de la marca para colocarlo junto a los derechos reservados.",
    default: "-",
  },
];

const TestNavigation = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 mb-9">
        <Container col className="mt-5">
          <Text.Heading3>Navbar</Text.Heading3>
          <Text.Content1>Barra de navegación superior.</Text.Content1>
        </Container>
        <div className="flex flex-col gap-4 mb-4">
        <TableInfoPages data={dataNavbar}/>
        </div>
        <Container col className="h-[500px] container-rounded">
          <iframe
            src="/examples/navbar/usage"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Usage Example"
          />
        </Container>
      </div>

      <div className="flex flex-col gap-4 mb-9">
        <Container col>
          <Text.Heading3>Sidebar</Text.Heading3>
          <Text.Content1>Barra de navegación lateral.</Text.Content1>
        </Container>
        <div className="flex flex-col gap-4 mb-4">
        <TableInfoPages data={dataSidebar}/>
        </div>
        <Container col className="h-[500px] container-rounded">
          <iframe
            src="/examples/sidebar/usage"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Usage Example"
          />
        </Container>
      </div>


      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <Container col className="mt-5">
            <Text.Heading3>Footer</Text.Heading3>
            <Text.Content1>Barra de navegación inferior.</Text.Content1>
          </Container>
          <div className="flex flex-col gap-4 mb-4">
          <TableInfoPages data={dataFooter}/>
        </div>
          <Container className="max-h-[800px] container-rounded">
            <FooterTest />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default TestNavigation;
