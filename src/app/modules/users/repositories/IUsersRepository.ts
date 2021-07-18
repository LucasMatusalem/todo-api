import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create({ username, pin }: ICreateUserDTO): Promise<User>;
  findByUsername(username: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository };
