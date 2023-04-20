import { sample } from 'effector';

import { $tracks, TracksGate, requestTracksFx } from '.';
import { tracksApi } from '@/app/tracksApi';

requestTracksFx.use(tracksApi.list);

sample({
  clock: TracksGate.open,
  target: requestTracksFx,
});

sample({
  clock: requestTracksFx.doneData,
  target: $tracks,
});
