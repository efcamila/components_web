import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
  TableCellInfo,
} from "./TableAction";

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

const urls = {
  view: "ver",
  edit: "edit",
  delete: "delete",
};

const TestTableAction = () => {
  return (
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
          <TableRow key={user.id} id={user.id} actions={urls}>
            <TableCell>{user.id}</TableCell>
            <TableCell>
              {user.nombre}
              <TableCellInfo>{user.email}</TableCellInfo>
            </TableCell>
            <TableCell>{user.edad}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.activo ? "Si" : "No"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TestTableAction;
