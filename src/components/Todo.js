import React from "react";
import styled from "styled-components";

const StyledTodo = styled.div`
    ${props => props.theme.objectSizing}
    ${props => props.theme.roundBorders}
    ${props => props.theme.flexContainer}
    color: ${props => props.theme.color.item};
    background-color: ${props => props.theme.background.item};


    &.completed{
        color: ${props => props.theme.color.itemCompleted};
        background-color: ${props => props.theme.background.itemCompleted};

        font-weight: normal;
    }
`;

function Todo({todo, onClick}) {
    function clickHandler(){
        onClick(todo.id);
    };

    return (
        <StyledTodo onClick={clickHandler} className={todo.completed ? "completed" : ""}>
            <p>{todo.item}</p>
        </StyledTodo>
    );
}

export default Todo;