import React, { useState } from "react";
import Add from "./Add";
import "./ToDo.css";

const ToDo = () => {
    const [state, setState] = useState({
        todoList: [],
        count: 0
    });

    const onInputChange = (e) => {
        console.log(e.target.value);
        setState({...state, [e.target.id]:e.target.value});
    };
    const addToDo = () => {
        console.log('Add todo clicked..');
        let todoTitle = state.todoTitle;
        console.log(todoTitle)
        if(todoTitle !== '' && typeof todoTitle !== 'undefined'){
            setState({...state, todoList: [...todoList, todoTitle], count: state.count+1});
            state.todoTitle = "";
        }
    }

    const todoList = state.todoList;
    // console.log(todoList);
    return(
        <div>
            <h1>To Do List</h1>
            <div className="todoList">
                {
                    todoList.map((todo, index) => {
                        return (<Add todo={todo} key={index}/>)
                    })
                }
            </div>
            <div className="row">
            
                <input type="text" id="todoTitle" onChange={onInputChange}/>
                <button onClick={addToDo}>Add ToDo {state.count} </button>
                <p>Count: {state.count}</p>

            </div>
        </div>
    );
}
export default ToDo;