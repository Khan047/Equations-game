
import './App.css';
import Input from './Input';
import Table from './Table'
import React, { Component } from 'react'
import _, { contains, keys } from  'underscore';


const FLAGS = {
  CHECKBOX_IS_NA: 'NA',
  CHECKBOX_IS_TRUE: 'CheckboxTrue',
  CHECKBOX_IS_FALSE: 'CHECKFALSE',
  BLANKSPACE: 'blank',

}


export class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setGame = this.setGame.bind(this);
    this.playGame = this.playGame.bind(this);
    this.state={
     
      gameSet:false,
      arr:[],
      neweq:[]
    }
  }
  swapBoxes = (fromBox, toBox) => {
    let operators = ['+','+','+','+','+','+','*','+','+','+','+','+'];
      console.log(fromBox,toBox);
      var table = document.getElementById('mytable');
      console.log(table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='=')

      if(table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!==' '&&table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='='&&table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='/'&&table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='*'&&table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='-'&&table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='+'&&table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML!=='/'&&table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML!=='*'&&table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML!=='-'&&table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML!=='+'&&table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML!=='=')
      {

          var temp1  = table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML;
          table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML = table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML;
          table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML = temp1;

      }
      console.log(parseInt(table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML)+parseInt(table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML))

       this.checkDrop(toBox.row,toBox.col,table);

     


  }
  handleDragStart = data => event => {

    let fromBox = JSON.stringify({ row: data.row, col: data.col });

    event.dataTransfer.setData("dragContent", fromBox);
  };

  handleDragOver = data => event => {

    event.preventDefault();
    return false;
  };

  handleDrop = data => event => {
     // console.log(data)
    event.preventDefault();
  



    let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
    let toBox = { row: data.row, col:data.col };


    this.swapBoxes(fromBox, toBox);
    
    return false;
  };
  setGame(){
    var neweq = this.state.eqs;
  
   
    this.setState({
      neweq:neweq,
      gameSet:true,
      eqs:false

    },()=>{
      console.log(this.state);
    })
   
  }
  
  handleChange=(event)=>{
   if(event.key==='Enter') {
  
 var x = event.target.value;
 x = x.replace(/[+*\/-]/g, 'O');
 x = [...x];
 var colNos = 0;
 for(let i=0;i<x.length;i++){
   
 }
var r = document.getElementById('rows').value;
//this.getIndices(r);
var arr = new Array(r-1).fill(0);
let j=0;
 for( let i=0;i<(r*2)-1;i++){
  //console.log(i);
  i++;
  arr[j] = i;
  j++;
}
arr.pop();

if(r!='null'||r!='undefined'){
  var eq = { };
   for(let i=0;i<(r*2)+1;i++){
     eq = {
       ...eq,
      [i]:x,
    }
 }
 
 var slast=  new Array(eq[0].length).fill('=');
 var ops =  new Array(eq[0].length).fill('O');
 var last =  new Array(eq[0].length).fill('O');
 let j=0;
 for( let i=0;i<ops.length-1;i++){
  //console.log(i);
  i++;
  ops[i] = 'B';
 
}
for( let i=0;i<ops.length-1;i++){
  //console.log(i);
  i++;
  slast[i] = 'B';
  last[i] = 'B';
 
}
ops.splice(-1,1,'B');
slast.splice(-1,1,'B');
slast.splice(-2,1,'B');
last.splice(-1,1,'B');
last.splice(-2,1,'B');
 console.log(slast)
 let i =0;

 for (let [key, value] of Object.entries(eq)) {

  
  for(i=0;i<arr.length;i++){
    eq[arr[i]] = ops;
  }
  if(key==(r*2)-1){
    eq[key] =slast;
  

  }
  if(key==(r*2)){
    eq[key] =last;
  

  }
}
 this.setState({
  eqs:eq
 },()=>{
   console.log(this.state)
 })

}
  }
}
onChange=(rowIndex, columndIndex, e)=>{
  //console.log(event.target.value)
  const updatedRow = this.state.eqs[rowIndex].map((v, i) => {
    if (parseInt(columndIndex) === i ) {
      return e.target.value
    } 
    return v
  })
 
  console.log(e.key)
  if(e.key === 'Enter'){
    console.log(updatedRow)
    this.setState({
      ...this.state,
      eqs: {
        ...this.state.eqs,
        [rowIndex] : updatedRow
      }
    }, () => {
      console.log(this.state)
    })


}
}
setRandos(numArray){
  var x = document.getElementsByTagName('td');
  var j =0 ;
 
  for(let i=0;i<x.length;i++){
    console.log(x[i].childNodes[0].innerHTML)
    if(x[i].childNodes[0].innerHTML=='A'){
      console.log(x[i].childNodes[0].innerHTML)
      x[i].childNodes[0].innerHTML=numArray[j]
      j++;
    }

  }
}



