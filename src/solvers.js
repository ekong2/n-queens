/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = makeEmptyMatrix(n);
  for (var i = 0; i < n; i++){
    solution[i][i] = 1;
  }
  // var solution = undefined;
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({'n': n});
  var solutionCount = 0; //fixme

  // row counter
  // iterate over top row
    // for each space in that row, set the space to 1
    // call inner function with current board
    // inner function has a for loop
      // for each space in row[row counter], try adding 1
      // test if valid
        // if not valid, return & reverse the change that was just made
        // if valid, inner function recurse

  function decision(row, column){
    board.togglePiece(row, column);
    if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
      return;
    }
    if (row === n-1){
      console.log('hi(' + row + ', ' + column + ')');
      solutionCount++;
      board.togglePiece(row, column);
      // reverse change
      return;
    }
    for (var i = column ; i < n; i++){
      console.log('(' + row + ', ' + i + ')');
      // board.togglePiece(row, i);
      decision(row + 1, i);
      console.log('(' + row + ', ' + i + ')');
      board.togglePiece(row, i);
    }
  }

  decision(0,0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
  //Eddie:the answer should be n!
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

