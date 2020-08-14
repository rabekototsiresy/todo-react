import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Spec } from "./Spec";

export default function App() {
    return (
        <div>
            <CssBaseline />
            <div style={{ margin: "2rem", textAlign: "justify" }}>
                <h1>Test ReactJS</h1>
                <Spec />
            </div>
        </div>
    );
}


const todoUpadated = todos.map((todo,index)=>( index == indexU ? { title: task.title,description: task.description} : todo ))
        setTodos(todoUpadated)