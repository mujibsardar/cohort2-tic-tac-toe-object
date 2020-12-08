// TODO: Don't forget to validate cell selection

// Board Cell Object (Factory)
const Cell = (marker) => {

}

// Game Board Object (Module)
const GameBoard = ( () => {
  // Representation of the game board itself
  let board = [];

  const initBoard = () => {
    // Initialize the board to empty cells
    for(let i = 0; i < 9; i++){
      board[i] = "";
    }
  }

  // Marking a cell
  const markCell = (cellNum, marker) => {
    // Check if cell has been written to already. If so return false.
    // Otherwise mark cell and return true
    console.log("Marking cell: " + cellNum + " with marker: " + marker + " in GameBoard");
    // Check if the specified cell is valid
    // If true mark cell and return true
    board[cellNum] = marker;
    return true;
    // Else return false and do not change cell 
  }

  // TODO
  const resetBoard = () => {
    // Reset the board to it's default values
  }

  return {markCell, initBoard};
} )()

// Player Object (Factory)
const Player = (name, marker) => {
  const getName = () => {
    return name;
  }

  const getMarker = () => {
    return marker;
  }


  return {getMarker, getName};
}

// Game Logic Object (Module)
const GameLogic = ( () => {
  const player_1 = Player("Ricciardo", "X"); // 0
  const player_2 = Player("Hamilton", "O"); // 1

  // 0 is Player 1 and 1 is Player 2
  let currentPlayer = 0;

  // Start game
  const startGame = () => {
    console.log("Start Game inside Game Logic");
    GameBoard.initBoard();
    DisplayController.attachEventListeners();
  }

  // Mark cell
  const markCell = (i) => {
    console.log("Marking cell: " + i + " in GameLogic");
    let marker = currentPlayer == 0 ? player_1.getMarker() : player_2.getMarker();
    let isValid = GameBoard.markCell(i, marker);
    if(isValid){
      DisplayController.markCell(i, marker);
      currentPlayer = currentPlayer == 0 ? 1 : 0;
    }else {
      // Try again
    }
  }

  return {startGame, markCell};
} )()

// Display Controller will be in charge of Interacting with the DOM (Module)
const DisplayController = (() => {
  // Mark the following cell with the given marker
  const markCell = (cellNum, marker) => {
    $("#"+cellNum).text(marker);
  }

  const attachEventListeners = () => {
    for(let i = 0; i < 9; i++ ){
      $("#"+i).click(function() {
        console.log("You clicked on cell: " + i);
        GameLogic.markCell(i);
      });
    } // End for loop
  }// End of function

  return {attachEventListeners, markCell};
})() // End of Display Controller

// Attach Click Event Listeners
const AttachEventlisteners = (() => {
  $("#start-game").click(function() {
    console.log("Starting Game");
    GameLogic.startGame();
});

})()
