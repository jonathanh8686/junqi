import React, {useEffect} from 'react';
import './App.css';
import styled from "styled-components"
import TitlePage from './components/TitlePage';
import socketService from './services/socketService';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

function App() {
  const connectSocket = async () => {
    if(!process.env.REACT_APP_SERVER_URL) {
      console.warn("Could not find server url in config");
      return;
    }
    console.log("attempting connection");
    const socket = await socketService.connect(process.env.REACT_APP_SERVER_URL).catch((err) => {
      console.log("Error: ", err);
    });

  }

  useEffect(() => {
    connectSocket();
  }, []);

  return (
    <AppContainer>
      <TitlePage></TitlePage>
    </AppContainer>
  );
}

export default App;
