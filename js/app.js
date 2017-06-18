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
	const player2;
	let player;
	let playerX;
	let playerXName;
	let versusAi;
	const player1 = document.getElementById('player1');
	let player1ClassString = player1.className;
	let player2ClassString = player2.className;
	const box = document.getElementsByClassName('boxes')[0].children;
	const endButton = document.getElementsByClassName('button')[1];

	// on page load prepare start screen and make input for names and checkbox focus on name
	$(document).ready(() => {
		finish.style.visibility = 'hidden';
		board.style.visibility = 'hidden';
		$('#start header h1').after(inputName);
		player = document.getElementById('player');
		playerX = document.getElementById('playerX');
		versusAi = document.getElementById('versus');
		player.focus();
	})
	function activeOrInactive (player) {
		if (player.includes('active')) {
			player.className = 'players'
		} else {
			player.className = 'players active'
		}
	}
	function prepareBoard() {
		playerName = player.value;
		board.style.visibility = 'visible';
		start.style.display = 'hidden';
		insertName = '<h2>Player Name = ' + playerName + '</h2>';
		$('#board header h1').after(insertName);
		activeOrInactive(player1);
	}
//when start clicked choose which program
	startButton.addEventListener('click', () => {
//Player vs Computer program initiate
		if (player.value != '' && versusAi.checked) {
			prepaeBorerd();
//player vs player program initiate
		} else if (player.value != '' && playerX.value != '' && versusAi.checked == false) {
			prepareBoard();
			playerXName = playerX.value;
			insertName = '<h2>Player X Name = ' + playerXName + '</h2>';
			$('#board header h1').after(insertName);
//throw error when no name entered
		} else {
			player.focus();
			player.style.borderColor = 'red';
			playerX.style.borderColor = 'red';
		}
	})
//place background images when hovering over a box depedning on player turn
	function hovering (boxes) {
		boxes.addEventListener('mouseover', () => {
			if (player1ClassString.includes('active')) {
				boxes.style.backgroundImage = 'url("img/o.svg")'
			} else {
				boxes.style.backgroundImage = 'url("img/x.svg")'
			}
			boxes.addEventListener('mouseout', () => {
				boxes.style.backgroundImage = ''
			})
		})
	}
	function isBoxEmpty (boxes) {
		if (boxes.className.include('box-filled-1') && boxes.include('box-filled-2')) {
			return true
		} else if (boxes.className.include('box-filled-1') == false && boxes.include('box-filled-2') == false) {
			return false
		}

	}
//run program based on which game type 2 player/computer
	function clicking (boxes) {
//if vs computer after the click assign the value to player O and do Computer turn
		boxes.addEventListener('click', function boxFilled() {
			if (player1.className === 'players active' && document.getElementById('versus').checked) {
				if (boxes.className.include('box-filled-1') == false && boxes.include('box-filled-2') == false) {
					boxes.className += ' box-filled-1';
					activeOrInactive(player1);
					activeOrInactive(player2);
					endCounter++;
					checkEnd();
					if (endCounter < 9) {
						vsComputer();
					}
				}	
//if 2 player after click assign the value to player O and make it player 2 turn
			} else if (player1ClassString.includes('active')) {
				if (isBoxEmpty(boxes) == true) {
					boxes.className += ' box-filled-1';
					player1.className = 'players';
					player2.className = 'players active';
					endCounter++;
					checkEnd();
				}
//if player 2 turn switch to player 1 turn
			} else {
				if (x.className != 'box box-filled-1' && x.className != 'box box-filled-2') {
					x.className += ' box-filled-2';
					activateO();
					endCounter++;b
					checkEnd();
				}
				
			}
		})
	}
//call all functions necessary to make each box have a hover and click function as above
	for (let i = 0; i < 9; i++) {
		hovering(box[i]);
		clicking(box[i]);
	}
//check if three in a row are filled and end game based on result using 3 parameters provided as 3 boxes to check
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
//when needing to check for win check each possible winning scenario
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
//switch to player 1 turn
	function activateO () {
		player2.className = 'players';
		player1.className = 'players active';
	}
//turn off board and give O player victory screen
	function oWins () {
		finish.style.display = '';
		finish.className = 'screen screen-win screen-win-one'
		board.style.display = 'none';
		document.getElementsByClassName('message')[0].textContent = "Congrats " + playerName + ' . You are the winner.';
	}
//turn off board and give X player victory screen or computer victory screen
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
//turn off board and give tie screen
	function tie () {
		finish.style.display = '';
		finish.className = 'screen screen-win screen-win-tie'
		board.style.display = 'none';
		document.getElementsByClassName('message')[0].textContent = "It's A Tie!";
	}
//when New game is clicked clear the board and make it player 1 turn to start again
	endButton.addEventListener('click', () => {
		finish.style.display = 'none';
		board.style.display = '';
		for (let i = 0; i < 9; i++) {
			box[i].className = 'box';
		}
		endCounter = 0;
		activateO();
		for (let i = 0; i < 9; i++) {
			hovering(box[i]);
			clicking(box[i]);
		}
		console.log('new game START');
	})
//FOR AI = check if 2 in a row are selected by opponent and block their victory
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
//FOR AI= If there is no move to prevent a victory then make a move in a box
	function makeMove (x) {
		if (x.className === 'box') {
			x.className = 'box box-filled-2';
			checkEnd();	
			activateO();
		}
	}
/*FOR AI = if computer turn create a var that will call func to check if that three in a row needs to be 
blocked, if not check next three etc until all possible vitory is made certain is not necessary. Then
make a while loop to keep making a random number and make a move for it IF that box is empty */
	function vsComputer () {
		if (player2.className === 'players active') {
			console.log('the amount is ' + endCounter);
			let preventChecker = preventWin(box[0], box[1], box[2]);
			if (preventChecker === false) {
				preventChecker = preventWin(box[3], box[4], box[5]);
				if (preventChecker === false) {
					preventChecker = preventWin(box[6], box[7], box[8]);
					if (preventChecker === false) {
						preventChecker = preventWin(box[0], box[3], box[6]);
						if (preventChecker === false) {
							preventChecker = preventWin(box[1], box[4], box[7]);
							if (preventChecker === false) {
								preventChecker = preventWin(box[2], box[5], box[8]);
								if (preventChecker === false) {
									preventChecker = preventWin(box[0], box[4], box[8]);
									if (preventChecker === false) {
										preventChecker = preventWin(box[2], box[4], box[6]);
										if (preventChecker === false) {
												endCounter++;
											while (endCounter < 9) {
												let randomNum = Math.floor(Math.random() * 9);
												console.log(randomNum);
												if (box[randomNum].className != 'box box-filled-1' && box[randomNum].className != 'box box-filled-2') {
													console.log('making move ___________________');
													makeMove(box[randomNum]);
													console.log('the amount is now ' + endCounter);
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