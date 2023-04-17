import { Column } from '@/shared/ui/Table';

export const data = [
  {
    key: '1',
    id: 1,
    title: 'Жить в кайф',
    artist: 'Макс Корж',
    album: 'Животный мир',
  },
];

export const columns: Column<(typeof data)[0]>[] = [
  { key: 'title', title: 'TITLE', dataIndex: 'title' },
  { key: 'artist', title: 'ARTIST', dataIndex: 'artist' },
  { key: 'album', title: 'ALBUM', dataIndex: 'album' },
];
