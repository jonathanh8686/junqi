import React from 'react'

import "./Board.css";

const horizontalAxis = ["a", "b", "c", "d", "e"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];


export default function Board() {
  let board = [];
  let campsites = ["b3", "d3", "b5", "d5", "b8", "d8", "b10", "d10"];
  let headquarters = ["b1", "d1", "b12", "d12"];

  for(let i = 0; i < verticalAxis.length; i++) {
    for(let j = 0; j < horizontalAxis.length; j++) {
      if(campsites.includes(horizontalAxis[j] + verticalAxis[i])) {
        board.push(<div className = "campsite">{horizontalAxis[j]}{verticalAxis[i]}</div>)
      }
      else if(headquarters.includes(horizontalAxis[j] + verticalAxis[i])) {
        board.push(<div className = "hq">{horizontalAxis[j]}{verticalAxis[i]}</div>)
      }
      else {
        board.push(<div className = "tile">[{horizontalAxis[j]}{verticalAxis[i]}]</div>)
      }
      
    }
  }
  return (
    <div id = "board">{board}</div>
  )
}
