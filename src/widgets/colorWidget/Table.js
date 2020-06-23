import React from 'react';
import Row from './Row';
class Table extends React.Component {
    constructor(props) {
      super(props);

      this.state = {


      };


    }

    initBoard() {




    }







    componentWillMount() {
    this.forceUpdate();

    }

componentDidMount(){


}




    render() {

      {


      }
      return (
        <div >


          {console.log(this.props)}
        <table id = "mytable">
          {this.props.newboard!=null?this.props.newboard.map((row, i) => (<Row key={i} rowIndex={i} row={row} move={this.props.move} bg={this.props.bg} />)):''}
        </table>

        {console.log(this.state)}
      {/*
 */}


      </div>
      );
    }
  };
export default Table;
