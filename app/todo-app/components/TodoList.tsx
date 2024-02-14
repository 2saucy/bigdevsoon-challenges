import clsx from "clsx";
import { useTheme } from "../hooks/useTheme";
import type { Todos } from "../types";
import TodoItem from "./TodoItem";

interface ITodoList {
  todos: Todos;
}

const TodoList: React.FC<ITodoList> = ({ todos }) => {
  return (
    <div className="h-full overflow-y-auto">
      {todos.length > 0 ? (
        <>
          {todos.map((t) => (
            <TodoItem key={t.id} todo={t} />
          ))}
        </>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default TodoList;

const EmptyList = () => {
  const { theme } = useTheme();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 px-8">
      <img className="max-w-[30%]" src="/assets/todo-app/empty.png" />
      <p
        className={clsx(
          "text-center text-xl",
          theme === "dark" ? "text-slate-400" : "text-slate-600",
        )}
      >
        Yeeey! It seems like you have nothing to do.
      </p>
    </div>
  );
};
