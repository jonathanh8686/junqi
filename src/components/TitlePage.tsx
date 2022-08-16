import React, {useState, useEffect} from 'react'
import socketService from '../services/socketService';
import styled from 'styled-components'

const Title = styled.div`
  font-size: 2em;
`;

interface ITitleProps  {

};

export default function TitlePage(props: ITitleProps) {

  return (
    <div>
      <Title>Junqi</Title>
    </div>
  )
}
