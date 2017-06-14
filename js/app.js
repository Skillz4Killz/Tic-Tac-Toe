
(function ticTacToeGame(){
	const board = document.getElementById('board');
	const start = document.getElementById('start');
	const finish = document.getElementById('finish');
	const inputName = '<br><br><input type="text" placeholder="Player Name" id="player"><br><br><input type="checkbox" id="versus" value="computer"><label for="verus">Play Against A SuperComputer!</label><br><br>'
	const startButton = document.querySelector('.button');
	let endCounter = 0;
	let playerName;

	$(document).ready(() => {
		finish.style.display = 'none';
		board.style.display = 'none';
		$('#start header h1').after(inputName);
		let player = $('#player');
		$('#player').focus();
	})

	startButton.addEventListener('click', () => {
		if (player.value != '' && document.getElementById('versus').checked) {
		playerName = player.value;
		console.log(playerName);
		board.style.display = '';
		start.style.display = 'none';
		const insertName = '<h2>Player Name = ' + playerName + '</h2>';
		$('#board header h1').after(insertName);
		} else if (player.value != '' && document.getElementById('versus').checked == false) {
			playerName = player.value;
			board.style.display = '';
			start.style.display = 'none';
			const insertName = '<h2>Player Name = ' + playerName + '</h2>';
			$('#board header h1').after(insertName);
		} else {
			$('#player').focus();
			document.getElementById('player').style.borderColor = 'red';
		}
	})
	const player1 = document.getElementById('player1');
	player1.className += ' active';
	const box = document.getElementsByClassName('boxes')[0].children;

	function activateO () {
		player2.className = 'players';
		player1.className = 'players active';
	}

	function oWins () {
		finish.style.display = '';
		finish.className = 'screen screen-win screen-win-one'
		board.style.display = 'none';
		document.getElementsByClassName('message')[0].textContent = "Congrats " + playerName + ' . You are the winner.';
		
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
		document.getElementsByClassName('message')[0].textContent = "It's A Tie!";
	}

	function checkIfWon(x, y, z) {
        if (box[x].className === "box box-filled-1" && box[y].className === "box box-filled-1" && box[z].className === "box box-filled-1") {
			oWins();
		}
        else if (box[x].className === "box box-filled-2" && box[y].className === "box box-filled-2" && box[z].className === "box box-filled-2") {
            xWins();
        }
        else if (endCounter === 9) {
            tie();
        }
    }
    
    function checkEnd() {
		checkIfWon(0, 1, 2);
        checkIfWon(3, 4, 5);
        checkIfWon(6, 7, 8);
        checkIfWon(0, 3, 6);
        checkIfWon(1, 4, 7);
        checkIfWon(2, 5, 8);
        checkIfWon(0, 4, 8);
        checkIfWon(2, 4, 6);
    }

	function preventWin (x, y, z) {
		if (x.className == 'box box-filled-1' && y.className == 'box box-filled-1') {
			z.className = 'box box-filled-2';
			checkEnd();
			activateO();
		} else if (x.className == 'box box-filled-1' && z.className == 'box box-filled-1') {
			y.className = 'box box-filled-2';
			checkEnd();
			activateO();
		} else if (y.className == 'box box-filled-1' && z.className == 'box box-filled-1') {
			x.className = 'box box-filled-2';
			checkEnd();
			activateO();
		}
	}

	function makeMove (x) {
		if (x.className === 'box') {
			x.className = 'box box-filled-2';
			checkEnd();
			activateO();
		}
	}

	function vsComputer () {
		if (player2.className === 'players active') {
			preventWin(box[0], box[1], box[2]);
			preventWin(box[3], box[4], box[5]);
			preventWin(box[6], box[7], box[8]);
			preventWin(box[0], box[3], box[6]);
			preventWin(box[1], box[4], box[7]);
			preventWin(box[2], box[5], box[8]);
			preventWin(box[0], box[4], box[8]);
			preventWin(box[2], box[4], box[6]);
		} else {
			for (let i = 0; i < 9; i++) {
				switch(box[i].className === 'box box-filled-1' || box[i].className === 'box box-filled-2') {
					case true:
						break;
					case false:
						makeMove(box[i]);
						break;
				}
			}
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

	function clicking (x) {
		x.addEventListener('click', () => {
			if (player1.className === 'players active' && document.getElementById('versus').checked) {
				x.className += ' box-filled-1';
				player1.className = 'players';
				player2.className = 'players active';
				endCounter++;
				checkEnd();
				vsComputer();
			} else if (player1.className === 'players active') {
				x.className += ' box-filled-1';
				player1.className = 'players';
				player2.className = 'players active';
				endCounter++;
				checkEnd();
			} else {
				x.className += ' box-filled-2';
				activateO();
				endCounter++;
				checkEnd();
			}
		})
	}
	for (let i = 0; i < 9; i++) {
		hovering(box[i]);
		clicking(box[i]);
	}

	const endButton = document.getElementsByClassName('button')[1];
	
	endButton.addEventListener('click', () => {
		finish.style.display = 'none';
		board.style.display = '';
		for (let i = 0; i < 9; i++) {
			box[i].className = 'box';
		}
		endCounter = 0;
		activateO();
	})
})()