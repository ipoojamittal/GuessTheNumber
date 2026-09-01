# 🎮 NumGuess - Number Guessing Game

A fun and interactive number guessing game built with vanilla HTML, CSS, and JavaScript. Challenge yourself or compete with a friend in this engaging game!

## 📋 Table of Contents

- [Features](#features)
- [Game Modes](#game-modes)
- [How to Play](#how-to-play)
- [Game Rules](#game-rules)
- [Technical Details](#technical-details)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Legal & Deployment](#legal--deployment)
- [Browser Support](#browser-support)
- [UI/UX Highlights](#uiux-highlights)
- [Future Ideas](#-future-enhancement-ideas)
- [Developer Notes](#-developer-notes)
- [Support & Feedback](#-support--feedback)

---

## ✨ Features

- **Two Game Modes**: Single Player and Two Player modes
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Hint System**: Get real-time feedback (Too High/Too Low)
- **Guess Tracking**: View all previous guesses in one place
- **Player Stats**: Live tracking of guesses and numbers for each player
- **Turn Indicator**: Color-coded capsule showing whose turn it is
- **Reveal Answer**: Secret button to reveal the correct answer (ends game)
- **Guess Limits**: Limited attempts to make the game challenging
- **Responsive Design**: Works on desktop and mobile devices
- **Content Security Policy**: Secure implementation with proper CSP headers
- **Smooth Animations**: Pop animations for hints and transitions

---

## 🎯 Game Modes

### 1️⃣ **Single Player Mode**
- Play against the computer
- **12 guesses maximum** to find the number
- Displays remaining guesses in red
- Win by guessing the number within 12 attempts
- Lose if all guesses are exhausted

### 2️⃣ **Two Player Mode**
- Play with a friend
- Each player gets **6 guesses** maximum
- Players alternate turns
- **Current player indicator** shows whose turn it is (color-coded)
- **Player stats cards** display:
  - Guesses used out of limit
  - Remaining guesses
  - All guessed numbers for each player
- **Winner determined by**:
  - Whoever guesses the number with fewer attempts wins
  - If same number of guesses used → **Tie**
- Can play back to back without restarting

---

## 📖 How to Play

### Starting the Game
1. Open `index.html` in your browser
2. **Mode Selection Screen** appears
3. Click **"Single Player"** or **"Two Player"** button
4. Game begins with the number between 1-100 selected

### During Gameplay
1. **Enter a number** between 1 and 100 in the input field
2. Click **"Guess"** button or press **Enter**
3. Receive feedback:
   - ✅ "Too low. Try Again!" → Your number is less than the answer
   - ✅ "Too high. Try Again!" → Your number is greater than the answer
4. View your:
   - Number of guesses made
   - Remaining guesses (in red)
   - All previously guessed numbers
5. **Two Player Mode Only**: Players alternate turns after each wrong guess

### Buttons Available During Game
- **Back** (Purple): Return to mode selection screen
- **Restart** (Red): Appears after first guess - return to mode selection
- **Reveal Answer** (Purple): Show the correct answer and end the game

### After Game Ends
- **Win Screen**: Shows the number and your guess count
- **Lose Screen**: Shows the correct answer and your total guesses
- **Tie Screen** (Two Player): Shows equal guesses for both players
- Click **Restart** to play again or select a different mode

---

## 🎲 Game Rules

### General Rules
- **Number Range**: 1-100 (inclusive)
- **Invalid Input**: Numbers outside 1-100 trigger an alert
- **Hint-Based Gameplay**: Only "Too High" or "Too Low" hints provided
- **Progress Tracking**: All guessed numbers are displayed

### Single Player Rules
- ✅ **12 Maximum Guesses**
- ✅ Win by finding the number
- ✅ Lose if all 12 guesses exhausted
- ✅ Remaining guesses shown in red

### Two Player Rules
- ✅ **6 Guesses Per Player**
- ✅ Players alternate turns
- ✅ Each player's stats displayed in separate colored cards:
  - **Player 1** (Blue): Light blue background
  - **Player 2** (Pink): Light pink background
- ✅ First player to guess correctly wins
- ✅ If both exhaust guesses → Game Over (No Winner)
- ✅ If both use same guesses → Tie result

### Reveal Answer Rule
- Click **"Reveal Answer"** to show the correct number
- Game ends immediately
- Cannot continue playing after reveal
- Must restart to play again

---

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox, gradients, and animations
- **JavaScript (ES6+)**: Event-driven game logic
- **Font Awesome**: Icons for buttons and indicators
- **Google Fonts**: Poppins font family

### Security Features
- **Content Security Policy (CSP)**: Implemented with proper headers
- **No eval() usage**: All code follows best practices
- **Secure external resources**: CDN resources properly authorized

### Key JavaScript Features
- Dynamic DOM manipulation
- Event listeners for user interactions
- State management for game variables
- Conditional logic for game flow
- Timeout functions for animations

### File Structure
```
NumGuess/
├── index.html       # Main HTML structure
├── style.css        # All styling and animations
├── script.js        # Game logic and interactivity
├── privacy.html     # Privacy Policy page
├── notice.html      # Terms & Legal Notice page
├── README.md        # Project documentation
```

---

## 💾 Installation

### Method 1: Local File
1. Download all files (HTML, CSS, JS)
2. Keep them in the same folder
3. Open `index.html` in your web browser
4. No installation required!

### Method 2: Web Server
1. Place files on a web server
2. Access via URL in browser
3. Works with any HTTP server

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No external dependencies
- No backend server needed

---

## 📄 Legal & Deployment

### Footer & Credits
Every page includes a professional footer with:
- **Copyright Notice**: © 2026 NumGuess
- **Creator Credit**: Created by **@pooja**
- **Legal Links**: Quick access to Privacy Policy and Terms
- **External Links**: GitHub repository link

### Privacy Policy
Visit [`privacy.html`](privacy.html) for complete details on:
- Data collection practices
- User privacy rights
- Third-party services (Google Fonts, Font Awesome)
- Security measures
- Contact information for privacy concerns

### Terms & Legal Notice
Visit [`notice.html`](notice.html) for complete legal terms including:
- License and usage rights
- Intellectual property protection
- User responsibilities
- Disclaimer of warranties
- Limitation of liability
- Browser compatibility
- Data storage practices


---

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full Support |
| Firefox | ✅ Full Support |
| Safari | ✅ Full Support |
| Edge | ✅ Full Support |
| IE 11 | ❌ Not Supported |

---

## 🎨 UI/UX Highlights

### Color Scheme
- **Primary Background**: Purple (#5333c4)
- **Accent Blue**: #3c6fff (Player 1)
- **Accent Red**: #ff6b6b (Player 2)
- **Success Green**: #05c451
- **Error Red**: #ff3e3e

### Interactive Elements
- **Buttons**: Smooth hover effects with color transitions
- **Capsule Indicator**: Glowing pulse animation for current player
- **Hint Messages**: Pop animation with scaling effect
- **Player Cards**: Hover lift effect with shadow increase

### Responsive Design
- **Desktop**: Full width up to 50em
- **Tablet/Mobile**: 90% width with proper padding
- **Scrolling**: Container scrolls if content exceeds viewport

---

## 🚀 Future Enhancement Ideas

- 🎵 Sound effects and background music
- 🏆 Leaderboard/High scores
- ⏱️ Time-based challenges
- 🎯 Difficulty levels (Easy/Medium/Hard)
- 🌙 Dark mode theme
- 📱 Progressive Web App (PWA)
- 🤖 AI opponent for single player
- 🎉 Confetti animations on win

---

## 📝 License

This project is open source and free to use for educational purposes.

---

## 👨‍💻 Developer Notes

### Game Variables Tracked
- `answer`: The correct number
- `gameMode`: "single" or "two"
- `gameEnded`: Boolean for game state
- `hasGuessed`: Track first guess
- `remainingGuesses`: For single player
- `currentPlayer`: 1 or 2 for multiplayer
- `player1Guesses`, `player2Guesses`: Attempt counters
- `player1GuessedNums`, `player2GuessedNums`: Arrays of numbers

### Key Functions
- `play()`: Main game handler
- `playSinglePlayer()`: Single player logic
- `playTwoPlayer()`: Two player logic
- `startGame()`: Initialize game
- `initSinglePlayer()`, `initTwoPlayer()`: Mode setup
- `endSinglePlayerGame()`: Single player end
- `endTwoPlayerGame()`: Two player end
- `endGameNoGuessesLeft()`: Out of guesses handler

---

## 💬 Support & Feedback

If you enjoy playing NumGuess by yourself or with your family and friends, we'd love to hear from you! Your feedback helps us improve the game and make it even more fun.

### Share Your Experience
- **Enjoyed the game?** Send us your feedback and review!
- **Found a bug?** Let us know so we can fix it
- **Have suggestions?** We'd love to hear your ideas for improvements
- **Want to share your high score?** Tell us about it!

### Get In Touch
📧 **Email:** [official.poojamittal@gmail.com](mailto:official.poojamittal@gmail.com)

Please include:
- Your feedback or review about the game
- Any issues you encountered (if applicable)
- Suggestions for improvements
- Your gaming experience (single/two-player preferences)

Your feedback is valuable and helps us make NumGuess better for everyone! 😊

---

## 🎮 Enjoy the Game!

Have fun guessing! Challenge your friends and see who can find the number in the fewest tries! 🎉

---
**@Pooja Mittal
**Last Updated**: September 1, 2026  
**Version**: 1.0
