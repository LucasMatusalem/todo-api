import { AppError } from "src/app/errors/AppError";
import { getRepository } from "typeorm";

import { User } from "../../entities/User";

class FindUserUseCase {
  async execute({ id }): Promise<User> {
    const repository = getRepository(User);

    const user = await repository.findOne(id);

    if (!user) {
      throw new AppError("User doesn't exists!", 400);
    }

    return user;
  }
}

export default new FindUserUseCase();
