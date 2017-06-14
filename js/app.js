
(function ticTacToeGame(){
	const board = document.getElementById('board');
	const start = document.getElementById('start');
	const finish = document.getElementById('finish');
	const inputName = '<br><br><input type="text" placeholder="Player Name" id="player"><br><br><input type="checkbox" id="versus" value="computer"><label for="verus">Play Against A SuperComputer!</label><br><br>'
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
		} else if (document.getElementById('versus').checked) {
			board.style.display = '';
			start.style.display = 'none';
			vsComputer();
		} else {
			$('#player').focus();
			document.getElementById('player').style.borderColor = 'red';
		}
	})
	const player1 = document.getElementById('player1')
	player1.className += ' active';
	const box = document.getElementsByClassName('boxes')[0].children;
	
	
	// box0 = document.getElementsByClassName('box')[0];
	// box1 = document.getElementsByClassName('box')[1];
	// box2 = document.getElementsByClassName('box')[2];
	// box3 = document.getElementsByClassName('box')[3];
	// box4 = document.getElementsByClassName('box')[4];
	// box5 = document.getElementsByClassName('box')[5];
	// box6 = document.getElementsByClassName('box')[6];
	// box7 = document.getElementsByClassName('box')[7];
	// box8 = document.getElementsByClassName('box')[8];

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

	function checkEnd () {
		if (box[0].className == 'box box-filled-1' && box[1].className == 'box box-filled-1' && box[2].className == 'box box-filled-1') {
			oWins();
		} else if (box[0].className == 'box box-filled-2' && box[1].className == 'box box-filled-2' && box[2].className == 'box box-filled-2') {
			xWins();
		} else if (box[3].className == 'box box-filled-1' && box[4].className == 'box box-filled-1' && box[5].className == 'box box-filled-1') {
			oWins();

		} else if (box[3].className == 'box box-filled-2' && box[4].className == 'box box-filled-2' && box[5].className == 'box box-filled-2') {
			xWins();
		} else if (box[3].className == 'box box-filled-1' && box[4].className == 'box box-filled-1' && box[5].className == 'box box-filled-1') {
			oWins();
		} else if (box[3].className == 'box box-filled-2' && box[4].className == 'box box-filled-2' && box[5].className == 'box box-filled-2') {
			xWins();
		} else if (box[6].className == 'box box-filled-1' && box[7].className == 'box box-filled-1' && box[8].className == 'box box-filled-1') {
			oWins();
		} else if (box[6].className == 'box box-filled-2' && box[7].className == 'box box-filled-2' && box[8].className == 'box box-filled-2') {
			xWins();
		} else if (box[0].className == 'box box-filled-1' && box[3].className == 'box box-filled-1' && box[6].className == 'box box-filled-1') {
			oWins();
		} else if (box[0].className == 'box box-filled-2' && box[3].className == 'box box-filled-2' && box[6].className == 'box box-filled-2') {
			xWins();
		} else if (box[1].className == 'box box-filled-1' && box[4].className == 'box box-filled-1' && box[7].className == 'box box-filled-1') {
			oWins();
		} else if (box[1].className == 'box box-filled-2' && box[4].className == 'box box-filled-2' && box[7].className == 'box box-filled-2') {
			xWins();
		} else if (box[2].className == 'box box-filled-1' && box[5].className == 'box box-filled-1' && box[8].className == 'box box-filled-1') {
			oWins();
		} else if (box[2].className == 'box box-filled-2' && box[5].className == 'box box-filled-2' && box[8].className == 'box box-filled-2') {
			xWins();
		} else if (box[0].className == 'box box-filled-1' && box[4].className == 'box box-filled-1' && box[8].className == 'box box-filled-1') {
			oWins();
		} else if (box[0].className == 'box box-filled-2' && box[4].className == 'box box-filled-2' && box[8].className == 'box box-filled-2') {
			xWins();
		} else if (box[6].className == 'box box-filled-1' && box[4].className == 'box box-filled-1' && box[2].className == 'box box-filled-1') {
			oWins();
		} else if (box[6].className == 'box box-filled-2' && box[4].className == 'box box-filled-2' && box[2].className == 'box box-filled-2') {
			xWins();
		} else if (endCounter === 9) {
			tie();
		}
	}

	function preventWin (x, y, z) {
		if (x.className == 'box box-filled-1' && y.className == 'box box-filled-1') {
			z.className = 'box box-filled-2';
			checkEnd();
			player2.className = 'players';
			player1.className = 'players active';
		} else if (x.className == 'box box-filled-1' && z.className == 'box box-filled-1') {
			y.className = 'box box-filled-2';
			checkEnd();
			player2.className = 'players';
			player1.className = 'players active';
		} else if (y.className == 'box box-filled-1' && z.className == 'box box-filled-1') {
			x.className = 'box box-filled-2';
			checkEnd();
			player2.className = 'players';
			player1.className = 'players active';
		}
	}

	function makeMove (x) {
		if (x.className === 'box') {
			x.className = 'box box-filled-2';
			checkEnd();
			player2.className = 'players';
			player1.className = 'players active';
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
				for (let i = 0; i < 9; i++) {
					if (box[i].className === 'box box-filled-1' || box[i].className === 'box box-filled-2')

				}
				makeMove(box[i]);
			}
		}
	}
	switch(box[i].className === 'box box-filled-1' || box[i].className === 'box box-filled-2') {
    case true:
        checkedBoxes += i;
        break;
    case n:
        code block
        break;
    default:
        code block
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
			if (player1.className === 'players active') {
				x.className += ' box-filled-1';
				player1.className = 'players';
				player2.className = 'players active';
				endCounter++;
				checkEnd();
				vsComputer();
			} else {
				x.className += ' box-filled-2';
				player1.className = 'players active';
				player2.className = 'players';
				endCounter++;
				checkEnd();
			}
		})
	}
	for (let i = 0; i < 9; i++) {
		hovering(box[i]);
		clicking(box[i]);
	}
	// hovering(box0);
	// hovering(box1);
	// hovering(box2);
	// hovering(box3);
	// hovering(box4);
	// hovering(box5);
	// hovering(box6);
	// hovering(box7);
	// hovering(box8);
	// clicking(box0);
	// clicking(box1);
	// clicking(box2);
	// clicking(box3);
	// clicking(box4);
	// clicking(box5);
	// clicking(box6);
	// clicking(box7);
	// clicking(box8);
	
	const endButton = document.getElementsByClassName('button')[1];
	
	endButton.addEventListener('click', () => {
		finish.style.display = 'none';
		board.style.display = '';
		box0.className = 'box';
		box1.className = 'box';
		box2.className = 'box';
		box3.className = 'box';
		box4.className = 'box';
		box5.className = 'box';
		box6.className = 'box';
		box7.className = 'box';
		box8.className = 'box';
		endCounter = 0;
		player2.className = 'players';
		player1.className = 'players active';
	})

	

})()
// console.log('testing');
