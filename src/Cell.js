import React from 'react'
import { partial } from 'underscore'

const Cell = ({ rowIndex, columnIndex, cellValue, onDragOver,onDragStart,onDrop ,bg ,onChange,eqs,gameset}) => {
  
    const renderCell = () => {
        if(cellValue !== 'B' && cellValue === 'O'){
          return <input 
              placeholder='OPERATOR' 
              size='1' 
              // value={eqs[rowIndex][columnIndex]}
              onKeyDown={(event)=>{onChange(rowIndex, columnIndex, event)}} />
        }
        if (cellValue === '=' ) {
            return '='
        }
        if(cellValue === 'B'){
          return ""
        }
        return <input placeholder='OPERAND' size='3' onKeyDown={(event)=>{onChange(rowIndex, columnIndex, event)}}/>


    }
    const renderGame = ()=>{
      if(cellValue!=='B'){
        return cellValue
      }
      return ''
    }
    const renderPlay = () =>{
     if(cellValue==='='){
       return '='
     }
     if(cellValue==='B'||cellValue===NaN){
       return ''
     }
     if(cellValue==='+'||cellValue==='-'||cellValue==='*'||cellValue==='/'||cellValue==='A'){
       return cellValue
     }
     return cellValue
   
   
    }
    return (
      <td id={columnIndex}>
        <div  id={columnIndex} className="cell"   bg={bg} draggable ="true" onDragStart={onDragStart({ row:rowIndex,col:columnIndex })}
          onDragOver={onDragOver({ row: rowIndex,col:columnIndex })}
          onDrop={onDrop({ row: rowIndex,col:columnIndex })}>
          
          
            {
              gameset!=='true'&&gameset!=='play'?renderCell():gameset==='true'?renderGame():renderPlay()
            } 
            
        </div>
      </td>
      
    );
  }

export default Cell;
