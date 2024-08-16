import { ReactNode } from "react";
import { GoPencil } from "react-icons/go";
import { IoEyeOutline, IoTrashOutline } from "react-icons/io5";
import { Button } from "../buttons/clasic/Button";

interface BaseTableProps {
  children: ReactNode;
}

interface TableHeadProps {
  children: ReactNode;
  actions?: boolean;
}

interface ActionsTableRowProps extends BaseTableProps {
  onClick: (action: "view" | "edit" | "delete") => void;
}

interface NoActionsTableRowProps extends BaseTableProps {
  onClick?: undefined;
}

type TableRowProps = ActionsTableRowProps | NoActionsTableRowProps;

interface TableCellProps {
  children: ReactNode;
}

const Table = ({ children }: BaseTableProps) => {
  return (
    <div className="overflow-auto w-full max-w-[1200px] bg-gray-50 border border-gray-200 rounded-lg p-4 dark:bg-black-700 dark:border-black-800">
      <table className="w-full max-w-[1200px] border-collapse">
        {children}
      </table>
    </div>
  );
};

const TableHead = ({ children, actions = false }: TableHeadProps) => {
  return (
    <thead className="bg-gray-100 rounded-lg dark:bg-black-800">
      <tr>
        {children}
        {actions && (
          <th className="text-start h-10 px-3 py-2 text-nowrap font-bold text-xs text-gray-500 last:rounded-r-lg uppercase w-[50px] dark:text-black-100">
            Acciones
          </th>
        )}
      </tr>
    </thead>
  );
};

const TableColumn = ({ children }: TableHeadProps) => {
  return (
    <th className="text-start h-10 px-3 py-2 text-nowrap font-bold text-xs text-gray-500 first:rounded-l-lg uppercase dark:text-black-100">
      {children}
    </th>
  );
};

const TableBody = ({ children }: BaseTableProps) => {
  return <tbody className="bg-gray-50 dark:bg-black-700">{children}</tbody>;
};

const TableRow = ({ children, onClick }: TableRowProps) => {

  return (
    <tr className="">
      {children}
      {onClick && (
        <td className="flex justify-center items-center gap-3 px-3 py-2 text-nowrap first:rounded-l-lg dark:text-gray-100">
          <Button
            type="button"
            style="neutral"
            variant="icon"
            onClick={() => onClick("view")}
          >
            <IoEyeOutline className="text-xl font-normal" />
          </Button>

          <Button
            type="button"
            style="neutral"
            variant="icon"
            onClick={() => onClick("edit")}
          >
            <GoPencil className="text-xl" />
          </Button>

          <Button type="button" style="danger" variant="icon" onClick={() => onClick("delete") }>
            <IoTrashOutline className="text-xl" />
          </Button>
        </td>
      )}
    </tr>
  );
};

const TableCell = ({ children }: TableCellProps) => {
  return (
    <td className="text-start px-3 py-2 text-nowrap text-gray-600 text-sm dark:text-gray-300">
      {children}
    </td>
  );
};

const TableCellInfo = ({ children }: TableCellProps) => {
  return (
    <p className="text-sm text-gray-400 dark:text-black-100">{children}</p>
  );
};

export {
  Table,
  TableHead,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  TableCellInfo,
};
