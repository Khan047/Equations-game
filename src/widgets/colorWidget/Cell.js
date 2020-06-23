import React from 'react'

const Cell = ({ rowIndex, columnIndex, cellValue, move ,bg }) => {

   const value = (cellValue > 0) ? cellValue : null;
const a = bg;

    return (
        <td id={columnIndex}>
        <div  bg={bg} className="cell" onClick={(event) => {move(rowIndex, columnIndex, cellValue, event); }  }move={move}  style={{backgroundImage: value == null ? "url('https://www.porcelaingres.com/img/collezioni/URBAN-GREAT/big/urban_great_white.jpg')": "url("+`${a}`+")"}} >
          {/* <img height='50px' width='50px' src = 'https://i.picsum.photos/id/911/200/300.jpg'></img> */}

        </div>
      </td>
    );

  }

export default Cell;
