import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "src/app/errors/AppError";
import { getRepository } from "typeorm";

import { User } from "../../entities/User";

interface IRequest {
  username: string;
  pin: string;
}

interface IResponse {
  user: {
    name: string;
    username: string;
  };
  token: string;
}

class AuthenticateUserUseCase {
  async execute({ username, pin }: IRequest): Promise<IResponse> {
    const repository = getRepository(User);
    const user = await repository.find({ username });

    if (!user) {
      throw new AppError("username or pin incorrect!", 400);
    }

    const pinMatch = await compare(pin, user.pin);
    if (!pinMatch) {
      throw new AppError("username or pin incorrect!", 400);
    }

    const token = sign({}, "5f4dcc3b5aa765d61d8327deb882cf99", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      user: {
        username: user.username,
      },
      token,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
