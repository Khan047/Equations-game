import React from 'react'
import Cell from './Cell'
const Row = ({ row,rowIndex,move,bg}) => {
  console.log(bg);
    return (
      <tr
>
        { row.map((cell, i) => <Cell key={i} rowIndex={rowIndex} columnIndex={i} cellValue={cell}  move={move} bg={bg[rowIndex][i]} />) }

      </tr>

    );
  };

export default Row;
