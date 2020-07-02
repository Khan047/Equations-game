import React, { Component } from 'react'

export class Input extends Component {
  
    render() {
        return (
        // <div style={{display:'flex',height:40,}}> 
        <div style={{
            "display": "flex",
            "flexDirection": "column",
            "width": "50%",
            "padding": "10px",
            
          }}> 
        No of Eq<input size='30' id = 'rows' onChange={this.props.onChange}/> 
        Sample Eq<input size='30' id= 'eqs' type='text'  />
        <button className="myButton"type="primary"onClick={this.props.onClick}>START</button>
         </div> 
        )
    }
}

export default Input
