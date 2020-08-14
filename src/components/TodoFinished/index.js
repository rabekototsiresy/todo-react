import React from 'react'
import { useSelector } from 'react-redux'

const TodoFinished = ({handleModal}) => {
    const listTaskFinished = useSelector( state=>state.listTodoFinished)

    const displayTodoFinished = listTaskFinished.length == 0 ? (
        <tr>
            <td colSpan="3">Yl n'y a pas de taches terminés </td>
        </tr>
    ) : (
        listTaskFinished && listTaskFinished.map((todo,index)=>(
            <tr key={index}>
                <td>{todo.id}</td>
                <td>{todo.title} </td>
                <td>{todo.task}</td>
            </tr>
        ))
    )


    return (
        <div className="contentTodoFInished" onClick={handleModal}>
            <div className="contentTaskEnd">
                <h1>finished</h1>
                <hr />
                <div>
                    <table>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Todo</th>
                            </tr>
                        </thead>
                        <tbody>
                                {displayTodoFinished}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TodoFinished
