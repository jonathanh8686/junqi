import React, {useState, useEffect} from 'react'
import socketService from '../services/socketService';

interface ITitleProps  {

};

export default function TitlePage(props: ITitleProps) {

  const connectSocket = async () => {
    if(!process.env.REACT_APP_SERVER_URL) {
      console.warn("Could not find server url in config");
      return;
    }
    const socket = await socketService.connect(process.env.REACT_APP_SERVER_URL).catch((err) => {
      console.log("Error: ", err);
    });

  }
  useEffect(() => {
    connectSocket();
  }, []);

  return (
    <div>
        <h1>Junqi</h1>
    </div>
  )
}
