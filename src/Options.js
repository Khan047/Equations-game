import React from 'react'

const Options = ({ ops,onDragStart,onDragOver,onDrop}) => {
  
    return (
        <div style={{display:'flex',height:45}} className='Foptions' id='-1'>
            {ops.map((key,i)=>{
                return <div  id={i} className='fchild'   draggable ='true' onDragStart={
                    onDragStart!==null?onDragStart({ row:-1,col:i }):null}
                    onDragOver={ onDragOver!==null?onDragOver({ row: -1,col:i }):null}
                    onDrop={onDrop!==null?onDrop({ row: -1,col:i }):null}>
                    
                    
                      {ops[i]}
                      
                  </div>
            })}
        </div>
    )
}

export default Options
