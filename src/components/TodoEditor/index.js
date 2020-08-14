import React,{useState} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../redux'
import ITodo from '../../ITodo';
import {TextField,Button} from '@material-ui/core'

const TodoEditor = (props) => {
  const data = {
    title: ITodo.title,
    description: ITodo.description
  }
  const {listTask,addTodo} = props;
  const [todo, setTodo] = useState(data)
  const handleChange = e=>{
    setTodo({...todo,[e.target.id]: e.target.value})
  }

  const handleSubmit = (e)=>{

    const { title,description } = todo
    e.preventDefault();
    if(title && description){
      addTodo(todo);
      props.setUpdate(null)
    }else{
      alert("champ vide")
    }
    
     setTodo(data);
  }
  const { title,description } = todo
  return (
    <div>


        <span>
        <TextField 
          label="Title" 
          variant="outlined" 
          value="Title"
          id="title"
          type="text" 
          value={title || ''} 
          onChange={handleChange}
          />
        </span>

        <span>
        <TextField 
          label="Description" 
          variant="outlined" 
          id="description"
          type="text" 
          value={description || ''} 
          placeholder="Qu'est ce que vous voulez faire ? " 
          onChange={handleChange}
          />
        </span>

        <Button
          variant="contained"
          color="primary" size="medium"
          style={{ "marginTop": "5px" }}
          type="submit"
          
          id="bAdd"
        
          onClick={handleSubmit}
          >
            Enregistrer
          </Button>
     
      



      

          <Button
          variant="contained"
          color="primary" size="medium"
          style={{ "marginTop": "5px" }}
          type="submit"
          className="end" 
          onClick={props.handleModal}
          
        
          >
            Listes des taches términés
          </Button>
     
     
      
    </div>
  )
}

const mapStateToProps = state=>{
  return{
    listTask: state.listTask
  }
}
const mapDispatchToProps = dispatch=>{
  return{
    addTodo: (todo)=>dispatch(addTodo(todo))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoEditor)
