import React from 'react';

import { Table } from '@/shared';
import { columns, data } from './columns';

export const TracksList = () => {
  return <Table columns={columns} data={data} />;
};
