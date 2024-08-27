import { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
  TableCellInfo,
} from "./TableAction";
import TestModalTable from "../modals/TestModalTable";
import Badge from "../bagde/Badge";

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
    <>
      <TestModalTable
        selectedId={selectedId}
        value={modal}
        onClose={() => setModal(false)}
      />

      <Table>
        <TableHead actions>
          <TableColumn>ID</TableColumn>
          <TableColumn>Nombre</TableColumn>
          <TableColumn>Edad</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Activo</TableColumn>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              onClick={(action: any) => {
                setSelectedId(user.id.toString());
                handleRowAction(action);
              }}
            >
              <TableCell>{user.id}</TableCell>
              <TableCell>
                {user.nombre}
                <TableCellInfo>{user.email}</TableCellInfo>
              </TableCell>
              <TableCell>{user.edad}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.activo ? <Badge position="normal" style="success-light">Activo</Badge> : <Badge position="normal" style="danger-light">No activo</Badge>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TestTableAction;
