// Board Cell Object (Factory)
const Cell = (marker) => {

}

// Game Board Object (Module)
const GameBoard = ( () => {
  // Representation of the game board itself
  let board = [];

  const initBoard = () => {
    // Initialize the board to empty cells
  }

  // Marking a cell
  const markCell = (cellNum, marker) => {
    // Check if cell has been written to already. If so return false.
    // Otherwise mark cell and return true
    return true;
  }

  const resetBoard = () => {
    // Reset the board to it's default values
  }

  return {};
} )()

// Player Object (Factory)
const Player = (name, marker) => {

}

// Game Logic Object (Module)
const GameLogic = ( () => {
  const PLAYER_1_TURN = "PLAYER_1";
  const PLAYER_2_TURN = "PLAYER_2";

  const player_1 = Player("Riccardo", "X"); // 0
  const player_2 = Player("Hamilton", "O"); // 1

  const turn = PLAYER_1_TURN;

  // Start game
  const startGame = () => {
    console.log("Start Game inside Game  Logic");
  }

  return {startGame};
} )()

// Display Controller will be in charge of Interacting with the DOM (Module)
const DisplayController = (() => {
  // Mark the following cell with the given marker
  const markCell = (cellNum, marker) => {

  }
})()

// Attach Click Event Listeners
const AttachEventlisteners = (() => {
  $( "#start-game" ).click(function() {
    console.log("Starting Game");
    GameLogic.startGame();
});

})()
