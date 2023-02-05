class User {
  get() {
    return 'user';
  }
  getAll() {
    return 'All user';
  }
  create() {
    return 'Create user';
  }
  update() {
    return 'Updated user';
  }
  delete() {
    return 'Delete user';
  }
}

const userService = new User();

export { userService };
