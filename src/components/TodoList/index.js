import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { deleteTodo,updateTodo,updateCheck,addTodoFinished } from '../../redux';
import ITodo from '../../ITodo';
import TodoFinished from '../TodoFinished';
import {TextField,Button } from '@material-ui/core'

const TodoList = ({showModal,handleModal,setUpdate,update}) => {
  
  const listTask = useSelector( state=>state.listTask)
  const dispatch = useDispatch()
  const data = {
    title: ITodo.title,
    task: ITodo.description,
    isCompleted: null
  }
  const [taskUpdate, setTaskUpdate] = useState(data)
  const [checkCompleted, setCheckCompleted] = useState(null)


  //const [update, setUpdate] = useState('')
  const showInputUpdate  = (id,task,title,isCompleted)=>{
    setUpdate(id)
    data.title = title
    data.task =task
    data.isCompleted = isCompleted
    
    setTaskUpdate(data)
    
  }
 
  const hanldeUpdate = (id)=>{
    
    dispatch(updateTodo(taskUpdate,id))

    setUpdate('')
    setTaskUpdate('')
  }

const handleChange = (e)=>{
 

  setTaskUpdate({...taskUpdate,[e.target.id]:e.target.value })
}
 

const check = (e,id,todo)=>{
  const checkValue = e.target.checked;
  dispatch(updateCheck(id,checkValue))
  dispatch(addTodoFinished(id,todo))







 // setCheckCompleted(e.target.checked)
  //dispatch(updateTodo(taskUpdate,checkCompleted,id))
    

}
const { title,task,isCompleted } = taskUpdate;

 
  const displayTask = listTask.map(todo=>(
    <tr key={todo.id} className={ todo.isCompleted && `backFinished`} >
      <td>
        <input type="checkbox" disabled={todo.isCompleted ? true : false} onChange={(e)=>check(e,todo.id,todo)} checked={isCompleted} />
      </td>

      {
        update == todo.id
        ?
        (

          <>

          <td>


          <TextField 
          label="Title" 
          variant="outlined" 
          id="title"
          type="text" 
          value={title}  
          onChange={handleChange}
          placeholder="Title"
          />



           
          </td>
          <td>
          


        <TextField 
          label="Description" 
          variant="outlined" 
          id="task"
          type='text' 
          value={task}  
          onChange={handleChange}
          placeholder="Description"
          />





          </td>
          </>
        )
        :
        (
          <>
            <td className={ todo.isCompleted && `isCompleted isFinished`}>{todo.title}</td>
          <td className={ todo.isCompleted && `isCompleted isFinished`}>{todo.task}</td>
          </>
        )
      }
      <td>
      {
        update == todo.id
        ? 
        (
        
        
          <Button
          variant="contained"
          color="primary" size="medium"
          type="submit"
          
          onClick={()=>{hanldeUpdate(todo.id)}}       
          >
            Save
          </Button>
 
        )
        :
        (


        <Button
          variant="contained"
          color="primary" size="medium"
          type="submit"
          
          onClick={()=>showInputUpdate(todo.id,todo.task,todo.title,todo.isCompleted)}  
          disabled={todo.isCompleted ? true : false}     
          >
            Update
          </Button>
        )
      }
      </td>
      <td>


      <Button
          variant="contained"
          color="primary" size="medium"
          type="submit"
          
          onClick={()=>dispatch(deleteTodo(todo.id))}
          disabled={todo.isCompleted ? true : false}     
          >
            Delete
          </Button>
      </td>
    </tr>
  ))
  return (
    <div>
      <hr />
      <h3>
        
      </h3>
      <div id='mainTable'>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>TITLE</th>
              <th>TODO</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
          {displayTask}
          </tbody>
        </table>
        
      
      </div>
      { showModal && <TodoFinished handleModal={handleModal} />}
    </div>
  )
}

export default TodoList