makeMissingBoard(gameObj){

  // const keys = Object.keys(gameObj)

  // keys.forEach( key => {
  //   const row = gameObj[key]
  //   const length = row.length

  //   const toRemove = lenght % 2 == 0 ? length/2 : (Math.ceil(lenght/2)) - 1

  // })
  // return {
  //   missingBoard: {},
  //   options: []
  // }
}
initPlayBoard(board){
const keys = Object.keys(board);
let lrow = [];
let temp = [];
lrow = board[board[0].length-2];
for(let i =0 ; i<lrow.length;i++){
  if(lrow[i]==='='){
    temp.push(FLAGS.CHECKBOX_IS_FALSE)
  }
  else{
    temp.push(FLAGS.CHECKBOX_IS_NA)
  }
}
keys.forEach(
  key =>{
    const row = board[key]
    const length = row.length
   
    if(row[row.length-2]==='='){
      row.push(FLAGS.CHECKBOX_IS_FALSE)
    }
  else{
    row.push(FLAGS.CHECKBOX_IS_NA)
  }
  }
)

board = {
  ...board,
  checkCol:temp
}
return board;
}
getSolarray(board){
let temp  = [];
let  keys = Object.keys(board);
keys.pop()
keys.pop()

 console.log(keys)
  keys.forEach(
    key => {
      const row = board[key]
      let t2 = [];
      const length = row.length -2 ;
      for(let i=0; i<length;i++){
        let x = parseInt(row[i])
        if(!isNaN(x)){
          console.log("key ="+key,"row[i] =",row[i],"i =",i)
          
          t2.push(row[i]);
         
        }
      }if(t2.length!==0)temp.push(t2);
    }
  )
return temp;
}
playGame(){
  var resArray = [];
  var numArray = [];
  var gboard = this.state.neweq;
  let solvedArr = this.getSolarray(gboard);
  console.log(solvedArr)
  gboard  = this.initPlayBoard(gboard);
  console.log(gboard)
  var finishedBoard = this.state.neweq;
  var row = document.getElementById('rows').value;
this.setState({
  finishedBoard:finishedBoard,
  gboard:gboard,
  neweq:false,
  playable:true
},()=>{
  console.log(this.state)
});

//  var joinArray = (a)=>{
//     var str = '';
//     for(let i=0;i<a.length-2;i++){
//       // str += a[i];
//       if(a[i]!=='+'||a[i]!=='='||a[i]!=='*'||a[i]!=='/'||a[i]!=='-'||a[i]!==' '||a[i]!==''||a[i]!=='B'){
      
//         numArray.push(parseInt(a[i]));
//       }
//     }
//     resArray.push(a[a.length-1]);
//     // for (let index = 0; index < a.length; index++) {
    
//     //   resArray.push(parseInt(a[a.length-1]));
//     //   console.log('last'+a[a.length-1])
      
//     // }
//     //resArray = resArray.filter(Number);
//    numArray=  numArray.filter(Number);
//    resArray = resArray.filter(Number); 
    
//   }
//   var resCol = [];
//   Object.keys(gboard).forEach((key,id)=>{
//     //joinArray(gboard[key])
//     if(key==(row*2)){
//       var b = gboard[key]
//       for (let index = 0; index < b.length; index++) {
//         b[index] = parseInt(b[index]);
        
//       }
//       resCol = [...b];
//       resCol = resCol.filter(Number)
//     }
//     if(key<(row*2-1)&&key<(row*2))
//        { joinArray(gboard[key])}
    
      
//   })
//   console.log(numArray)
//   console.log(resArray)
//   console.log(resCol)
 
  
//   Object.keys(gboard).forEach((key,id)=>{
//     //var random = Math.floor(Math.random() * gboard[key].length-2);
//    if(key<(row*2)-1)   {    var i = 0;
//  var j =0;
//     var temp = [];
//     while(i<gboard[key].length-2)
//     {if(gboard[key][i]!=='+'||gboard[key][i]!=='='||gboard[key][i]!=='*'||gboard[key][i]!=='/'||gboard[key][i]!=='-'||gboard[key][i]!==' '||gboard[key][i]!==''||gboard[key][i]!=='B'){
      
//       temp.push(parseInt(gboard[key][i]));
//     } 
//   i++;
//   } 
//   temp = temp.filter(Number);
//   var w = temp.length/2;
//    while(j<w){
//      if(w%2==0){
//        j++;
//        gboard[key][j] = ' ';
//       j--;
//      }
//      else{ gboard[key][j] = ' ';}
     
//       j++;
//    }}

//   })
//   var opts =  new Array(resCol.length+resArray.length).fill('A');
//   gboard = {
//     ...gboard,
//     options:numArray

//   }
//   this.setState({
//     finishedBoard:finishedBoard,
//     gboard:gboard,
//     neweq:false,
    
//     playable:true
//   },()=>{
//     console.log(this.state)
//   })
//   var x = document.getElementsByTagName('td');
//   var j =0 ;
 
//  setTimeout(this.setRandos(numArray),3000)
  

}
setTicks(){
  var rows  = document.getElementById('rows').value;
  var cols = document.getElementById('cols').value;
  var x ='';
  for(let i=0;i<rows.length;i++){
    x=  <div>{this.state.r[i] ? '✔' :''}</div>
  }
return x;
}
checkDrop(ro,co,table){
  // var ro = toBox.row;
  // var co = toBox.col;
  console.log(ro)
 
  let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));
   
  //var temp =Array2D(table.rows[0].length,table.cols.length);;
  var temp = [];
  if(ro!=='options'){
    ro=parseInt(ro)
    for (var c = 0, m = table.rows[ro].cells.length; c < m; c++) {
        temp.push(table.rows[ro].cells[c].childNodes[0].innerHTML);
   
    }

  //   for (var r = 0, n = table.rows[0].length; r < n; r++) {
  //     for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
          
  //       temp[r][c] = table.rows[r].cells[c].childNodes[0].innerHTML;

  //     }
  // }
  }
    console.log(temp);
    //this.evaluate(temp)

}
evaluate(a){
  var r =0;
  a.pop();
  a.pop();
  var x =a.join('');
  
  console.log(x)
   r  = eval(x);
  console.log(r);
  return r 

}
  render() {
    return (
      <div className="App" style={{
        position: 'absolute',
      
      }}>
         <Input onChange = {this.handleChange}/>
        
        <div className = 'demoWrapper parent'>
          {this.state.eqs?<Table eqs={this.state.eqs} onChange={this.onChange} gameset='false'
           onDragStart={this.handleDragStart}
           onDragOver={this.handleDragOver}
           onDrop={this.handleDrop}/>:''}
          {this.state.neweq?<Table eqs ={this.state.neweq} gameset = 'true'
           onDragStart={this.handleDragStart}
           onDragOver={this.handleDragOver}
           onDrop={this.handleDrop}/>:''}
          {this.state.playable?<Table eqs ={this.state.gboard} gameset = 'play'
          onDragStart={this.handleDragStart}
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}/>:''}
        
       
        <div class="rows">
       
       <div> {this.state.r0 ? '✔' :''} </div>
       <div>{this.state.r1 ? '✔' :''}</div>
       <div>{this.state.r2 ? '✔' :''}</div>
       <div>{this.state.r3 ? '✔' :''}</div> 
        
     </div>
     <div class="cols">
       
       <div> {this.state.c0 ? '✔' :''} </div>
       <div>{this.state.c1 ? '✔' :''}</div>
       <div>{this.state.c2 ? '✔' :''}</div>
       <div>{this.state.c3 ? '✔' :''}</div> 
        
     </div>
      </div>
      <button onClick={this.setGame}>Set game</button>
        <button onClick={this.playGame}>Play Game</button>
      </div>
      
    )
  }
}

export default App
