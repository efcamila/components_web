import React,{ useState } from "react";
import Table from "./TableAction";
import TestModalTable from "../modals/TestModalTable";
import Badge from "../bagde/Badge";
import Container from "../container/Container";
import Text from "../text/Text";
import TableInfoPages from "../../pages/componentsPages/TableInfoPages";

const users = [
  {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan.perez@example.com",
    edad: 28,
    activo: true,
  },
  {
    id: 2,
    nombre: "Ana García",
    email: "ana.garcia@example.com",
    edad: 34,
    activo: false,
  },
  {
    id: 3,
    nombre: "Luis Gómez",
    email: "luis.gomez@example.com",
    edad: 45,
    activo: true,
  },
  {
    id: 4,
    nombre: "María López",
    email: "maria.lopez@example.com",
    edad: 22,
    activo: true,
  },
  {
    id: 5,
    nombre: "Carlos Sánchez",
    email: "carlos.sanchez@example.com",
    edad: 30,
    activo: false,
  },
];

const usersEmpty = [
  
]

const data = [
  {
    attribute: "children",
    type: "ReactNode",
    description: "Contenido que se renderiza dentro de la Card.",
    default: "-",
  },
  {
    attribute: "actions",
    type: "boolean",
    description:
      "Agrega la columna Acciones para manejar las acciones.",
    default: "false",
  },
  {
    attribute: "onClick",
    type: "() => void",
    description: <>Permite agregar las acciones.<br/> Debes pasarle un manejador que exprese que se realiza en cada acción.</>,
    default: "-",
  },
];

const TestTableAction = () => {
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState<string>("");

  const handleRowAction = (action: "view" | "edit" | "delete") => {
    switch (action) {
      case "view":
        // useNavigate
        break;
      case "edit":
        console.log(selectedId);
        setModal(true);
        break;
      case "delete":
        break;
    }
  };

  return (
    <div className="py-4">
      <TestModalTable
        selectedId={selectedId}
        value={modal}
        onClose={() => setModal(false)}
      />

      <div className="mb-4">
      <TableInfoPages data={data}/>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        <Text.Heading3>Examples</Text.Heading3>
        <Text.Subheading2>Maneja si se recibe o no información.</Text.Subheading2>
      <Table>
        <Table.Head actions>
          <Table.Column>ID</Table.Column>
          <Table.Column>Nombre</Table.Column>
          <Table.Column>Edad</Table.Column>
          <Table.Column>Email</Table.Column>
          <Table.Column>Activo</Table.Column>
        </Table.Head>
        <Table.Body>
          {users.map((user) => (
            <Table.Row
              key={user.id}
              onClick={(action: any) => {
                setSelectedId(user.id.toString());
                handleRowAction(action);
              }}
            >
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.nombre}</Table.Cell>
              <Table.Cell>{user.edad}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                {user.activo ? (
                  <Badge
                    position="normal"
                    className="bg-green-400 text-black-800"
                  >
                    Activo
                  </Badge>
                ) : (
                  <Badge position="normal" className="bg-rose-500 text-white">
                    No activo
                  </Badge>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Table>
        <Table.Head actions>
          <Table.Column>ID</Table.Column>
          <Table.Column>Nombre</Table.Column>
          <Table.Column>Edad</Table.Column>
          <Table.Column>Email</Table.Column>
          <Table.Column>Activo</Table.Column>
        </Table.Head>
        <Table.Body>
          {usersEmpty.map((user) => (
            <Table.Row
              key={user.id}
              onClick={(action: any) => {
                setSelectedId(user.id.toString());
                handleRowAction(action);
              }}
            >
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.nombre}</Table.Cell>
              <Table.Cell>{user.edad}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                {user.activo ? (
                  <Badge
                    position="normal"
                    className="bg-green-400 text-black-800"
                  >
                    Activo
                  </Badge>
                ) : (
                  <Badge position="normal" className="bg-rose-500 text-white">
                    No activo
                  </Badge>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      </div>
    </div>
  );
};

export default TestTableAction;
