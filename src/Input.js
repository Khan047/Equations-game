import React, { Component } from 'react'

export class Input extends Component {
    render() {
        return (
            <div style={{
                
                color: 'white'
              }}>
                    Enter a Sample Eq   <input id= 'eqs' type='text' onKeyDown={(event)=>this.props.onChange(event)}></input>
                    enter no of eqs<input id = 'rows'></input>
                  cols <input id = 'cols'></input>
            </div>
        )
    }
}

export default Input
