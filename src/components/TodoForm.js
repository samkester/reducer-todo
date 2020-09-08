import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.div`
    color: turquoise; border: 1px blue solid;
    width: 80%; padding: 5%;
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