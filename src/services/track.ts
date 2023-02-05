const tracks = [{ id: 1, name: 'Небо поможет нам', artist: 'Макс Корж' }];

export type CreateTrackDTO = {
  readonly name: string;
  readonly artist: string;
};

class Track {
  get(id: number) {
    return tracks[0];
  }
  getAll() {
    return tracks;
  }
  create(dto: CreateTrackDTO) {
    const body = {
      id: 2,
      name: dto.name,
      artist: dto.artist,
    };

    tracks.push(body);

    return body;
  }
  update() {
    return tracks[0];
  }
  delete() {
    return tracks[0];
  }
}

const trackService = new Track();

export { trackService };
