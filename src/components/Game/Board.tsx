import React from 'react'

import "./Board.css";
import Tile from './Tile';

const horizontalAxis = [0, 1, 2, 3, 4];
const verticalAxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


// interface BoardProps {
//   tiles: any
// }

export default function Board(/*{tiles} : BoardProps*/) {
  let board = [];

  for(let i = 0; i < verticalAxis.length; i++) {
    for(let j = 0; j < horizontalAxis.length; j++) {
        // tiles.forEach((p: any) =>  {
        //   if(p.position === [j, i]) {
        //     board.push(<Tile piece = {p.rank + p.side} x = {j} y = {i} />);
        //   }
        // })
        board.push(<Tile piece = {"piece"} x = {j} y = {i} />);
      }
  }
  return (
    <div id = "board">{board}</div>
  )
}
