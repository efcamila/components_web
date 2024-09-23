import React from "react";
import Button from "../buttons/clasic/Button";
import Tooltip from "./Tooltip";
import Container from "../container/Container";
import Text from "../text/Text";
import { BsInfoCircleFill } from "react-icons/bs";
import TableInfoPages from "../../pages/componentsPages/TableInfoPages";

const data = [
    {
      attribute: "children",
      type: "ReactNode",
      description: "Contenido que se renderiza dentro del Tooltip.",
      default: "-",
    },
    {
      attribute: "className?",
      type: "string",
      description: "Permite aplicar clases CSS personalizadas al Tooltip.",
      default: "-",
    },
  ];
  

const TestTooltip = () => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <TableInfoPages data={data}/>
      
      <Text.Heading3>Basic Usage</Text.Heading3>
      <Container className="container-rounded">
        <Button className="tooltip primary">
          Tooltip básico
          <Tooltip>Agrega información adicional</Tooltip>
        </Button>
        <Button className="tooltip primary">
          Tooltip con ícono
          <Tooltip className="text-black-800 rounded-lg bg-rose-200 text-xs"><BsInfoCircleFill/>Agrega información adicional</Tooltip>
        </Button>
      </Container>  
    </div>
  );
};

export default TestTooltip;
