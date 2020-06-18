import React from 'react';
import Row from './Row';

class Table extends React.Component {
    constructor(props) {
      super(props);

      this.state = {

         //newboard: [[1,1,17,5,2],[6,'+',1,'+',' ','=',8],['+',' ','+',' ','+'],[2,'+',' ','+',1,'=',20],['+',' ','*',' ','+ '],[' ','+',2,'+',5,'=',9],['=',' ','=',' ','='],[10,' ',36,' ',6]]
      };


    }

    initBoard() {
      //let board = [[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,0]];
     // let newboard: [[1,1,17,5,2],[6,'+',1,'+','1','=',8],['+',' ','+',' ','+'],[2,'+',17,'+',1,'=',20],['+',' ','*',' ','+ '],[2,'+',2,'+',5,'=',9],['=',' ','=',' ','='],[10,' ',36,' ',6]]
     let operators = ['+','+','+','+','+','+','*','+','+','+','+','+'];
     let answers = [8,20,9,10,36,6];
     let numbers = [1,1,1,2,2,2,6,17,5];
     let options =[1,1,17,5,2]
     let preset = numbers - options;



    }







    componentWillMount() {
      this.initBoard();

    }

    componentDidMount(){
      var table = document.getElementById('mytable');
      for (var r = 0, n = table.rows.length; r < n; r++) {
          for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
              
              if(table.rows[r].cells[c].childNodes[0].innerHTML=='NaN'){
                table.rows[r].cells[c].childNodes[0].innerHTML = '';
              }
          }
      }
      
  //     for (var r = 0, n = table.rows.length-2; r < n; r++) {
  //       var random = Math.floor(Math.random()*2)
  //       for (var c = 0, m = table.rows[r].cells.length-2; c < m; c++) {
            
  //         table.rows[r].cells[random].childNodes[0].innerHTML = '';
  //   }

  // }
    }

    render() {

      {


      }
      return (
        <div >

          <table id = "mytable">
        {console.log("asd"+this.props)}
            {Object.keys(this.props.eqs).map((key, i) => (<Row key={key} rowIndex={key}  row={this.props.eqs[key]}
        onChange={this.props.onChange}  eqs={this.props.eqs} gameset={this.props.gameset}
        onDragStart={this.props.onDragStart}
        onDragOver={this.props.onDragOver}
        onDrop={this.props.onDrop}/>))}
          </table>


        </div>
      );
    }
  };
export default Table;
