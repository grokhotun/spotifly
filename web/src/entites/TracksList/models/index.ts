import { createStore, createEffect } from 'effector';
import { createGate } from 'effector-react';
import { Track } from '@/types';

export const TracksGate = createGate<void>();
export const $tracks = createStore<Track[] | null>(null);
export const $error = createStore<Error | null>(null);
export const requestTracksFx = createEffect<void, Track[], Error>();
