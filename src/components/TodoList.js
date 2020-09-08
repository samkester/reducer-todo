import React, { useReducer } from "react";
import styled from "styled-components";
import data from "../data/data";
import todoReducer from "../reducers/todoReducer";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const StyledList = styled.div`
    color: ${props => props.theme.color.main};
    background-color: ${props => props.theme.background.main};
    ${props => props.theme.objectSizing}
    ${props => props.theme.flexContainer}
    ${props => props.theme.roundBorders}

    font-weight: bold;

    .message{
        ${props => props.theme.objectSizing}
        ${props => props.theme.roundBorders}
    }

    .clearButton{
        color: ${props => props.theme.color.form};
        background-color: ${props => props.theme.background.form};
        ${props => props.theme.objectSizing}
        ${props => props.theme.roundBorders}

        font-size: 2.4rem;
    }
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
                state.length > 0 ?
                state.map(item => <Todo key={item.id} todo={item} onClick={toggleItem} />)
                :
                <p className="message">Please enter a todo item.</p>
            :
            <p className="message">Loading, please wait.</p>
            }
            <button className="clearButton" onClick={clearAllCompleted}>Clear all completed</button>
            <TodoForm onSubmit={submitForm} />
        </StyledList>
    );
}

export default TodoList;