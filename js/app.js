
(function ticTacToeGame(){
	const board = document.getElementById('board');
	const start = document.getElementById('start');
	const finish = document.getElementById('finish');
	const inputName = '<br><br><input type="text" placeholder="Player O Name" id="player"><input type="text" placeholder="Player X Name" id="playerX"><br><br><input type="checkbox" id="versus" value="computer" checked><label for="verus">Play Against A SuperComputer!</label><br><br>'
	const startButton = document.querySelector('.button');
	let endCounter = 0;
	let playerName1;
	let playerName2;
	let insertName;
	let playerX;
	let playerXName;
	const player1 = document.getElementById('player1');
	const box = document.getElementsByClassName('boxes')[0].children;
	const endButton = document.getElementsByClassName('button')[1];
	

	$(document).ready(() => {
		finish.style.display = 'none';
		board.style.display = 'none';
		$('#start header h1').after(inputName);
		let player = $('#player');
		playerX = $('#playerX');
		$('#player').focus();
	})

	

	startButton.addEventListener('click', () => {
		if (player.value != '' && document.getElementById('versus').checked) {
			playerName = player.value;
			board.style.display = '';
			start.style.display = 'none';
			insertName = '<h2>Player Name = ' + playerName + '</h2>';
			$('#board header h1').after(insertName);
			player1.className += ' active';
		} else if (player.value != '' && playerX.value != '' && document.getElementById('versus').checked == false) {
			playerName = player.value;
			playerXName = playerX.value;
			board.style.display = '';
			start.style.display = 'none';
			insertName = '<h2>Player O Name = ' + playerName + '</h2>';
			$('#board header h1').after(insertName);
			insertName = '<h2>Player X Name = ' + playerXName + '</h2>';
			$('#board header h1').after(insertName);
			player1.className += ' active';
		} else {
			$('#player').focus();
			player.style.borderColor = 'red';
			playerX.style.borderColor = 'red';
		}
	})

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
				if (endCounter < 9) {
					vsComputer();
				}
				
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
		if (document.getElementById('versus').checked) {
			document.getElementsByClassName('message')[0].textContent = 'Darn, it seems the supercomputer won';
		} else {
		document.getElementsByClassName('message')[0].textContent = "Congrats " + playerXName + ' . You are the winner.';
		}
	}

	function tie () {
		finish.style.display = '';
		finish.className = 'screen screen-win screen-win-tie'
		board.style.display = 'none';
		document.getElementsByClassName('message')[0].textContent = "It's A Tie!";
	}

	endButton.addEventListener('click', () => {
		finish.style.display = 'none';
		board.style.display = '';
		for (let i = 0; i < 9; i++) {
			box[i].className = 'box';
		}
		endCounter = 0;
		activateO();
	})
	
	function preventWin (x, y, z) {
		if (x.className == 'box box-filled-1' && y.className == 'box box-filled-1' && z.className != 'box box-filled-2') {
			z.className = 'box box-filled-2';
			checkEnd();
			endCounter++;
			activateO();
			return true;
		} else if (x.className == 'box box-filled-1' && z.className == 'box box-filled-1' && y.className != 'box box-filled-2') {
			y.className = 'box box-filled-2';
			checkEnd();
			endCounter++;
			activateO();
			return true;
		} else if (y.className == 'box box-filled-1' && z.className == 'box box-filled-1' && x.className != 'box box-filled-2') {
			x.className = 'box box-filled-2';
			checkEnd();
			endCounter++;
			activateO();
			return true;
		} else {
			return false;
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
			console.log('the amount is ' + endCounter);
			let preventChecker = preventWin(box[0], box[1], box[2]);
			if (preventChecker === false) {
				console.log('Didnt blocked top row');
				preventChecker = preventWin(box[3], box[4], box[5]);
				if (preventChecker === false) {
					console.log('Didnt blocked middle row');
					preventChecker = preventWin(box[6], box[7], box[8]);
					if (preventChecker === false) {
						console.log('Didnt blocked bottom row');
						preventChecker = preventWin(box[0], box[3], box[6]);
						if (preventChecker === false) {
							console.log('Didnt blocked left column');
							preventChecker = preventWin(box[1], box[4], box[7]);
							if (preventChecker === false) {
								console.log('Didnt blocked middle column');
								preventChecker = preventWin(box[2], box[5], box[8]);
									if (preventChecker === false) {
										console.log('Didnt blocked right column');
										preventChecker = preventWin(box[0], box[4], box[8]);
											if (preventChecker === false) {
												console.log('Didnt blocked 0-8 diagnol');
												preventChecker = preventWin(box[2], box[4], box[6]);
											 	if (preventChecker === false) {
													 console.log('Didnt blocked 2-6 diagnol');
													 endCounter++;
													while (endCounter < 9) {
														let randomNum = Math.floor(Math.random() * 9);
														console.log(randomNum);
														if (box[randomNum].className != 'box box-filled-1' && box[randomNum].className != 'box box-filled-2') {
															console.log('making move ___________________');
															makeMove(box[randomNum]);
															break;
														}
													}
												}
											}
									}
							}
						}
					}
					
				}
			}
		} 
	}
})()