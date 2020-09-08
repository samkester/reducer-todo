import React from "react";
import styled from "styled-components";

const StyledTodo = styled.div`
    color: red; border: 1px purple solid;
    width: 80%; padding: 5%;

    .completed{
        color: green;
    }
`;

function Todo({todo}) {
    return (
        <StyledTodo>
            <p className={todo.completed ? "completed" : ""}>{todo.item}</p>
        </StyledTodo>
    );
}

export default Todo;