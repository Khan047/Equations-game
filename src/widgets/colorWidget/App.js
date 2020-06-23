import React from 'react';
import Table from './Table';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board:null,

     

      rownos:null,
      imglist:null,
      default:false,
      imgarr:[
  {
    "id": "0",
    "author": "Alejandro Escamilla",
    "width": 100,
    "height": 100,
    "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
    "download_url": "https://picsum.photos/id/0/100/100"
  },
  {
    "id": "1",
    "author": "Alejandro Escamilla",
    "width": 5616,
    "height": 3744,
    "url": "https://unsplash.com/photos/LNRyGwIJr5c",
    "download_url": "https://picsum.photos/id/1/100/100"
  },
  {
    "id": "2",
    "author": "Paul Jarvis",
    "width": 2500,
    "height": 1667,
    "url": "https://unsplash.com/photos/6J--NXulQCs",
    "download_url": "https://picsum.photos/id/10/100/100"
  },
  {
    "id": "3",
    "author": "Tina Rataj",
    "width": 2500,
    "height": 1656,
    "url": "https://unsplash.com/photos/pwaaqfoMibI",
    "download_url": "https://picsum.photos/id/100/100/100"
  },
  {
    "id": "4",
    "author": "Lukas Budimaier",
    "width": 5626,
    "height": 3635,
    "url": "https://unsplash.com/photos/6cY-FvMlmkQ",
    "download_url": "https://picsum.photos/id/1000/100/100"
  },
  {
    "id": "5",
    "author": "Danielle MacInnes",
    "width": 5616,
    "height": 3744,
    "url": "https://unsplash.com/photos/1DkWWN1dr-s",
    "download_url": "https://picsum.photos/id/1001/100/100"
  },
  {
    "id": "6",
    "author": "NASA",
    "width": 4312,
    "height": 2868,
    "url": "https://unsplash.com/photos/6-jTZysYY_U",
    "download_url": "https://picsum.photos/id/1002/100/100"
  },
  {
    "id": "7",
    "author": "E+N Photographies",
    "width": 1181,
    "height": 1772,
    "url": "https://unsplash.com/photos/GYumuBnTqKc",
    "download_url": "https://picsum.photos/id/1003/100/100"
  },
  {
    "id": "8",
    "author": "Greg Rakozy",
    "width": 5616,
    "height": 3744,
    "url": "https://unsplash.com/photos/SSxIGsySh8o",
    "download_url": "https://picsum.photos/id/1004/100/100"
  },
  {
    "id": "9",
    "author": "Matthew Wiebe",
    "width": 5760,
    "height": 3840,
    "url": "https://unsplash.com/photos/tBtuxtLvAZs",
    "download_url": "https://picsum.photos/id/1005/100/100"
  },
  {
    "id": "10",
    "author": "Vladimir Kudinov",
    "width": 3000,
    "height": 2000,
    "url": "https://unsplash.com/photos/-wWRHIUklxM",
    "download_url": "https://picsum.photos/id/1006/100/100"
  },
  {
    "id": "11",
    "author": "Benjamin Combs",
    "width": 5616,
    "height": 3744,
    "url": "https://unsplash.com/photos/5L4XAgMSno0",
    "download_url": "https://picsum.photos/id/1008/100/100"
  },
  {
    "id": "12",
    "author": "Christopher Campbell",
    "width": 5000,
    "height": 7502,
    "url": "https://unsplash.com/photos/CMWRIzyMKZk",
    "download_url": "https://picsum.photos/id/1009/100/100"
  },
  {
    "id": "13",
    "author": "Christian Bardenhorst",
    "width": 2621,
    "height": 1747,
    "url": "https://unsplash.com/photos/8lMhzUjD1Wk",
    "download_url": "https://picsum.photos/id/101/100/100"
  },
  {
    "id": "14",
    "author": "Samantha Sophia",
    "width": 5184,
    "height": 3456,
    "url": "https://unsplash.com/photos/NaWKMlp3tVs",
    "download_url": "https://picsum.photos/id/1010/100/100"
  },
  {
    "id": "15",
    "author": "Roberto Nickson",
    "width": 5472,
    "height": 3648,
    "url": "https://unsplash.com/photos/7BjmDICVloE",
    "download_url": "https://picsum.photos/id/1011/100/100"
  },
  {
    "id": "16",
    "author": "Scott Webb",
    "width": 3973,
    "height": 2639,
    "url": "https://unsplash.com/photos/uAgLGG1WBd4",
    "download_url": "https://picsum.photos/id/1012/100/100"
  },
  {
    "id": "1013",
    "author": "Cayton Heath",
    "width": 4256,
    "height": 2832,
    "url": "https://unsplash.com/photos/D8LcRLwZyPs",
    "download_url": "https://picsum.photos/id/1013/4256/2832"
  },
  {
    "id": "1014",
    "author": "Oscar Keys",
    "width": 6016,
    "height": 4000,
    "url": "https://unsplash.com/photos/AmPRUnRb6N0",
    "download_url": "https://picsum.photos/id/1014/6016/4000"
  },
  {
    "id": "1015",
    "author": "Alexey Topolyanskiy",
    "width": 6000,
    "height": 4000,
    "url": "https://unsplash.com/photos/-oWyJoSqBRM",
    "download_url": "https://picsum.photos/id/1015/6000/4000"
  },
  {
    "id": "1016",
    "author": "Philippe Wuyts",
    "width": 3844,
    "height": 2563,
    "url": "https://unsplash.com/photos/_h7aBovKia4",
    "download_url": "https://picsum.photos/id/1016/3844/2563"
  },
  {
    "id": "1018",
    "author": "Andrew Ridley",
    "width": 3914,
    "height": 2935,
    "url": "https://unsplash.com/photos/Kt5hRENuotI",
    "download_url": "https://picsum.photos/id/1018/3914/2935"
  },
  {
    "id": "1019",
    "author": "Patrick Fore",
    "width": 5472,
    "height": 3648,
    "url": "https://unsplash.com/photos/V6s1cmE39XM",
    "download_url": "https://picsum.photos/id/1019/5472/3648"
  },
  {
    "id": "102",
    "author": "Ben Moore",
    "width": 4320,
    "height": 3240,
    "url": "https://unsplash.com/photos/pJILiyPdrXI",
    "download_url": "https://picsum.photos/id/102/4320/3240"
  },
  {
    "id": "1020",
    "author": "Adam Willoughby-Knox",
    "width": 4288,
    "height": 2848,
    "url": "https://unsplash.com/photos/_snqARKTgoc",
    "download_url": "https://picsum.photos/id/1020/4288/2848"
  },
  {
    "id": "1021",
    "author": "Frances Gunn",
    "width": 2048,
    "height": 1206,
    "url": "https://unsplash.com/photos/8BmNurlVR6M",
    "download_url": "https://picsum.photos/id/1021/2048/1206"
  },
  {
    "id": "1022",
    "author": "Vashishtha Jogi",
    "width": 6000,
    "height": 3376,
    "url": "https://unsplash.com/photos/bClr95glx6k",
    "download_url": "https://picsum.photos/id/1022/6000/3376"
  },
  {
    "id": "1023",
    "author": "William Hook",
    "width": 3955,
    "height": 2094,
    "url": "https://unsplash.com/photos/93Ep1dhTd2s",
    "download_url": "https://picsum.photos/id/1023/3955/2094"
  },
  {
    "id": "1024",
    "author": "Мартин Тасев",
    "width": 1920,
    "height": 1280,
    "url": "https://unsplash.com/photos/7ALI0RYyq6s",
    "download_url": "https://picsum.photos/id/1024/1920/1280"
  },
  {
    "id": "1025",
    "author": "Matthew Wiebe",
    "width": 4951,
    "height": 3301,
    "url": "https://unsplash.com/photos/U5rMrSI7Pn4",
    "download_url": "https://picsum.photos/id/1025/4951/3301"
  }
]
}
    this.move = this.move.bind(this);
    this.initBoard = this.initBoard.bind(this);
    this.setImages = this.setImages.bind(this);
    this.setZero = this.setZero.bind(this);
    this.checkAllRows=this.checkAllRows.bind(this);
    this.renderTicks = this.renderTicks.bind(this);
  }
   matrix(m, n) {
    return Array.from({

      length: m

    }, () => new Array(n).fill(0));
  };
  initBoard(r,c,event) {


  let board = this.matrix(r,c);
    board = this.placeNumbers(board,c);

    this.setState({
      board:board,

    },()=>{
      console.log(board)
    });
    let i=0;
    this.setState({
      rownos:r,
      input:true
    })
    while(i<r){
      this.setState({
        [`r${i}`]:false
      },()=>{

      });
    i++;
    }

  //  this.setZero();
    this.checkAllRows();
  }


  placeNumbers(board,c) {
    const allCoordinates = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        allCoordinates.push([i, j]);
      }
    }
    const no =[];
    var s = 1;
    var w =1;
    for (let i = 0; i < board.length; i++) {
      s=w;
      for (let j = 0; j < board[i].length; j++) {
      no.push(s);
      }
      w++
    }
    no.pop();
  console.log(no);
    var numbers=  new Array(c*c-1).fill(1);
    console.log('NUMS ARE'+no.length)
   // const numbers = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4];
    no.forEach(n => {
      const randomIndex = Math.floor(Math.random() * allCoordinates.length);

      const randomCoordinate = allCoordinates.splice(randomIndex, 1);

      board[randomCoordinate[0][0]][randomCoordinate[0][1]] = n;
    });
    console.log(board);
    
    return board;


  }

  move(r, c, value,event) {
    this.checkAllRows();
    var i = this.state.imglist;
    
   var table = document.getElementById('mytable');

    const board = this.state.board;


    if (board[r - 1] && board[r - 1][c] === 0) {
      board[r - 1][c] = value;
      board[r][c] = 0;
      i[r-1][c] = i[r][c];
      i[r][c] = 'https://www.porcelaingres.com/img/collezioni/URBAN-GREAT/big/urban_great_white.jpg';
  

    }


    if (board[r][c + 1] === 0) {
      board[r][c + 1] = value;
      board[r][c] = 0;
      i[r][c+1] = i[r][c];
      i[r][c] = 'https://www.porcelaingres.com/img/collezioni/URBAN-GREAT/big/urban_great_white.jpg';
    
    }


    if (board[r + 1]) {
      if (board[r + 1][c] === 0) {
        board[r + 1][c] = value;
        board[r][c] = 0;
        i[r+1][c] = i[r][c];
        i[r][c] = 'https://www.porcelaingres.com/img/collezioni/URBAN-GREAT/big/urban_great_white.jpg';
       

      }
    }


    if (board[r][c - 1] === 0) {
      board[r][c - 1] = value;
      board[r][c] = 0;

      i[r][c-1] = i[r][c];
      i[r][c] = 'https://www.porcelaingres.com/img/collezioni/URBAN-GREAT/big/urban_great_white.jpg';
   

    }


    
    this.checkAllRows();
    var table = document.getElementById('mytable');
    for (var row = 0, n = table.rows.length; row < n-1; row++) {
      const arr = [];
      for (var c = 0, m = table.rows[row].cells.length; c < m; c++) {
          console.log(table.rows[row].cells[c].style.backgroundImage);
         arr.push(table.rows[row].cells[c].childNodes[0].style.backgroundImage);
  
      }
      if(arr.every( (val, i, arr) => val === arr[0] )){
        this.setState({
          [`r${row}`]:true
        },()=>{
          console.log("adfgsd")
        })
  
      }
      else{
  
         this.setState({
          [`r${row}`]:false
        },()=>{
          console.log("abc")
        })
      }
  }


  }
  componentWillMount(){
   // this.initBoard(4,4);
  }
  setImages(){
    let r = document.getElementById('row').value;
    var ima = [];
    let  row= parseInt(r);
    for(let i=0;i<r;i++){
      ima.push(this.state.imgarr[i].download_url);
    }
    var ima = ima.reduce(function (res, current) {
     let o=  new Array(row).fill(current);
     console.log(o)
     return res.concat(o);
    }, []);
    console.log(ima);
      var x = document.getElementsByTagName('td');
      console.log(x.length);
      this.shuffleArray(ima);
      let newArr=[];
      while(ima.length) newArr.push(ima.splice(0,r));
      console.log(newArr)
      this.setState({
        imglist:newArr
      },()=>{
        console.log('ima set');
      })
  

  }


