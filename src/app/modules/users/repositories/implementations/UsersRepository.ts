import { getRepository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(data: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      data.username
    })
  }
  async findByUsername(username: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
}

export default new UsersRepository();
