import express from "express";
import { Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";

const app = express();

app.use(express.json());

interface ITodos {
  name: string,
  done: boolean,
  id: string,
}

var todos: ITodos[] = [];


app.post("/todo", (request: Request, response: Response) => {
  const { name } = request.body;

  if (!name) {
    return response.status(400).json({error: "You need to choose a name for your todo!"})
  }

  const todo: ITodos = {
    name,
    done: false,
    id: uuidV4(),
  }

  todos.push(todo);

  return response.status(201).json(todo);
})

app.get("/todo", (request: Request, response: Response) => {
  return response.status(200).json(todos);
})

app.get("/todo/:id", (request: Request, response: Response) => {
  const { id } = request.params;
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return response.status(400).json({error: "Todo doesn't exists!"})
  }

  return response.status(200).json(todo);
})

app.patch("/todo/:id", (request: Request, response: Response) => {
  const { id } = request.params;
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return response.status(400).json({error: "Todo doesn't exists!"})
  }
  todo.done = true;
  return response.status(200).json(todo);
})

app.delete("/todo", (request: Request, response: Response) => {
  todos = todos.filter((todo) => todo.done === false);

  return response.status(200).json({message: "Done todos deleted"});
})

app.delete("/todo/:id", (request: Request, response: Response) => {
  const { id } = request.params;
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return response.status(400).json({error: "Todo doesn't exists!"})
  }
  todos.splice(todoIndex, 1);

  return response.status(200).json();
})

export { app };
