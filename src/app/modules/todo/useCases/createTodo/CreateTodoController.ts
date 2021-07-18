import { Request, Response } from "express";

import CreateTodoUseCase from "./CreateTodoUseCase";

class CreateTodoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const { title } = request.body;

    const todo = CreateTodoUseCase.execute({ user_id, title });
    return response.status(200).json(todo);
  }
}

export default new CreateTodoController();
