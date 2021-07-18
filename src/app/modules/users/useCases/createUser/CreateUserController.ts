import { Request, Response } from "express";

import CreateUserUseCase from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, pin } = request.body;

    const user = await CreateUserUseCase.execute({ username, pin });

    return response.status(201).json({ user });
  }
}

export default new CreateUserController();
