// DOM Elements
const hint = document.getElementById("hint");
const noOfGuessesRef = document.getElementById("no-of-guesses");
const guessedNumsRef = document.getElementById("guessed-nums");
const restartButton = document.getElementById("restart");
const backButton = document.getElementById("back-btn");
const game = document.getElementById("game");
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check-btn");
const revealButton = document.getElementById("reveal-answer");
const modeSelectionScreen = document.getElementById("mode-selection");
const singlePlayerBtn = document.getElementById("single-player-btn");
const twoPlayerBtn = document.getElementById("two-player-btn");
const currentPlayerDisplay = document.getElementById("current-player");
const twoPlayerStats = document.getElementById("two-player-stats");
const player1GuessesRef = document.getElementById("player1-guesses");
const player1NumbersRef = document.getElementById("player1-numbers");
const player2GuessesRef = document.getElementById("player2-guesses");
const player2NumbersRef = document.getElementById("player2-numbers");
const gameTitle = document.getElementById("game-title");

// Game Variables
let answer, noOfGuesses, guessedNumsArr;
let gameMode = null; // 'single' or 'two'
let currentPlayer = 1; // For two-player mode
let player1Guesses = 0;
let player2Guesses = 0;
let player1GuessedNums = [];
let player2GuessedNums = [];
let gameEnded = false;
let hasGuessed = false; // Track if at least one guess has been made
let maxGuesses = 12; // Single player has 12 guesses
let maxGuessesPerPlayer = 6; // Two player has 6 guesses each
let remainingGuesses = 12; // Track remaining guesses for current player

const play = () => {
  if (gameEnded) return;
  
  // Check if guess limit reached
  if (gameMode === "single" && remainingGuesses <= 0) {
    alert("You've used all your guesses! Game Over.");
    endGameNoGuessesLeft();
    return;
  }
  
  if (gameMode === "two") {
    const playerRemaining = currentPlayer === 1 
      ? (maxGuessesPerPlayer - player1Guesses) 
      : (maxGuessesPerPlayer - player2Guesses);
    if (playerRemaining <= 0) {
      alert(`Player ${currentPlayer} has used all their guesses!`);
      endGameNoGuessesLeft();
      return;
    }
  }
  
  const userGuess = guessInput.value;
  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  
  guessInput.value = "";
  
  if (gameMode === "single") {
    playSinglePlayer(userGuess);
  } else if (gameMode === "two") {
    playTwoPlayer(userGuess);
  }
};

const playSinglePlayer = (userGuess) => {
  guessedNumsArr.push(userGuess);
  noOfGuesses += 1;
  remainingGuesses -= 1;
  hasGuessed = true;
  restartButton.style.display = "block";
  if (userGuess != answer) {
    if (userGuess < answer) {
      hint.innerHTML = "Too low. Try Again!";
    } else {
      hint.innerHTML = "Too high. Try Again!";
    }
    noOfGuessesRef.innerHTML = `<span>No. Of Guesses:</span> ${noOfGuesses} | <span style="color: #d72222; font-weight: 600;">Remaining: ${remainingGuesses}</span>`;
    guessedNumsRef.innerHTML = `<span>Guessed Numbers are: </span>${guessedNumsArr.join(
      ","
    )}`;
    hint.classList.remove("error");
    setTimeout(() => {
      hint.classList.add("error");
    }, 10);
    
    // Check if guesses exhausted
    if (remainingGuesses <= 0) {
      setTimeout(() => {
        endGameNoGuessesLeft();
      }, 1000);
    }
  } else {
    endSinglePlayerGame();
  }
};

const playTwoPlayer = (userGuess) => {
  if (currentPlayer === 1) {
    player1GuessedNums.push(userGuess);
    player1Guesses += 1;
  } else {
    player2GuessedNums.push(userGuess);
    player2Guesses += 1;
  }
  
  hasGuessed = true;
  restartButton.style.display = "block";
  
  if (userGuess != answer) {
    if (userGuess < answer) {
      hint.innerHTML = `Too low. Try Again!`;
    } else {
      hint.innerHTML = `Too high. Try Again!`;
    }
    updateTwoPlayerDisplay();
    hint.classList.remove("error");
    setTimeout(() => {
      hint.classList.add("error");
    }, 10);
    
    // Check if current player exhausted their guesses
    if ((currentPlayer === 1 && player1Guesses >= maxGuessesPerPlayer) ||
        (currentPlayer === 2 && player2Guesses >= maxGuessesPerPlayer)) {
      setTimeout(() => {
        endGameNoGuessesLeft();
      }, 1000);
      return;
    }
    
    // Switch player
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    currentPlayerDisplay.className = currentPlayer === 1 ? "player-1" : "player-2";
    currentPlayerDisplay.innerHTML = `🎯 Player <span>${currentPlayer}</span>'s Turn`;
  } else {
    endTwoPlayerGame(currentPlayer);
  }
};

const endSinglePlayerGame = () => {
  hint.innerHTML = `Congratulations!<br>The number was <span>${answer}</span>.<br>You guessed the number in <span>${noOfGuesses} </span>tries.`;
  hint.classList.add("success");
  game.style.display = "none";
  revealButton.style.display = "none";
  backButton.style.display = "none";
  restartButton.style.display = "block";
  gameEnded = true;
};

const endTwoPlayerGame = (winningPlayer) => {
  let resultMessage = "";
  
  if (winningPlayer === 1) {
    resultMessage = `Player 1 Wins!<br>Player 1 guessed in <span>${player1Guesses}</span> tries.<br>Player 2 took <span>${player2Guesses}</span> tries.`;
  } else if (winningPlayer === 2) {
    resultMessage = `Player 2 Wins!<br>Player 2 guessed in <span>${player2Guesses}</span> tries.<br>Player 1 took <span>${player1Guesses}</span> tries.`;
  }
  
  hint.innerHTML = resultMessage;
  hint.classList.add("success");
  game.style.display = "none";
  revealButton.style.display = "none";
  backButton.style.display = "none";
  restartButton.style.display = "block";
  gameEnded = true;
};

