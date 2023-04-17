import React from 'react';

import { TableProps } from './types';
import { Table as StyledTable, Tr, Td, Th } from './styled';
import { pick } from '@/shared/utils/pick';

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
                  ? pick(entity, column.dataIndex)
                  : null;

                const content = column.render
                  ? column.render(value, entity)
                  : value;

                return <Td key={column.key}>{content}</Td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};
