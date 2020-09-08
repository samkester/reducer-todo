import React, { useReducer } from "react";
import styled from "styled-components";
import data from "../data/data";
import todoReducer from "../reducers/todoReducer";
import Todo from "./Todo";

const StyledList = styled.div`
    color: blue; background-color: gold; border: 1px solid blue;
    display: flex; flex-direction: column; align-items: center;
    width: 80%; padding: 5%;
`;

function TodoList() {
    const [state, dispatch] = useReducer(todoReducer, data.initialState);

    return (
        <StyledList>
            {state ? 
            state.map(item => <Todo key={item.id} todo={item} />)
            :
            <p>Please enter a todo item.</p>
            }
        </StyledList>
    );
}

export default TodoList;