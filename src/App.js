import React, { useState } from 'react'
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';



const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [update, setUpdate] = useState('')
  const handleModal = ()=>{
    setShowModal( showModal ? false : true)
    console.log(showModal)
    
  }
  return (
    <div>
      <h1 className="title">TODO LIST </h1>
      <hr />
      <TodoEditor handleModal={handleModal} setUpdate={setUpdate} />
      <TodoList update={update}  handleModal={handleModal} showModal={showModal}  setUpdate={setUpdate}  />
      
    </div>
  )
}

export default App
