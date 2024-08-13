import { ReactNode } from "react";
import { GoPencil } from "react-icons/go";
import { IoEyeOutline, IoTrashOutline } from "react-icons/io5";

interface BaseTableProps {
  children: ReactNode;
}

interface TableHeadProps {
  children: ReactNode;
  actions?: boolean;
}

interface ActionsTableRowProps extends BaseTableProps {
  actions: {
    view?: string;
    edit?: string;
    delete?: string;
  };
  id: number;
}

interface NoActionsTableRowProps extends BaseTableProps {
  actions?: undefined;
  id?: null;
}

type TableRowProps = ActionsTableRowProps | NoActionsTableRowProps;

interface TableCellProps {
  children: ReactNode;
}

const Table = ({ children }: BaseTableProps) => {
  return (
    <div className="overflow-auto w-full max-w-[1200px] bg-gray-50 border border-gray-200 rounded-lg p-4 dark:bg-gray-900 dark:border-gray-800">
      <table className="w-full max-w-[1200px] border-collapse">
        {children}
      </table>
    </div>
  );
};

const TableHead = ({ children, actions = false }: TableHeadProps) => {
  return (
    <thead className="bg-gray-100 rounded-lg dark:bg-gray-800">
      <tr>
        {children}
        {actions && (
          <th className="text-start h-10 px-3 py-2 text-nowrap font-bold text-xs text-gray-500 last:rounded-r-lg uppercase w-[50px] dark:text-gray-300">
            Acciones
          </th>
        )}
      </tr>
    </thead>
  );
};

const TableColumn = ({ children }: TableHeadProps) => {
  return (
    <th className="text-start h-10 px-3 py-2 text-nowrap font-bold text-xs text-gray-500 first:rounded-l-lg uppercase dark:text-gray-400">
      {children}
    </th>
  );
};

const TableBody = ({ children }: BaseTableProps) => {
  return <tbody className="bg-gray-50 dark:bg-gray-900">{children}</tbody>;
};

const TableRow = ({ children, actions, id }: TableRowProps) => {
  if (actions && typeof id === "undefined") {
    throw new Error("ID is required when actions are provided.");
  }

  return (
    <tr className="">
      {children}
      {actions && (
        <td className="flex justify-center items-center gap-3 h-10 px-3 py-2 text-nowrap first:rounded-l-lg dark:text-gray-100">
          {actions.view && id && (
            <a href={`${actions.view}/${id}`}>
              <IoEyeOutline className="text-xl font-normal text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-500" />
            </a>
          )}
          {actions.edit && id && (
            <a href={`${actions.edit}/${id}`}>
              <GoPencil className="text-xl text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-500" />
            </a>
          )}
          {actions.delete && id && (
            <a href={`${actions.delete}/${id}`}>
              <IoTrashOutline className="text-xl text-rose-600 hover:text-rose-800" />
            </a>
          )}
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
  return <p className="text-sm text-gray-400 dark:text-gray-500">{children}</p>
};

export { Table, TableHead, TableBody, TableColumn, TableRow, TableCell, TableCellInfo };
