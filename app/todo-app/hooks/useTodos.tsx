"use client";
import { createContext, useContext, useState } from "react";
import type { Todo, Todos } from "../types";
import { generateId } from "../utils/utils";

interface ITodoContext {
  todos: Todos;
  addTodo: (value: string) => void;
  removeTodo: (todo: Todo) => void;
  editTodo: (todo: Todo, newTitle: string) => void;
  changeCompletion: (todo: Todo) => void;
}

const TodoContext = createContext<ITodoContext | undefined>(undefined);

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }

  return context;
};

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todos>([]);

  const addTodo = (value: string) => {
    if (!value || value.trim() === "") {
      return;
    }

    const newTodo = {
      title: value,
      completed: false,
      id: generateId(todos),
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todo: Todo) => {
    setTodos(todos.filter((t) => t !== todo));
  };

  const editTodo = (todo: Todo, newTitle: string) => {
    const newTodo = { ...todo, title: newTitle };

    setTodos(todos.map((t) => (t === todo ? newTodo : t)));
  };

  const changeCompletion = (todo: Todo) => {
    const newTodos = todos.map((t) =>
      t === todo ? { ...t, completed: !t.completed } : t,
    );
    setTodos(newTodos);
  };

  const value = {
    todos,
    addTodo,
    removeTodo,
    editTodo,
    changeCompletion,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
