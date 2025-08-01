import { createContext,useContext } from "react";
export const TodoContext = createContext({
  todo:[{
    id:1,
    title:"Sample Todo",
    completed:false
  },
  {
    id:2,
    title:"Sample Todo 2",
    completed:true
  }],
  
  addTodo:(todo)=>{},
  updateTodo:(id,todo)=>{},
  deleteTodo:(id)=>{},
  toggleComplete:(id)=>{},
});
export const useTodo=()=>{
  return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider;