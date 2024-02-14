import { Todos } from "../types";

export const generateId = (todos: Todos) => {
  if (todos.length === 0) {
    return "1";
  }

  const id: string = todos[todos.length - 1].id;
  return id + 1;
};
