import { Repository } from 'typeorm';

export class BaseService<T> {
  readonly repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }
}
