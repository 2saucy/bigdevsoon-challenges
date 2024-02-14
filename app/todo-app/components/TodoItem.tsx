"use client";
import { KeyboardEvent, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";
import { clsx } from "clsx";
import type { Todo } from "../types";
import { useTodo } from "../hooks/useTodos";
import { useTheme } from "../hooks/useTheme";

interface ITodoItem {
  todo: Todo;
}

const TodoItem: React.FC<ITodoItem> = ({ todo }) => {
  const { removeTodo, editTodo, changeCompletion } = useTodo();
  const { theme } = useTheme();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const { title } = todo;

  const checkStyles =
    (!isChecked && theme === "dark") || (isChecked && theme === "light")
      ? "border-slate-400 text-slate-400"
      : "border-slate-600 text-slate-600";

  const handleCheck = () => {
    setIsChecked(!isChecked);
    changeCompletion(todo);
  };

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      const newTitle = e.currentTarget.value;
      editTodo(todo, newTitle);
    }
  };

  return (
    <div
      className={clsx(
        "mt-4 flex w-full items-center justify-between gap-4 rounded-lg border-2 p-2",
        checkStyles,
      )}
    >
      <CheckButton isChecked={isChecked} handleCheck={handleCheck} />
      {isEditing ? (
        <input
          className="w-full bg-transparent text-slate-400 outline-none"
          type="text"
          autoFocus
          defaultValue={title}
          onKeyDown={handleKeydown}
        />
      ) : (
        <p className={clsx("w-full truncate", isChecked && "line-through")}>
          {title}
        </p>
      )}
      <ButtonContainer
        setIsEditing={setIsEditing}
        isEditing={isEditing}
        removeTodo={removeTodo}
        todo={todo}
      />
    </div>
  );
};

export default TodoItem;

interface ICheckButton {
  isChecked: boolean;
  handleCheck: () => void;
}

const CheckButton: React.FC<ICheckButton> = ({ isChecked, handleCheck }) => {
  const { theme } = useTheme();

  return (
    <button onClick={handleCheck}>
      {isChecked ? (
        <ImCheckboxChecked
          className={clsx(
            theme === "dark" ? "text-slate-600" : "text-slate-400",
          )}
        />
      ) : (
        <ImCheckboxUnchecked
          className={clsx(
            theme === "dark" ? "text-slate-400" : "text-slate-600",
          )}
        />
      )}
    </button>
  );
};

interface IButtonContainer {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
  removeTodo: (todo: Todo) => void;
  todo: Todo;
}

const ButtonContainer: React.FC<IButtonContainer> = ({
  setIsEditing,
  isEditing,
  removeTodo,
  todo,
}) => {
  return (
    <div className="flex items-center gap-4">
      <button onClick={() => setIsEditing(true)}>
        <FaEdit
          className={clsx(
            "duration-100 ease-in-out hover:scale-125",
            isEditing && "animate-pulse",
          )}
        />
      </button>
      {isEditing ? (
        <button onClick={() => setIsEditing(false)}>
          <IoCloseSharp className="duration-100 ease-in-out hover:scale-125" />
        </button>
      ) : (
        <button onClick={() => removeTodo(todo)}>
          <FaTrash className="duration-100 ease-in-out hover:scale-125" />
        </button>
      )}
    </div>
  );
};
