import Badge from "../../components/bagde/Badge";
import Table from "../../components/tables/TableAction";
import React, { ReactNode } from "react";

interface DataItems {
 
    attribute: ReactNode;
    type: string | string[];
    description: ReactNode;
    default: string;
 
}

interface DataProps {
    data: DataItems[]
}


const TableInfoPages = ({ data }: DataProps) => {
  return (
    <Table>
      <Table.Head>
        <Table.Column>Attribute</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Description</Table.Column>
        <Table.Column>Default</Table.Column>
      </Table.Head>
      <Table.Body>
        {data.map((data, index) => (
          <Table.Row key={index}>
            <Table.Cell>{data.attribute}</Table.Cell>
            <Table.Cell>
              <div className="flex-wrap flex gap-3 font-mono py-1">
                {Array.isArray(data.type) ? (
                  data.type.map((type, index) => (
                      <span className="badge-props mr-1" key={`${type}-${index}`}>{type}</span>
                  ))
                ) : (
                  <span className="badge-props">{data.type}</span>
                )}
              </div>
            </Table.Cell>
            <Table.Cell>{data.description}</Table.Cell>
            <Table.Cell>
              <span className="badge-props">{data.default}</span>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default TableInfoPages;
