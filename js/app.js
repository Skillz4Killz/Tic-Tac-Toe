(function ticTacToeGame(){
	const board = document.getElementById('board');
	const start = document.getElementById('start');
	const finish = document.getElementById('finish');
	const inputName = '<br><br><input type="text" placeholder="Player Name" id="player"><br><br>'
	const startButton = document.querySelector('.button');
	let endCounter = 0;

	$(document).ready(() => {
		finish.style.display = 'none';
		board.style.display = 'none';
		$('#start header h1').after(inputName);
		let player = $('#player');
		$('#player').focus();
	})
	startButton.addEventListener('click', () => {
		if (player.value != '') {
		const playerName = player.value;
		board.style.display = '';
		start.style.display = 'none';
		const insertName = '<h2>Player Name = ' + playerName + '</h2>';
		$('#board header h1').after(insertName);
		} else {
			$('#player').focus();
			document.getElementById('player').style.borderColor = 'red';
		}
	})
	const player1 = document.getElementById('player1')
	player1.className += ' active';
	
	box0 = document.getElementsByClassName('box')[0];
	box1 = document.getElementsByClassName('box')[1];
	box2 = document.getElementsByClassName('box')[2];
	box3 = document.getElementsByClassName('box')[3];
	box4 = document.getElementsByClassName('box')[4];
	box5 = document.getElementsByClassName('box')[5];
	box6 = document.getElementsByClassName('box')[6];
	box7 = document.getElementsByClassName('box')[7];
	box8 = document.getElementsByClassName('box')[8];

	function oWins () {
		finish.style.display = '';
		finish.className = 'screen screen-win screen-win-one'
		board.style.display = 'none';
	}

	function xWins () {
		finish.style.display = '';
		finish.className = 'screen screen-win screen-win-two'
		board.style.display = 'none';
	}

	function tie () {
		finish.style.display = '';
		finish.className = 'screen screen-win screen-win-tie'
		board.style.display = 'none';
		document.getElementById('message').textContent = "It's A Tie!";
	}

	function checkEnd () {
		if (box0.className == 'box box-filled-1' && box1.className == 'box box-filled-1' && box2.className == 'box box-filled-1') {
			oWins();
		} else if (box0.className == 'box box-filled-2' && box1.className == 'box box-filled-2' && box2.className == 'box box-filled-2') {
			xWins();
		} else if (box3.className == 'box box-filled-1' && box4.className == 'box box-filled-1' && box5.className == 'box box-filled-1') {
			oWins();

		} else if (box3.className == 'box box-filled-2' && box4.className == 'box box-filled-2' && box5.className == 'box box-filled-2') {
			xWins();
		} else if (box3.className == 'box box-filled-1' && box4.className == 'box box-filled-1' && box5.className == 'box box-filled-1') {
			oWins();
		} else if (box3.className == 'box box-filled-2' && box4.className == 'box box-filled-2' && box5.className == 'box box-filled-2') {
			xWins();
		} else if (box6.className == 'box box-filled-1' && box7.className == 'box box-filled-1' && box8.className == 'box box-filled-1') {
			oWins();
		} else if (box6.className == 'box box-filled-2' && box7.className == 'box box-filled-2' && box8.className == 'box box-filled-2') {
			xWins();
		} else if (box0.className == 'box box-filled-1' && box3.className == 'box box-filled-1' && box6.className == 'box box-filled-1') {
			oWins();
		} else if (box0.className == 'box box-filled-2' && box3.className == 'box box-filled-2' && box6.className == 'box box-filled-2') {
			xWins();
		} else if (box1.className == 'box box-filled-1' && box4.className == 'box box-filled-1' && box7.className == 'box box-filled-1') {
			oWins();
		} else if (box1.className == 'box box-filled-2' && box4.className == 'box box-filled-2' && box7.className == 'box box-filled-2') {
			xWins();
		} else if (box2.className == 'box box-filled-1' && box5.className == 'box box-filled-1' && box8.className == 'box box-filled-1') {
			oWins();
		} else if (box2.className == 'box box-filled-2' && box5.className == 'box box-filled-2' && box8.className == 'box box-filled-2') {
			xWins();
		} else if (box0.className == 'box box-filled-1' && box4.className == 'box box-filled-1' && box8.className == 'box box-filled-1') {
			oWins();
		} else if (box0.className == 'box box-filled-2' && box4.className == 'box box-filled-2' && box8.className == 'box box-filled-2') {
			xWins();
		} else if (box6.className == 'box box-filled-1' && box4.className == 'box box-filled-1' && box2.className == 'box box-filled-1') {
			oWins();
		} else if (box6.className == 'box box-filled-2' && box4.className == 'box box-filled-2' && box2.className == 'box box-filled-2') {
			xWins();
		} else if (endCounter === 9) {
			tie();
		}
	}

	function hovering (x) {
		x.addEventListener('mouseover', () => {
			if (player1.className === 'players active') {
				x.style.backgroundImage = 'url("img/o.svg")'
			} else {
				x.style.backgroundImage = 'url("img/x.svg")'
			}
			x.addEventListener('mouseout', () => {
				x.style.backgroundImage = ''
			})
		})
	}

	function clicking (x, y) {
		x.addEventListener('click', () => {
			if (player1.className === 'players active') {
				x.className += ' box-filled-1';
				player1.className = 'players';
				player2.className = 'players active';
				endCounter++;
				checkEnd();
			} else {
				x.className += ' box-filled-2';
				player1.className = 'players active';
				player2.className = 'players';
				endCounter++;
				checkEnd();
			}
		})
	}

	hovering(box0);
	hovering(box1);
	hovering(box2);
	hovering(box3);
	hovering(box4);
	hovering(box5);
	hovering(box6);
	hovering(box7);
	hovering(box8);
	clicking(box0);
	clicking(box1);
	clicking(box2);
	clicking(box3);
	clicking(box4);
	clicking(box5);
	clicking(box6);
	clicking(box7);
	clicking(box8);
	const endButton = document.getElementsByClassName('button')[1];
	endButton.addEventListener('click', () => {
		finish.style.display = 'none';
		board.style.display = '';
		
	})





})()
// console.log('testing');