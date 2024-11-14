// Game data
const DAILY_WORDS = [
  {
      word: 'HAPPY',
      synonyms: ['JOYFUL', 'CHEERFUL', 'MERRY', 'GLAD', 'DELIGHTED', 'PLEASED', 'ELATED', 'JUBILANT', 'BLISSFUL', 'CONTENT']
  },
  {
      word: 'SMART',
      synonyms: ['CLEVER', 'INTELLIGENT', 'BRIGHT', 'WISE', 'SHARP', 'BRILLIANT', 'ASTUTE', 'GIFTED', 'QUICK', 'KEEN']
  },
  {
      word: 'STRONG',
      synonyms: ['POWERFUL', 'MIGHTY', 'ROBUST', 'TOUGH', 'STURDY', 'SOLID', 'FIRM', 'MUSCULAR', 'HARDY', 'FORCEFUL']
  }
];

// Game state
let foundSynonyms = [];
let gameOver = false;
let dailyWord = null;

// Initialize game when document is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Make startGame function globally accessible
  window.startGame = function() {
      dailyWord = getDailyWord();
      document.getElementById("introScreen").style.display = "none";
      document.getElementById("game").style.display = "flex";
      initializeGame();
  };

  // Make closeEndScreen function globally accessible
  window.closeEndScreen = function() {
    document.getElementById("endScreen").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("introScreen").style.display = "flex";
    checkDailyPlay(); // Check if should show play button or wait message
};

  // Set up event listeners
  const wordInput = document.getElementById("wordInput");
  const submitButton = document.getElementById("submitButton");
  const hintButton = document.querySelector(".hint-btn");
  const giveUpButton = document.querySelector(".give-up-btn");

  submitButton.addEventListener('click', submitWord);
  wordInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') submitWord();
  });
  hintButton.addEventListener('click', showHint);
  giveUpButton.addEventListener('click', handleGiveUp);
});

function getDailyWord() {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  return DAILY_WORDS[dayOfYear % DAILY_WORDS.length];
}

function checkDailyPlay() {
  if (hasPlayedToday()) {
      // Update play button text and disable it
      const playButton = document.querySelector('.play-button');
      playButton.textContent = "Come back tomorrow!";
      playButton.disabled = true;
      playButton.style.backgroundColor = '#cccccc';
      
      // Show today's progress
      const progress = localStorage.getItem('todayProgress') || '0/10';
      document.getElementById("highScoreDisplay").textContent = progress;
      
      // Update intro text
      document.querySelector('.intro-container p').textContent = 
          `You've already played today! Come back tomorrow for a new word. Today's progress: ${progress}`;
  }
}

function hasPlayedToday() {
  const lastPlayed = localStorage.getItem('lastPlayedDate');
  const today = new Date().toDateString();
  return lastPlayed === today;
}

function markAsPlayed() {
  localStorage.setItem('lastPlayedDate', new Date().toDateString());
}

function initializeGame() {
  // Reset game state
  foundSynonyms = [];
  gameOver = false;
  
  // Update display
  const wordDisplay = document.querySelector(".target-word");
  wordDisplay.textContent = dailyWord.word;
  updateProgressDisplay();
  document.querySelector(".found-words-grid").innerHTML = "";
  document.getElementById("wordInput").value = "";
  document.getElementById("errorMessage").textContent = "";
}

function submitWord() {
  if (gameOver) return;

  const wordInput = document.getElementById("wordInput");
  const word = wordInput.value.trim().toUpperCase();
  
  if (word.length < 2) {
      showError("Word must be at least 2 letters long");
      return;
  }

  if (foundSynonyms.includes(word)) {
      showError("You've already found this synonym!");
      return;
  }

  if (dailyWord.synonyms.includes(word)) {
      // Valid synonym found
      foundSynonyms.push(word);
      updateProgressDisplay();
      wordInput.value = "";
      showPopupMessage(`Great find! ${foundSynonyms.length}/10 found! 🌟`);

      if (foundSynonyms.length === dailyWord.synonyms.length) {
          handleGameWin();
      }
  } else {
      showError("Not a valid synonym");
  }
}

function updateProgressDisplay() {
  // Update progress counter
  document.querySelector(".score-display").textContent = 
      `Progress: ${foundSynonyms.length}/10 synonyms found`;
  
  // Update found words grid
  updateFoundWords();
}

function updateFoundWords() {
  const wordsGrid = document.querySelector(".found-words-grid");
  wordsGrid.innerHTML = "";
  
  foundSynonyms.sort().forEach(word => {
      const wordElement = document.createElement("div");
      wordElement.className = "word-card";
      wordElement.textContent = word;
      wordsGrid.appendChild(wordElement);
  });
}

function showHint() {
  const remainingSynonyms = dailyWord.synonyms.filter(syn => !foundSynonyms.includes(syn));
  if (remainingSynonyms.length > 0) {
      const randomSynonym = remainingSynonyms[Math.floor(Math.random() * remainingSynonyms.length)];
      showPopupMessage(`Hint: Try a word starting with ${randomSynonym.substring(0, 2)}...`);
  }
}

function handleGameWin() {
  gameOver = true;
  const progress = `${foundSynonyms.length}/10`;
  localStorage.setItem('todayProgress', progress);
  markAsPlayed();
  showPopupMessage("Congratulations! You found all 10 synonyms! 🎉");
  setTimeout(showEndScreen, 1500);
}

function handleGiveUp() {
  gameOver = true;
  const progress = `${foundSynonyms.length}/10`;
  localStorage.setItem('todayProgress', progress);
  markAsPlayed();
  showEndScreen();
}

function showEndScreen() {
  document.getElementById("finalScore").textContent = `${foundSynonyms.length}/10`;
  
  // Show all synonyms in the end screen
  const wordSummary = document.querySelector(".all-words-grid");
  wordSummary.innerHTML = "";
  
  dailyWord.synonyms.forEach(word => {
      const wordElement = document.createElement("div");
      wordElement.className = `word-card ${foundSynonyms.includes(word) ? 'found-word' : 'unfound-word'}`;
      wordElement.textContent = word;
      wordSummary.appendChild(wordElement);
  });
  
  document.getElementById("endScreen").style.display = "flex";
  
  // Update high score display
  document.getElementById("highScoreDisplay").textContent = 
      `${foundSynonyms.length}/10`;
}

function showError(message) {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = message;
  setTimeout(() => errorMessage.textContent = "", 2000);
}

function showPopupMessage(message) {
  const popup = document.createElement("div");
  popup.className = "popup-message";
  popup.textContent = message;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 1500);
}

function resetGame() {
  foundSynonyms = [];
  gameOver = false;
  document.querySelector(".found-words-grid").innerHTML = "";
  document.querySelector(".score-display").textContent = "Progress: 0/10 synonyms found";
  document.getElementById("wordInput").value = "";
  document.getElementById("errorMessage").textContent = "";
}