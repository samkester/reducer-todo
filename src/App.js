import React from 'react';
import styled from "styled-components";
import TodoList from "./components/TodoList";

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: blanchedalmond;

  display: flex; justify-content: center;
`;

function App() {
  return (
    <StyledApp>
      <TodoList />
    </StyledApp>
  );
}

export default App;
