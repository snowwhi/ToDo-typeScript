import { createSlice, nanoid } from "@reduxjs/toolkit";

export interface Todo {
    id: string;
    text: string;
}

interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [{ id: '1', text: 'Welcome' }]
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo: Todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = TodoSlice.actions
export default TodoSlice.reducer