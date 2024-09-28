import React from "react";
import Image from "./Image";
import Card from "../cards/Card";
import Text from "../text/Text";
import Table from "../tables/TableAction";
import TableInfoPages from "../../pages/componentsPages/TableInfoPages";

const data = [
  {
    attribute: "src",
    type: "string",
    description: "Define la URL de la imagen.",
    default: "-",
  },
  {
    attribute: "alt",
    type: "string",
    description: "Texto alternativo que describe la imagen.",
    default: "-",
  },
];

const dataImageAvatar = [
  {
    attribute: "size",
    type: ["xs", "sm", "md", "lg", "xl"],
    description: "Define las medidas de un avatar.",
    default: "md",
  },
];

const dataImageCard = [
  {
    attribute: "hasPadding",
    type: "boolean",
    description:
      "Nivel de redondeo de los bordes de la imagen según el diseño de la tarjeta",
    default: "false",
  },
];

const TestImage = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 mt-5">
        <Text.Heading3>All Images</Text.Heading3>
        <TableInfoPages data={data} />
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <Text.Heading3>ImageCard</Text.Heading3>
        <TableInfoPages data={dataImageCard} />

        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-auto md:grid-rows-2 h-full md:h-[300px] gap-2">
            <Card className="h-[200px] md:h-full col-span-2 row-span-1 md:row-span-2">
              <Image.Card
                src="https://i.pinimg.com/564x/ab/40/bc/ab40bcb54b49e27c2f65f5f7708f694b.jpg"
                alt="img4"
                hasPadding
              />
            </Card>
            <Card className="h-[100px] md:h-full col-span-1">
              <Image.Card src="/example2.jpg" alt="img4" />
            </Card>
            <Card className="h-[100px] md:h-full col-span-1">
              <Image.Card src="/example3.jpg" alt="img4" />
            </Card>
            <Card className="h-[150px] md:h-full col-span-2">
              <Image.Card src="/example4.jpg" alt="img4" hasPadding />
            </Card>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <Text.Heading3>ImageAvatar</Text.Heading3>
        <TableInfoPages data={dataImageAvatar}/>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-baseline gap-8 h-full md:h-[100px]">
          <section className="flex flex-col justify-center items-center gap-2">
            <Image.Avatar src="/avatar.jpg" alt="img1" size="xs" />
            <Text.Content3>Extra Small</Text.Content3>
          </section>
          <section className="flex flex-col justify-center items-center gap-2">
            <Image.Avatar src="/avatar.jpg" alt="img1" size="sm" />
            <Text.Content3>Small</Text.Content3>
          </section>
          <section className="flex flex-col justify-center items-center gap-2">
            <Image.Avatar src="/avatar.jpg" alt="img2" size="md" />
            <Text.Content3>Medium</Text.Content3>
          </section>
          <section className="flex flex-col justify-center items-center gap-2">
            <Image.Avatar src="/avatar.jpg" alt="img3" size="lg" />
            <Text.Content3>Large</Text.Content3>
          </section>
          <section className="flex flex-col justify-center items-center gap-2">
            <Image.Avatar src="/avatar.jpg" alt="img3" size="xl" />
            <Text.Content3>Extra Large</Text.Content3>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TestImage;
