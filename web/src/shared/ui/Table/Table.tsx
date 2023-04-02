import React from 'react';

import { TableProps } from './types';
import { Table as StyledTable, Tr, Td, Th } from './styled';

export const Table = <T extends { key: string }>({
  columns,
  data,
}: TableProps<T>) => {
  return (
    <StyledTable>
      <colgroup>
        {columns.map((column) => {
          return (
            <col
              key={`colgroup-${column.key}`}
              span={1}
              style={{ width: column.width }}
            />
          );
        })}
      </colgroup>
      <thead>
        <Tr>
          {columns.map(({ title, key }) => (
            <Th key={key}>{title}</Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {data.map((entity) => {
          return (
            <tr key={entity.key}>
              {columns.map((column) => {
                const value = column.dataIndex
                  ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    entity[column.dataIndex]
                  : null;
                return <Td key={column.key}>{value}</Td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};
