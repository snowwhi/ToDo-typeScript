
import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState ={todos:[{
    id:1,
    Text:'Welcome'
}]}

 export const  TodoSlice = createSlice(
    {
       name: 'todo',
       initialState,
       reducers:{
        addTodo:(state,action)=>{
                const todo ={
                    id:nanoid,
                    Text:action.payload
                }
            
            state.todos.push(todo)

        },
        removeTodo:(state,action)=>{
            state.todos.filter((todo)=>{todo.id !==action.payload

            })
        }
       }
    }
 )
 export const {addTodo,removeTodo} =TodoSlice.actions
 export default TodoSlice.reducer