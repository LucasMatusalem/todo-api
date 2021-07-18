import { ICreateTodoDTO } from "../../dtos/ICreateTodoDTO";
import { Todo } from "../../entities/Todo";

class CreateTodoUseCase {
  async execute({ user_id, title }: ICreateTodoDTO): Promise<Todo> {
    return new Todo();
  }
}

export default new CreateTodoUseCase();
