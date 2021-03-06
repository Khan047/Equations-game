
import './App.css';
import Input from './Input';
import Table from './Table'
import React, { Component } from 'react'
import _ from  'lodash';
import Options from './Options';


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
    this.qArray = this.playGame.bind(this);
    this.initPlayBoard = this.initPlayBoard.bind(this);
    this.swapBoxes = this.swapBoxes.bind(this);
    this.state={
     
      gameSet:false,
      
      neweq:[]
    }
  }
  swapBoxes = (fromBox, toBox) => {
    
      console.log(fromBox,toBox);
      let swapboard =this.state.gboard;
      let frow = fromBox.row;
      let fcol = fromBox.col;
      let trow = toBox.row;
      let tcol = toBox.col;
      let tops = _.cloneDeep(this.state.Coptions);
      console.log(tops)
      if(frow==-1){
        let temp = tops[fcol];
        
        tops[fcol] = swapboard[trow][tcol];
        swapboard[trow][tcol] = temp;
      }
      else if(trow==-1){
        let temp = swapboard[frow][fcol];
       
        swapboard[frow][fcol] = tops[tcol];
        tops[tcol] = temp;
        


        }
      else{
      let temp = swapboard[frow][fcol];
     
      swapboard[frow][fcol] = swapboard[trow][tcol];
      swapboard[trow][tcol] = temp;
      let temp2 = swapboard[trow][tcol];
      }


      console.log('swapped board is ',swapboard)
      this.setState(
      (prevState)=>{
        return{
          ...prevState,
          Coptions:tops,
          gboard:swapboard
        }
      }
      )
      let  keys = Object.keys(swapboard);
      console.log(keys)
      keys.pop()
      keys.pop()
      keys.pop()
     // keys.pop()
     console.log(keys)
        for(let k =0; k<keys.length;k++){
          // keys.splice(k+1,1);
          // k++;
          if(keys[k]%2!=0){
            keys.splice(k,1)
          }
        }
       console.log(keys)
       let mArr = [];
            
        keys.forEach(
          key => {
            const row = swapboard[key]
            const t2 = [];
            const length = row.length -3 ;
            for(let i=0; i<length;i++){
              //let x = parseInt(row[i])
              if(!isNaN(parseInt(row[i]))||row[i]==='B'){
                console.log("key ="+key,"row[i] =",row[i],"i =",i)
                
                t2.push(row[i]);
               console.log('t2 is ',t2)
              }
            }if(t2.length!==0)mArr.push(t2);
          }
        )
        console.log('new miss array in swapboxes',mArr);
     
      console.log(this.state)
    
       this.checkSolutions(mArr);
     


  }
  handleDragStart = data => event => {
    if(event.target.id=='-1'){
      let fromBox = JSON.stringify({row:-1,col:data.col})
      event.dataTransfer.setData("dragContent", fromBox);
      console.log('fromBox',fromBox)
    }
    else{
    let fromBox = JSON.stringify({ row: data.row, col: data.col });
    event.dataTransfer.setData("dragContent", fromBox);
  }

   
  };

  handleDragOver = data => event => {

    event.preventDefault();
    return false;
  };

  handleDrop = data => event => {
     // console.log(data)
    event.preventDefault();
  
    if(data.row=='-1'){
      let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
    let toBox = { row: data.row, col:data.col };
    console.log('toBox',toBox)
    this.swapBoxes(fromBox, toBox);
    }
    else{
    let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
    let toBox = { row: data.row, col:data.col };
    this.swapBoxes(fromBox, toBox);
      }

    
    
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
 
  
 var x = document.getElementById('eqs').value;
 if(this.checkNull(x)!=false){
 x = x.replace(/[+*\/-]/g, 'O');
 x = [...x];
 
 
var r = document.getElementById('rows').value;

var arr = new Array(r-1).fill(0);
let j=0;
 for( let i=0;i<(r*2)-1;i++){
 
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
 var last =  new Array(eq[0].length).fill('R');
 let j=0;
 for( let i=0;i<ops.length-1;i++){
 
  i++;
  ops[i] = 'B';
 
}
for( let i=0;i<ops.length-1;i++){
 
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
 

  
    
    this.setState({
      ...this.state,
      eqs: {
        ...this.state.eqs,
        [rowIndex] : updatedRow
      }
    }, () => {
      console.log('onChange',this.state)
    })



}





initPlayBoard(board){
const keys = Object.keys(board);
let lrow = [];
let temp = [];
let BoxData = {};
let u =1;
console.log(board[0].length)
//lrow = board[board[0].length-2];
lrow = _.cloneDeep(board[keys.length-2]);
console.log(lrow)
for(let i =0 ; i<lrow.length;i++){
  if(lrow[i]==='='){
    temp.push(FLAGS.CHECKBOX_IS_FALSE)
    BoxData = {
      ...BoxData,
      [`c${u}`]:FLAGS.CHECKBOX_IS_FALSE
    }
    u++;
  }
  else{
    temp.push(FLAGS.CHECKBOX_IS_NA)
  }
}
u=1;
keys.forEach(
  key =>{
    const row = board[key]
    const length = row.length
   
    if(row[row.length-2]==='='){
      row.push(FLAGS.CHECKBOX_IS_FALSE)
      BoxData={
        ...BoxData,
        [`r${u}`]:FLAGS.CHECKBOX_IS_FALSE
      }
      u++;
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
console.log('BoxData is ',BoxData);
this.setState({
  checkboxFlags:BoxData
},()=>{
  console.log(this.state)
})
return board;
}
getQarray(a){
  const opArray =[];
  console.log("inside getQarray",a)
  const aa = _.cloneDeep(a);
  console.log("inside getQarray",aa)
  
  let length = aa[0].length;
 
  console.log('row length'+length)
  const toRemove = (length % 2 == 0) ? length/2 : (Math.ceil(length/2)) - 1;
    console.log('toRemove'+toRemove)
  for(let i=0;i<aa.length;i++){
   
    for(let j = 0 ; j<toRemove;j++){
    let random = Math.floor(Math.random()*length);
    console.log('random'+random)
    //array[i][random]=' ';
    opArray.push(aa[i][random]);
    aa[i].splice(random,1,'B');
  }
 
}


return [aa,opArray];
}

getSolarray(board){
const temp  = [];
let  keys = Object.keys(board);
keys.pop()
keys.pop()

 console.log(keys)
  keys.forEach(
    key => {
      const row = board[key]
      const t2 = [];
      const length = row.length -2 ;
      for(let i=0; i<length;i++){
        let x = parseInt(row[i])
        if(!isNaN(x)){
          console.log("key ="+key,"row[i] =",row[i],"i =",i)
          
          t2.push(row[i]);
         console.log('t2 is ',t2)
        }
      }if(t2.length!==0)temp.push(t2);
    }
  )
  console.log('INSIDE SOL ARRAY',temp);
return temp;
}



setPlayBoard(LHSArray, checkboxData){
  // const testCheckboxData = {
  //   c1: FLAGS.CHECKBOX_IS_TRUE,
  //   c2: FLAGS.CHECKBOX_IS_TRUE,
  //   r1: FLAGS.CHECKBOX_IS_FALSE,
  //   r2: FLAGS.CHECKBOX_IS_FALSE,
    
  // }
  const testCheckboxData = _.cloneDeep(checkboxData)
  this.setState((prevState) => {
    const newGboard = _.cloneDeep(prevState.gboard)
    console.log(newGboard)
    const rows = LHSArray.length
    const columns = LHSArray[0].length
  
    for(let i=0; i<rows; i++) {
      const gboardKey = 2*i
      for(let j=0; j<columns; j++) {
        const gboardColIndex = j*2;
        newGboard[gboardKey][gboardColIndex] = LHSArray[i][j]
  
      }
  
      // check if checkbox data is present
      if(testCheckboxData) {
        console.log(`r${gboardKey}`,testCheckboxData[`r${i+1}`])
        const gboardLastColIndex = newGboard[gboardKey].length - 1
        newGboard[gboardKey][gboardLastColIndex] = testCheckboxData[`r${i+1}`]
      }
      
    }
  
  
    if (testCheckboxData) {//checkCol
      const columnKeys = Object.keys(testCheckboxData).filter( key => key.includes('c'))
      for (let i=0; i<columnKeys.length; i++) {
        newGboard['checkCol'][2*i] = testCheckboxData[columnKeys[i]]
      }
    }

    console.log('newGboard:',newGboard)
   
    return {gboard:newGboard}
  })


}
playGame(){
  
  var gboard = _.cloneDeep(this.state.neweq);
  console.log(gboard)
  let solvedArr = this.getSolarray(gboard);
  let solvedArr2 = _.cloneDeep(solvedArr)
  console.log(solvedArr)
   const OpsandMiss = this.getQarray(solvedArr2);
  let options = OpsandMiss[1];
  let missingArray = OpsandMiss[0]; 
  gboard  = this.initPlayBoard(gboard);

  // gboard = {
  //   optK:options,
  //   ...gboard
  // }
  this.setState((prevState) => {
    return {
      ...prevState,
      Coptions:options,
      missingArray:missingArray,
      solvedArr:solvedArr,
      gboard:gboard,
      neweq:false,
      playable:true
    }
  })
console.log(solvedArr)
  this.setPlayBoard(missingArray,this.state.checkboxFlags);
 
  console.log(gboard)
  
  




}
checkSolutions(mArr) {
  //console.log(addedValue);
 console.log(mArr)

  // let missArr = _.cloneDeep(this.state.missingArray);
   let solvedArrr = _.cloneDeep(this.state.solvedArr);
  // console.log('solved arr is ',solvedArrr);
  // console.log('miss arrray is', missArr)
  console.log(this.state)
  // if(r!=='-1'){
  //            missArr[r/2][c/2] = addedValue;
  //           // missArr[r2/2][c2/2] = faddedValue;
  // }
  //  console.log('msiarr is ',missArr)
  
  this.setState((prevState) => {
    return {
      ...prevState,
      missingArray:mArr,
    
    }
  })
   console.log(this.state)
// get what user has changed and add it to missingArray

// compare missing array and solution array and on the basis of comparision create the checkboxData.
const checkboxData = _.cloneDeep(this.state.checkboxFlags)
console.log('checkBox data',checkboxData)

// for row, i in missngarray:
//      rowFlag = True
//      for col, j in enumearte(missngarray):
//              solutionarrry[i][j] != missingarray[i][j]
//               rowFlag = False

//        if rowFlag: 
          // checkboxData[f'r{i+1}'] = FLAG.CHECKBOX_is_ture
//        else: 
          // checkboxData[f'r{i+1}'] = FLAG.CHECKBOX_is_false
          console.log(solvedArrr)
for(let i =0 ; i<solvedArrr.length;i++){
  let rowFlag = true;
  for(let j =0;j<solvedArrr[i].length;j++){
    if(solvedArrr[i][j]!==mArr[i][j]){
       rowFlag = false;
    }

  }


  if(rowFlag==true){
    checkboxData[`r${i+1}`] = FLAGS.CHECKBOX_IS_TRUE;
  
  }
  else{
    checkboxData[`r${i+1}`] =FLAGS.CHECKBOX_IS_FALSE;
  }
}
for(let i =0 ; i<solvedArrr[0].length;i++){ //3
  let colFlag = true;
  for(let j =0;j<solvedArrr.length;j++){ //2 
    console.log('sle',solvedArrr[j][i],'i=',i,'j=',j);
    console.log('mle',mArr[j][i],'i=',i,'j=',j)
    if(solvedArrr[j][i]!==mArr[j][i]){
       colFlag = false;
    }

  }


  if(colFlag==true){
    checkboxData[`c${i+1}`] = FLAGS.CHECKBOX_IS_TRUE;
  
  }
  else{
    checkboxData[`c${i+1}`] =FLAGS.CHECKBOX_IS_FALSE;
  }
}
console.log(checkboxData)
this.setPlayBoard(mArr,checkboxData);
          
        
// pass new missingArray and checkboxdata to the estPlayboard()


}
checkNull(v){
 let k = document.getElementById('rows').value
  if(v.length==0||k.length==0){
    alert('Cannot be Empty')
    return false
  }
return 
}
  render() {
    return (
      <div className="App" style={{
        position: 'absolute',
        left: 0,
        right: 0,
        color:'white',
        justifyContent:'center'
        
      
      }}>
         {/* <Input onChange = {this.handleChange}/> */}
        <div style={{display:'flex',height:25}}> No of Eq<input size='1' id = 'rows' onChange={this.checkNull}></input> Sample Eq<input size='1' id= 'eqs' type='text'  ></input> 
                   <button onClick={this.handleChange}>START</button>
                    </div>           
        <div className = 'demoWrapper parent'>
          {this.state.eqs?<Table eqs={this.state.eqs} onChange={this.onChange} gameset='false'
           onDragStart={null}
           onDragOver={null}
           onDrop={null}/>:''}
          {this.state.neweq?<Table eqs ={this.state.neweq} gameset = 'true'
           onDragStart={this.handleDragStart}
           onDragOver={this.handleDragOver}
           onDrop={this.handleDrop}/>:''}
           {this.state.Coptions?<Options ops={this.state.Coptions}
             onDragStart={this.handleDragStart}
             onDragOver={this.handleDragOver}
             onDrop={this.handleDrop}
           />:''}
          {this.state.playable?<Table eqs ={this.state.gboard} gameset = 'play'
          onDragStart={this.handleDragStart}
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}
          style={{"table_tr_nth_child_odd___td":{"backgroundColor":"#ccc","border":"1px solid gray","borderRadius":"5px"},"table_tr_nth_child_even__td":{"backgroundColor":"rgb(243, 243, 243)"},"table_tr_nth_last_child_2__td":{"backgroundColor":"rgb(243, 243, 243)"},"table_tr_nth_last_child_1__td":{"backgroundColor":"rgb(243, 243, 243)","border":"0"},"table_tr_td_nth_last_child_odd":{"backgroundColor":"rgb(243, 243, 243)","border":"0"},"table_tr_td_last_child":{"backgroundColor":"rgb(243, 243, 243)"}}}
          
          
          
          
          />:''}
      </div>
      { this.state.eqs?<button onClick={this.setGame}>Set game</button>:''}
      { this.state.neweq?<button onClick={this.playGame}>Play Game</button>:''}
      </div>
      
    )
  }
}

export default App