const endGameNoGuessesLeft = () => {
  let resultMessage = "";
  if (gameMode === "single") {
    resultMessage = `❌ Game Over!<br>You ran out of guesses.<br>The correct answer was <span>${answer}</span>.<br>You made <span>${noOfGuesses}</span> guesses.`;
  } else {
    resultMessage = `❌ Game Over!<br>Both players ran out of guesses.<br>The correct answer was <span>${answer}</span>.<br>Player 1: ${player1Guesses} guesses | Player 2: ${player2Guesses} guesses`;
  }
  
  hint.innerHTML = resultMessage;
  hint.classList.add("error");
  game.style.display = "none";
  revealButton.style.display = "none";
  backButton.style.display = "none";
  restartButton.style.display = "block";
  gameEnded = true;
};

const updateTwoPlayerDisplay = () => {
  const p1Remaining = maxGuessesPerPlayer - player1Guesses;
  const p2Remaining = maxGuessesPerPlayer - player2Guesses;
  player1GuessesRef.innerHTML = `${player1Guesses}/${maxGuessesPerPlayer} (${p1Remaining} left)`;
  player1NumbersRef.innerHTML = player1GuessedNums.join(", ") || "None";
  player2GuessesRef.innerHTML = `${player2Guesses}/${maxGuessesPerPlayer} (${p2Remaining} left)`;
  player2NumbersRef.innerHTML = player2GuessedNums.join(", ") || "None";
};

const startGame = (mode) => {
  gameMode = mode;
  gameEnded = false;
  hasGuessed = false;
  answer = Math.floor(Math.random() * 100) + 1;
  console.log(answer); // For debugging purposes
  modeSelectionScreen.style.display = "none";
  game.style.display = "grid";
  revealButton.style.display = "block";
  backButton.style.display = "block";
  restartButton.style.display = "none";
  hint.innerHTML = "";
  hint.classList.remove("success", "error", "warning");
  
  if (mode === "single") {
    initSinglePlayer();
  } else {
    initTwoPlayer();
  }
};

const initSinglePlayer = () => {
  gameTitle.innerHTML = `Hey there!<br/>I have chosen a number between 1 - 100.<br />Can you try to guess it? (12 guesses max)`;
  noOfGuesses = 0;
  remainingGuesses = maxGuesses;
  guessedNumsArr = [];
  noOfGuessesRef.innerHTML = `<span>No. Of Guesses:</span> 0 | <span style="color: #d72222; font-weight: 600;">Remaining: ${remainingGuesses}</span>`;
  guessedNumsRef.innerHTML = "Guessed Numbers are: None";
  currentPlayerDisplay.style.display = "none";
  twoPlayerStats.style.display = "none";
  guessInput.focus();
};

const initTwoPlayer = () => {
  gameTitle.innerHTML = `Two Player Mode<br/>I have chosen a number between 1 - 100.<br />Players will take turns guessing! (6 guesses each)`;
  currentPlayer = 1;
  player1Guesses = 0;
  player2Guesses = 0;
  player1GuessedNums = [];
  player2GuessedNums = [];
  currentPlayerDisplay.style.display = "block";
  currentPlayerDisplay.className = "player-1";
  currentPlayerDisplay.innerHTML = `🎯 Player <span>1</span>'s Turn`;
  twoPlayerStats.style.display = "block";
  player1GuessesRef.innerHTML = `0/${maxGuessesPerPlayer} (${maxGuessesPerPlayer} left)`;
  player1NumbersRef.innerHTML = "None";
  player2GuessesRef.innerHTML = `0/${maxGuessesPerPlayer} (${maxGuessesPerPlayer} left)`;
  player2NumbersRef.innerHTML = "None";
  noOfGuessesRef.innerHTML = "No. Of Guesses: 0";
  guessedNumsRef.innerHTML = "Guessed Numbers are: None";
  guessInput.focus();
};

guessInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    play();
  }
});

singlePlayerBtn.addEventListener("click", () => {
  startGame("single");
});

twoPlayerBtn.addEventListener("click", () => {
  startGame("two");
});

restartButton.addEventListener("click", () => {
  modeSelectionScreen.style.display = "flex";
  game.style.display = "none";
  revealButton.style.display = "none";
  restartButton.style.display = "none";
  backButton.style.display = "none";
  hint.innerHTML = "";
  hint.classList.remove("success", "error", "warning");
  gameEnded = false;
  hasGuessed = false;
});

backButton.addEventListener("click", () => {
  modeSelectionScreen.style.display = "flex";
  game.style.display = "none";
  revealButton.style.display = "none";
  restartButton.style.display = "none";
  backButton.style.display = "none";
  hint.innerHTML = "";
  hint.classList.remove("success", "error", "warning");
  gameEnded = false;
  hasGuessed = false;
});

checkButton.addEventListener("click", play);

revealButton.addEventListener("click", () => {
  hint.innerHTML = `The correct answer was <span>${answer}</span>!<br>Game Over. Please restart!`;
  hint.classList.add("warning");
  game.style.display = "none";
  revealButton.style.display = "none";
  backButton.style.display = "none";
  restartButton.style.display = "block";
  gameEnded = true;
});

window.addEventListener("load", () => {
  modeSelectionScreen.style.display = "flex";
  game.style.display = "none";
  revealButton.style.display = "none";
  restartButton.style.display = "none";
  backButton.style.display = "none";
});