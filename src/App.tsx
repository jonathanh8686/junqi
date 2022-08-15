import React from 'react';
import './App.css';
import styled from "styled-components"
import Title from './components/TitlePage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

function App() {
  return (
    <AppContainer>
      <Title></Title>
    </AppContainer>
  );
}

export default App;
