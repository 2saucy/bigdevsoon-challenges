"use client";
import clsx from "clsx";
import { KeyboardEvent, useState } from "react";
import { MdCreate } from "react-icons/md";
import TodoList from "./components/TodoList";
import { useTodo } from "./hooks/useTodos";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";

const Page = () => {
  const { todos, addTodo } = useTodo();
  const { theme } = useTheme();

  const completedTodos = todos.filter((t) => t.completed);
  const invertedTodos = todos.slice().reverse();

  return (
    <main
      className={clsx(
        "relative h-screen antialiased",
        theme === "dark" ? "bg-slate-900" : "bg-slate-200",
      )}
    >
      <Header />
      <div
        className={clsx(
          "absolute left-1/2 top-[55%] flex h-[75vh] w-[40vw] -translate-x-1/2 -translate-y-1/2 flex-col justify-between gap-2 rounded-lg p-2 shadow-lg shadow-slate-400/15",
          theme === "dark" ? "bg-slate-800" : "bg-slate-100",
        )}
      >
        <InputContainer addTodo={addTodo} />
        <TodoList todos={invertedTodos} />
        <div className="self-end font-mono text-xs font-thin text-slate-500">
          {`${completedTodos.length}/${todos.length} to-dos completed 👻`}
        </div>
      </div>
    </main>
  );
};

export default Page;

const InputContainer = ({ addTodo }: { addTodo: (value: string) => void }) => {
  const [value, setValue] = useState<string>("");
  const { theme } = useTheme();

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <div
      className={clsx(
        "flex items-center justify-between rounded-lg border-2 p-2",
        theme === "dark"
          ? "border-slate-400 text-slate-400"
          : "border-slate-600 text-slate-600",
      )}
    >
      <input
        className={clsx(
          "w-full bg-transparent px-2 outline-none",
          theme === "dark" ? "text-slate-400" : "text-slate-600",
        )}
        type="text"
        placeholder="What you have to do?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeydown}
      />
      <MdCreate className="h-6 w-6" />
    </div>
  );
};
