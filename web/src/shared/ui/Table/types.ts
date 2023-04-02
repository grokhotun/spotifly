import React from 'react';

export type Column<T = any> = {
  key: string;
  title: string;
  dataIndex?: string;
  width?: string;
  render?: (value: any, record: T) => React.ReactNode;
};

export type TableProps<T extends { key: string }> = {
  columns: Column<T>[];
  data: T[];
};
