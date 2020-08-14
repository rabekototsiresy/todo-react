import { 
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  UPDATA_CHECK,
  ADD_TODO_FINISHED
 } from './taskTypes';

export const addTodo = (todo) =>{
  const { title,description} = todo
  return{
    type: ADD_TODO,
    payload: {
      title: title,
      task: description,
      id: 1
    }
  }
}

export const deleteTodo = id=>{
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const updateTodo = ({title,task},id) =>{

  return{
    type: UPDATE_TODO,
    payload: {
      task: task,
      title: title,
      id: id,
    }
  }
}

export const updateCheck = (id,taskCheck)=>{
  console.log(id,taskCheck)
  return{
    type: UPDATA_CHECK,
    payload: {
      id,
      taskCheck
    }
  }
}

export const addTodoFinished = (id,todo)=>{
  return{
    type: ADD_TODO_FINISHED,
    payload: {
      id: id,
      title: todo.title ,
      task: todo.task
    }
  }
}