import { 
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  UPDATA_CHECK,
  ADD_TODO_FINISHED
 } from './taskTypes';

const initialState =  {
  listTask:[],
  listTodoFinished: []
}

let lastId = 0
export const taskReducer = (state=initialState, action)=>{
  switch(action.type){
    case ADD_TODO: 
      return{
        ...state,
        listTask: [...state.listTask,{
          title: action.payload.title,
          task: action.payload.task,
          id: ++lastId,
          isCompleted: null
        }]
      }
    case DELETE_TODO: 
      return {
        ...state,
        listTask: state.listTask.filter( task=>task.id !== action.payload)
      }
    case UPDATE_TODO: 
      return{
        ...state,
        listTask: state.listTask.map( task=>task.id == action.payload.id ?
        {
          task: action.payload.task,
          title: action.payload.title,
          id: task.id,
          isCompleted: action.payload.checkTask
          
        } : task)
      }
    case UPDATA_CHECK:
      return{
        ...state,
        listTask: state.listTask.map( task=>task.id == action.payload.id ?
          {
            task: task.task,
            title: task.title,
            id: task.id,
            isCompleted: action.payload.taskCheck
            
          } : task)

      }
      case ADD_TODO_FINISHED: 
        return{
          ...state,
          listTodoFinished: [...state.listTodoFinished,{
            id: action.payload.id,
            title: action.payload.title,
            task: action.payload.task
          }]
        }
    default: 
      return state;
  }
}

