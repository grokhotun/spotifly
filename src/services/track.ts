class Track {
  get() {
    return 'Track';
  }
  getAll() {
    return 'All track';
  }
  create() {
    return 'Create track';
  }
  update() {
    return 'Updated track';
  }
  delete() {
    return 'Delete track';
  }
}

const trackService = new Track();

export { trackService };