setId(){
  var x = document.getElementsByTagName('td');
  for(let i=0;i<x.length;i++){
    x[i].childNodes[0].id="did"+i;
  }
}


  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
setZero(){
  let arr= this.state.board;
  let zero = 0;
  for(let i=0;i<arr.length;i++){
    for(let j =0 ; j<arr[i].length;j++){
        if(arr[i][j]==0){
          zero = [i,j]
        }
    }
  }




  console.log(zero);
}





componentDidMount(){
  
  let a = [1,3,5]
  let b = 'string'
}
handleChange=(event)=>{
 
 let row = document.getElementById('row').value;
 row = parseInt(row);
//here


//this.checkAllRows();

 }

checkAllRows(){

var table = document.getElementById('mytable');
for (var row = 0, n = table.rows.length; row < n; row++) {
  const arr = [];
  for (var c = 0, m = table.rows[row].cells.length; c < m; c++) {
      console.log(table.rows[row].cells[c].childNodes[0].style.backgroundImage);
     arr.push(table.rows[row].cells[c].childNodes[0].style.backgroundImage);

  }
  console.log(arr)
  if(arr.every( (val, i, arr) => val === arr[0] )){
    this.setState({
      [`r${row}`]:true
    },()=>{
      console.log("set true row")
    })

  }
  else{

     this.setState({
      [`r${row}`]:false
    },()=>{
      console.log("false row set")
    })
  }
}
}

