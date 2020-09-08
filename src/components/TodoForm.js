import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.div`
    ${props => props.theme.objectSizing}
    ${props => props.theme.roundBorders}
    ${props => props.theme.flexContainer}

    font-weight: bold;
    font-size: 2.4rem;

    form{
        display: flex;
        width: 100%;
    }

    label{
        display: flex;
        width: 100%; flex-shrink: 1;
        color: ${props => props.theme.color.form};
    }

    input{
        font-size: 1.6rem;
        color: ${props => props.theme.color.form};
        background-color: ${props => props.theme.background.form};
        border: 1px dashed currentColor;
        border-bottom-style: solid;

        width: 100%; flex-shrink: 1;
        margin: 0% 5%;
        padding-left: 1%;
    }

    button{
        font-size: 1em;
        color: ${props => props.theme.color.form};
        background-color: ${props => props.theme.background.form};

        padding: 0 1.5em;
        ${props => props.theme.roundBorders}
    }
`;

function TodoForm({onSubmit}) {
    const [formState, setFormState] = useState({item: ""})

    const updateForm = event => {
        setFormState({...formState, [event.target.name]: event.target.value})
    };

    const submitForm = event => {
        event.preventDefault();
        onSubmit(formState);
        setFormState({item: ""});
    };

    return (
        <StyledForm>
            <form>
                <label>Todo:
                    <input type="text" name="item" value={formState.item} onChange={updateForm} />
                </label>
                <button onClick = {submitForm}>Add</button>
            </form>
        </StyledForm>
    );
}

export default TodoForm;