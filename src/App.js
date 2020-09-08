import React from 'react';
import styled from "styled-components";
import TodoList from "./components/TodoList";

const StyledApp = styled.div`
  ${props => props.theme.containerSizing}
  ${props => props.theme.flexContainer}
  background-color: ${props => props.theme.background.container};
`;

function App() {
  return (
    <StyledApp>
      <TodoList />
    </StyledApp>
  );
}

export default App;
