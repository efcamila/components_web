import TableInfoPages from "../../pages/componentsPages/TableInfoPages";
import Table from "../tables/TableAction";
import Text from "./Text";
import React from "react";

const data = [
  {
    attribute: "children",
    type: "ReactNode",
    description: "Contenido que se renderiza dentro de la Card.",
    default: "-",
  },
  {
    attribute: "className?",
    type: "string",
    description:
      "Permite aplicar clases CSS personalizadas a los textos.",
    default: "-",
  },
];


const TestText = () => {
  return (
    <div className="flex flex-col gap-10 mt-5">
      <div className="mb-4">
      <TableInfoPages data={data}/>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <Text.Heading2>Headings</Text.Heading2>
          <Text.Subheading2>Ideal para encabezados.</Text.Subheading2>
        </div>
        <div className="container-rounded">
          <Text.Heading2xl>Heading 2xl</Text.Heading2xl>
          <Text.Headingxl>Heading xl</Text.Headingxl>
          <Text.Heading1>Heading 1</Text.Heading1>
          <Text.Heading2>Heading 2</Text.Heading2>
          <Text.Heading3>Heading 3</Text.Heading3>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <Text.Heading2>Subheadings</Text.Heading2>
          <Text.Subheading2>Ideal para sub-encabezados.</Text.Subheading2>
        </div>
        <div className="container-rounded">
          <Text.Subheading1>Subheading 1</Text.Subheading1>
          <Text.Subheading2>Subheading 2</Text.Subheading2>
          <Text.Subheading3>Subheading 3</Text.Subheading3>
          <Text.Subheading4>Subheading 4</Text.Subheading4>
        </div>
      </div>
      <div className="flex flex-col gap-3">
      <div>
          <Text.Heading2>Content</Text.Heading2>
          <Text.Subheading2>Ideal para cuerpos y párrafos.</Text.Subheading2>
        </div>
      <div className="container-rounded">
        <Text.Content1>Content 1</Text.Content1>
        <Text.Content2>Content 2</Text.Content2>
        <Text.Content3>Content 3</Text.Content3>
      </div>
      </div>
    </div>
  );
};

export default TestText;
