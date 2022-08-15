import React from 'react';
import './App.css';
import styled from "styled-components"
import TitlePage from './components/TitlePage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

function App() {
  return (
    <AppContainer>
      <TitlePage></TitlePage>
    </AppContainer>
  );
}

export default App;
