import { AppError } from "src/app/errors/AppError";
import { getRepository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";

class CreateUserUseCase {
  async execute({ username, pin }: ICreateUserDTO): Promise<User> {
    const repository = getRepository(User);

    const userAlreadyExists = await repository.findOne({ username });

    console.log(userAlreadyExists);
    if (userAlreadyExists) {
      throw new AppError("User already exists!", 409);
    }

    const user = repository.create({ username, pin });

    await repository.save(user);

    return user;
  }
}

export default new CreateUserUseCase();
