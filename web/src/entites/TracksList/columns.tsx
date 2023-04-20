import { Column } from '@/shared/ui/Table';
import { TableRecord } from './types';

export const columns: Column<TableRecord>[] = [
  { key: 'title', title: 'TITLE', dataIndex: 'title' },
  { key: 'artist', title: 'ARTIST', dataIndex: 'artist' },
  { key: 'album', title: 'ALBUM', dataIndex: 'album' },
];
