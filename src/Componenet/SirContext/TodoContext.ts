import { createContext, useContext } from "react";

export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, "id">) => void;
  updateTodo: (id: number, todo: Todo) => void;
  deleteTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodo must be used within a TodoProvider");
  return context;
};