renderTicks(r){
  let arr = [];
 
  for(let i=0;i<r;i++){
arr.push(i)
  this.setState({
    tickmarks:arr
  },()=>{
    console.log('not again')
  })
//return arr
}
}
  render() {

const style ={
  
}
    return (
   <div className="main"
   style={{
    position: 'absolute',
     width:100,
     height:100
  
  }}>
     <div className='white'>
        <input id ="row" placeholder="enter row" type='number' min='3' max='4'></input> <input id ="col" placeholder="enter col" type='number' min='3' max='4'></input>
       
        <button onClick={(event)=>{
       
          let row = parseInt(document.getElementById('row').value);
          let col = parseInt(document.getElementById('col').value);
          this.initBoard(row,col,event);
         this.setImages();
         this.renderTicks(row);
          //this.handleChange(row);
      }
          }>Play Game</button>
          

          {console.log(this.state)}
          </div>
        
         <div className= 'game'>    
    <Table newboard={this.state.board} move={this.move} bg={this.state.imglist}/>
    {console.log(this.state)}
    
        <div class="parent">
            {/* {console.log(this.state)}
              <div>
            {this.state.r0 ? '✔' :''}
          </div>

          <div>{this.state.r5 ? '✔' :''}</div> 
            {} */}
          <div>{this.state.r1 ? '✔' :''}</div>
          <div>{this.state.r2 ? '✔' :''}</div>
          <div>{this.state.r3 ? '✔' :''}</div> 
          <div>{this.state.r4 ? '✔' :''}</div> 
            
            {/* {this.state.arr.map((a,i)=>{return <div>{this.state.r`${i}`? '✔' :''}</div>})} */}
        </div>
        </div>   
   </div>
    );
  }
};



export default App;
