import { Request, Response } from "express";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, pin } = request.body;

    const token = await AuthenticateUserUseCase.execute({
      username,
      pin,
    });

    return response.status(200).json(token);
  }
}

export { AuthenticateUserController };
