import { Request, Response } from "express";

import FindUserUseCase from "./FindUserUseCase";

class FindUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const user = await FindUserUseCase.execute({ id });

    return response.status(201).json({ user });
  }
}

export default new FindUserController();
