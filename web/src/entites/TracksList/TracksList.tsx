import React from 'react';

import { Table } from '@/shared';
import { columns } from './columns';
import { useGate, useStore, useStoreMap } from 'effector-react';

import { $tracks, TracksGate, requestTracksFx } from './models';
import { mapTracksToTableRecord } from './helpers';

export const TracksList = () => {
  useGate(TracksGate);

  const loading = useStore(requestTracksFx.pending);
  const data = useStoreMap($tracks, (tracks) =>
    mapTracksToTableRecord(tracks || []),
  );

  return <Table loading={loading} columns={columns} data={data} />;
};
