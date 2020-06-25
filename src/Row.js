import React from 'react'
import Cell from './Cell'
const Row = ({ row,rowIndex,onDragStart,onDragOver,onDrop,onChange,eqs,gameset}) => {
  {console.log(row)}
    return (
      <tr id = {rowIndex} onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
>
        { row.map((cell, i) => <Cell key={i} CellIndex={i} rowIndex={rowIndex} columnIndex={i} cellValue={cell} onChange={onChange} eqs={eqs} gameset={gameset}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        />) }
      </tr>
      
    );
  };

export default Row;
