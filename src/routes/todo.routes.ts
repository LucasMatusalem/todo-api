import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
// import controllers

const todoRoutes = Router();

interface ITodos {
  name: string;
  done: boolean;
  id: string;
}

let todos: ITodos[] = [];

todoRoutes.post("/", (request, response) => {
  const { name } = request.body;

  if (!name) {
    return response
      .status(400)
      .json({ error: "You need to choose a name for your todo!" });
  }

  const todo: ITodos = {
    name,
    done: false,
    id: uuidV4(),
  };

  todos.push(todo);

  return response.status(201).json(todo);
});

todoRoutes.get("/", (request, response) => {
  response.status(200).json(todos);
});

todoRoutes.delete("/", (request, response) => {
  todos = todos.filter((todo) => todo.done === false);

  return response.status(200).json({ message: "Done todos deleted" });
});

todoRoutes.get("/:id", (request, response) => {
  const { id } = request.params;
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return response.status(400).json({ error: "Todo doesn't exists!" });
  }

  return response.status(200).json(todo);
});

todoRoutes.patch("/:id", (request, response) => {
  const { id } = request.params;
  const todo = todos.find((todo) => todo.id === id);
  const { body } = request;

  if (!todo) {
    return response.status(400).json({
      error: "Todo doesn't exists!",
    });
  }

  Object.keys(body)
    .filter((key) => key in todo)
    .forEach((key) => {
      todo[key] = body[key];
    });

  return response.status(200).json(todo);
});

todoRoutes.delete("/:id", (request, response) => {
  const { id } = request.params;
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return response.status(400).json({ error: "Todo doesn't exists!" });
  }
  todos.splice(todoIndex, 1);

  return response.status(200).json({ message: "todo deleted!" });
});

export { todoRoutes };
