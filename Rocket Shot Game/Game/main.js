let squares = document.querySelectorAll(".square");
let hearts = document.querySelector('i')
let gameStatus = 'level1'
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
let score = 0
let provera = true
let liveScore = 0
let superSec = 3000
let lives = 10
let scoreText = document.querySelector("span");
let time = 3
let interval

function generateRandomSquare() {
    squares.forEach(square => {
        square.classList.remove('red')
    });
  let index = Math.floor(Math.random() * squares.length);
  squares[index].classList.add("red");
}

function handleKeyPress(event) {
if (provera == true) {
    let squareNumber = event.keyCode - 49;
    if (squareNumber >= 0 && squareNumber < squares.length) {
      if (squares[squareNumber].classList.contains("red")) {
        generateRandomSquare();
        plusLive()
        scoreText.textContent = 'Счет: ' + score
      }else{
        minusLive()
      }
    }
}
}

window.addEventListener("keydown", handleKeyPress);


function plusLive() {
  score++
  liveScore++
  scoreText.style.color = 'gold'
  setTimeout(() => {
  scoreText.style.color = 'whiteSmoke'
  }, 500);
  if (liveScore >= 15) {
    if (lives < 10) {
      liveScore = 0, lives++, minusPlusLive()
    }
  }else{
    return
  }
}

function minusLive(){
      lives--
      minusPlusLive()
}

