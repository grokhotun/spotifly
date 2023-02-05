const tracks = [{ id: 1, name: 'Небо поможет нам', artist: 'Макс Корж' }];

class Track {
  get(id: number) {
    return tracks[0];
  }
  getAll() {
    return tracks;
  }
  create() {
    return tracks[0];
  }
  update() {
    return tracks[0];
  }
  delete() {
    return tracks[0];
  }
}

const trackModel = new Track();

export { trackModel };
