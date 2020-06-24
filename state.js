//  a + b = c , 3

const state = {
  equationFlag: 1||2||3,
  equationTemplate: 'a + b = c',
  numberOfRows: 3,
  /**
   * - Once user clicks on start button
   * - Initial state: Step one
   */
  // equationTemplate:{
  //   0:['a','O','b','O','c'],
  //   1:['+','B','+','B','B'],  
  //   2:['a','+','b','=','c'],
  //   3:['+','B','+','B','B'],
  //   4:['a','+','b','=','c'],
  //   5:['=','B','=','B','B'],
  //   6:['a','B','b','B','B']
  // },
  // neweq: {
  //   0:['a','+','b','=','c'], 2
  //   1:['+','B','+','B','B'],  
  //   2:['a','+','b','=','c'],
  //   3:['+','B','+','B','B'],
  //   4:['a','+','b','=','c'],
  //   5:['=','B','=','B','B'],
  //   6:['a','B','b','B','B']
  // },
  /**
   * Set Game
   * - data we get after use clicks on set game
   * @payload : {
   *  same as equationTemplate but with values given by users
   * }
   * - update equationTemplate with that object 
   */
  equationMatrix : {
    0:['1','+','3','=','4'],
    1:['+','B','+','B','B'],  
    2:['2','+','3','=','5'],
    3:['+','B','+','B','B'],
    4:['1','+','2','=','3'],
    5:['=','B','=','B','B'],
    6:['4','B','8','B','B']
  },
  problemMatrix: {
    0:['-','+','3','=','4'],
    1:['+','B','+','B','B'],  
    2:['-','+','3','=','5'],
    3:['+','B','+','B','B'],
    4:['-','+','-','=','3'],
    5:['=','B','=','B','B'],
    6:['4','B','8','B','B']
  },
  optionArray: ['1','2', '6', '7']
}