function minusPlusLive() {
  if (lives == 10){
    document.querySelector('#tenHeart').classList = 'fa-solid fa-heart fa-2xl'
    document.querySelector('#nineHeart').classList = 'fa-solid fa-heart fa-2xl'
    document.querySelector('#eightHeart').classList ='fa-solid fa-heart fa-2xl'
    document.querySelector('#sevenHeart').classList ='fa-solid fa-heart fa-2xl'
    document.querySelector('#sixHeart').classList =  'fa-solid fa-heart fa-2xl'
    document.querySelector('#fiveHeart').classList = 'fa-solid fa-heart fa-2xl'
    document.querySelector('#fourHeart').classList = 'fa-solid fa-heart fa-2xl'
    document.querySelector('#threeHeart').classList ='fa-solid fa-heart fa-2xl'
    document.querySelector('#twoHeart').classList =  'fa-solid fa-heart fa-2xl'
    document.querySelector('#oneHeart').classList =  'fa-solid fa-heart fa-2xl'
  }
  if (lives == 9) {
    document.querySelector('#tenHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#nineHeart').classList = 'fa-solid fa-heart fa-2xl'
    document.querySelector('#eightHeart').classList ='fa-solid fa-heart fa-2xl'
    document.querySelector('#sevenHeart').classList ='fa-solid fa-heart fa-2xl'
    document.querySelector('#sixHeart').classList =  'fa-solid fa-heart fa-2xl'
    document.querySelector('#fiveHeart').classList = 'fa-solid fa-heart fa-2xl'
    document.querySelector('#fourHeart').classList = 'fa-solid fa-heart fa-2xl'
    document.querySelector('#threeHeart').classList ='fa-solid fa-heart fa-2xl'
    document.querySelector('#twoHeart').classList =  'fa-solid fa-heart fa-2xl'
    document.querySelector('#oneHeart').classList =  'fa-solid fa-heart fa-2xl'
  }else if (lives == 8) {
    document.querySelector('#tenHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#nineHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#eightHeart').classList ='fa-solid fa-heart fa-2xl'
    document.querySelector('#sevenHeart').classList ='fa-solid fa-heart fa-2xl'
    document.querySelector('#sixHeart').classList =  'fa-solid fa-heart fa-2xl'
    document.querySelector('#fiveHeart').classList = 'fa-solid fa-heart fa-2xl'
    document.querySelector('#fourHeart').classList = 'fa-solid fa-heart fa-2xl'
    document.querySelector('#threeHeart').classList ='fa-solid fa-heart fa-2xl'
    document.querySelector('#twoHeart').classList =  'fa-solid fa-heart fa-2xl'
    document.querySelector('#oneHeart').classList =  'fa-solid fa-heart fa-2xl'
  }else if (lives == 7) {
    document.querySelector('#tenHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#nineHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#eightHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#sevenHeart').classList ='fa-solid fa-heart fa-2xl'
    document.querySelector('#sixHeart').classList =  'fa-solid fa-heart fa-2xl'
    document.querySelector('#fiveHeart').classList = 'fa-solid fa-heart fa-2xl'
    document.querySelector('#fourHeart').classList = 'fa-solid fa-heart fa-2xl'
    document.querySelector('#threeHeart').classList ='fa-solid fa-heart fa-2xl'
    document.querySelector('#twoHeart').classList =  'fa-solid fa-heart fa-2xl'
    document.querySelector('#oneHeart').classList =  'fa-solid fa-heart fa-2xl'
  }else if (lives == 6) {
    document.querySelector('#tenHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#nineHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#eightHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#sevenHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#sixHeart').classList =  'fa-solid fa-heart fa-2xl'
    document.querySelector('#fiveHeart').classList = 'fa-solid fa-heart fa-2xl'
    document.querySelector('#fourHeart').classList = 'fa-solid fa-heart fa-2xl'
    document.querySelector('#threeHeart').classList ='fa-solid fa-heart fa-2xl'
    document.querySelector('#twoHeart').classList =  'fa-solid fa-heart fa-2xl'
    document.querySelector('#oneHeart').classList =  'fa-solid fa-heart fa-2xl'
  }else if (lives == 5) {
    document.querySelector('#tenHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#nineHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#eightHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#sevenHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#sixHeart').classList =  'fa-regular fa-heart fa-2xl'
    document.querySelector('#fiveHeart').classList = 'fa-solid fa-heart fa-2xl'
    document.querySelector('#fourHeart').classList = 'fa-solid fa-heart fa-2xl'
    document.querySelector('#threeHeart').classList ='fa-solid fa-heart fa-2xl'
    document.querySelector('#twoHeart').classList =  'fa-solid fa-heart fa-2xl'
    document.querySelector('#oneHeart').classList =  'fa-solid fa-heart fa-2xl'
  }else if (lives == 4) {
    document.querySelector('#tenHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#nineHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#eightHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#sevenHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#sixHeart').classList =  'fa-regular fa-heart fa-2xl'
    document.querySelector('#fiveHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#fourHeart').classList = 'fa-solid fa-heart fa-2xl'
    document.querySelector('#threeHeart').classList ='fa-solid fa-heart fa-2xl'
    document.querySelector('#twoHeart').classList =  'fa-solid fa-heart fa-2xl'
    document.querySelector('#oneHeart').classList =  'fa-solid fa-heart fa-2xl'
  }else if (lives == 3) {
    document.querySelector('#tenHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#nineHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#eightHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#sevenHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#sixHeart').classList =  'fa-regular fa-heart fa-2xl'
    document.querySelector('#fiveHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#fourHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#threeHeart').classList ='fa-solid fa-heart fa-2xl'
    document.querySelector('#twoHeart').classList =  'fa-solid fa-heart fa-2xl'
    document.querySelector('#oneHeart').classList =  'fa-solid fa-heart fa-2xl'
  }else if (lives == 2) {
    document.querySelector('#tenHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#nineHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#eightHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#sevenHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#sixHeart').classList =  'fa-regular fa-heart fa-2xl'
    document.querySelector('#fiveHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#fourHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#threeHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#twoHeart').classList =  'fa-solid fa-heart fa-2xl'
    document.querySelector('#oneHeart').classList =  'fa-solid fa-heart fa-2xl'
  }else if (lives == 1) {
    document.querySelector('#tenHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#nineHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#eightHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#sevenHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#sixHeart').classList =  'fa-regular fa-heart fa-2xl'
    document.querySelector('#fiveHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#fourHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#threeHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#twoHeart').classList =  'fa-regular fa-heart fa-2xl'
    document.querySelector('#oneHeart').classList =  'fa-solid fa-heart fa-2xl'
  }else if (lives == 0) {
    document.querySelector('#tenHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#nineHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#eightHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#sevenHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#sixHeart').classList =  'fa-regular fa-heart fa-2xl'
    document.querySelector('#fiveHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#fourHeart').classList = 'fa-regular fa-heart fa-2xl'
    document.querySelector('#threeHeart').classList ='fa-regular fa-heart fa-2xl'
    document.querySelector('#twoHeart').classList =  'fa-regular fa-heart fa-2xl'
    document.querySelector('#oneHeart').classList =  'fa-regular fa-heart fa-2xl'
    stopGame()
    score = 0
    scoreText.textContent = 'Счет: ' + score
    gameStatus = 'level1'
    alert('Ты проиграл 😭😥😢😪😩😫😖')
   setTimeout(() => {
       lives = 10
       minusPlusLive()
   }, 1000);
  }
}

function playSound(audioName) {
  let audio = new Audio(audioName)
  audio.loop = true;
  audio.play()
}

playSound('super-mario-soundtrack.mp3') 

start.onclick = () => {
  startGame()
}

stop.onclick = () => {
  stopGame()
}

function startGame() {
 interval = setInterval(() => {
      generateRandomSquare()
 }, superSec);
 provera = true
}

function stopGame() {
  clearInterval(interval)
  provera = false
  squares.forEach(square => {
    square.classList.remove('red')
});
}