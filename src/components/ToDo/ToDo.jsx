import React, { useState } from "react";

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

        setState({...state, todoList: [...todoList, todoTitle], count: state.count+1});
        state.todoTitle = "";
    }

    const todoList = state.todoList;
    // console.log(todoList);
    return(
        <div>
            <h1>To Do List</h1>
            <div className="row">
                
            </div>
            {
                todoList.map((todo, index) => {
                    return (<p key={index}>{todo}</p>)
                })
            }
            <input type="text" id="todoTitle" onChange={onInputChange}/>
            <button onClick={addToDo}>Add ToDo </button>
            <p>Count: {state.count}</p>
        </div>
    );
}
export default ToDo;