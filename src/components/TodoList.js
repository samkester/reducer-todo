import React, { useReducer } from "react";
import styled from "styled-components";
import data from "../data/data";
import todoReducer from "../reducers/todoReducer";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const StyledList = styled.div`
    color: blue; background-color: gold; border: 1px solid blue;
    display: flex; flex-direction: column; align-items: center;
    width: 80%; padding: 5%;
`;

function TodoList() {
    const [state, dispatch] = useReducer(todoReducer, data.initialState);

    function submitForm(formData){
        dispatch({type: "add", data: formData});
    }

    function toggleItem(id){
        dispatch({type: "toggle", data: id});
    }

    function clearAllCompleted(){
        dispatch({type: "remove completed"});
    }

    return (
        <StyledList>
            {state ? 
            state.map(item => <Todo key={item.id} todo={item} onClick={toggleItem} />)
            :
            <p>Please enter a todo item.</p>
            }
            <button onClick={clearAllCompleted}>Clear all completed</button>
            <TodoForm onSubmit={submitForm} />
        </StyledList>
    );
}

export default TodoList;