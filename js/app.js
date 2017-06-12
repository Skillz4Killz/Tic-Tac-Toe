(function() {
const board = document.getElementById('board');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const boxes = document.getElementsByClassName('boxes');
const finish = document.getElementById('finish');
const startHeader = $('#start header h1');
const startButton = document.querySelector('.button');
const start = document.getElementById('start');

startHeader.after('<br><br><input type="text" placeholder="Player Name" id="player"><br><br>');
finish.style.display = 'none';
board.style.display = 'none';

const player = document.getElementById('player');

startButton.addEventListener('click', () => {
     const playerName = player.value;
     start.style.display = 'none';
     board.style.display = '';
     player1

})

})()

// console.log(startButton);