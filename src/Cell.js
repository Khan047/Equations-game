import React from 'react'


const Cell = ({ rowIndex, columnIndex, cellValue, onDragOver,onDragStart,onDrop ,bg ,onChange,eqs,gameset}) => {
  
    const renderCell = () => {
        if(cellValue !== 'B' && cellValue === 'O'){
          return <input 
              placeholder='OPERATOR' 
              size='1' 
              
              // value={eqs[rowIndex][columnIndex]}
              onChange={(event)=>{ 

                if(event.target.value.match(/[+*\/-]/g)){
                     onChange(rowIndex, columnIndex, event)
                    }
                    else{
                      alert('Not a Valid Operator')
                    }
                    
                    
                    }} />
        }
        if (cellValue === '=' ) {
            return '='
        }
        if(cellValue === 'B'){
          return ""
        }
        return <input placeholder='OPERAND' size='1' onChange={(event)=>{
          if(event.target.value.match(/[0-9]/g)){
          onChange(rowIndex, columnIndex, event)
        }
        else{
          alert('Not a Valid Operand')
        }
        }}/>


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
     if(cellValue==='CHECKFALSE'||cellValue==='NA'){
      return ''
     }
     if(cellValue==='CheckboxTrue'){
       return <i className='tick'>✔</i>
     }
     return cellValue
    
   
    }
    const setDrag=(c)=>{
      console.log("inside set drag",c)
        if(!c.match(/[+*\/-]/g)){
            return "true"
        }
        else{
          return "false"
        }
  
    }
    return (
      <tr row={index}>
        <td>
        <cell />
        </td>
        <td>
          +
        </td>
        <td>
          2
        </td>
        <td>
         =
        </td>
        <td>
          3
        </td>
        <td>
          isCorrect ? <isChecked/> : <isNotChecked/>
        </td>
      </tr>
      // <td id={columnIndex}>
      //   <div  id={columnIndex} className="cell"   bg={bg} draggable ={setDrag(cellValue)} onDragStart={
      //     onDragStart!==null?onDragStart({ row:rowIndex,col:columnIndex }):null}
      //     onDragOver={ onDragOver!==null?onDragOver({ row: rowIndex,col:columnIndex }):null}
      //     onDrop={onDrop!==null?onDrop({ row: rowIndex,col:columnIndex }):null}>
          
          
      //       {
      //         gameset!=='true'&&gameset!=='play'?renderCell():gameset==='true'?renderGame():renderPlay()
      //       } 
            
      //   </div>
      // </td>
      
    );
  }

export default Cell;
