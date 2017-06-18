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
	let player;
	let playerX;
	let playerXName;
	let versusAi;
	const player1 = document.getElementById('player1');
	const player2 = document.getElementById('player2');
	const box = document.getElementsByClassName('boxes')[0].children;
	const endButton = document.getElementsByClassName('button')[1];
	const message = document.getElementsByClassName('message')[0];

	// on page load prepare start screen and make input for names and checkbox focus on name
	$(document).ready(() => {
		finish.style.visibility = 'hidden';
		board.style.visibility = 'hidden';
		$('#start header h1').after(inputName);
		player = document.getElementById('player');
		playerX = document.getElementById('playerX');
		versusAi = document.getElementById('versus').checked;
		player.focus();
	})
	function activeOrInactive (player) {
		if (player.className.includes('active')) {
			player.className = 'players'
		} else {
			player.className = 'players active'
		}
	}
	function prepareBoard() {
		playerName = player.value;
		board.style.visibility = 'visible';
		start.style.visibility = 'hidden';
		insertName = '<h2>Player Name = ' + playerName + '</h2>';
		$('#board header h1').after(insertName);
		activeOrInactive(player1);
	}
//when start clicked choose which program
	startButton.addEventListener('click', () => {
//Player vs Computer program initiate
		if (player.value != '' && versusAi) {
			prepareBoard();
//player vs player program initiate
		} else if (player.value != '' && playerX.value != '' && versusAi == false) {
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
			if (player1.className.includes('active')) {
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
		if (boxes.className.includes('box-filled-1') && boxes.includes('box-filled-2')) {
			return true
		} else if (boxes.className.includes('box-filled-1') == false && boxes.includes('box-filled-2') == false) {
			return false
		}

	}
//run program based on which game type 2 player/computer
	function clicking (boxes) {
//if vs computer after the click assign the value to player O and do Computer turn
		boxes.addEventListener('click', function boxFilled() {
			if (player1.className.includes('active') && versusAi) {
				if (boxes.className.includes('box-filled-1') == false && boxes.className.includes('box-filled-2') == false) {
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
			} else if (player1.className.includes('active')) {
				if (isBoxEmpty(boxes) == true) {
					boxes.className += ' box-filled-1';
					activeOrInactive(player1);
					activeOrInactive(player2);
					endCounter++;
					checkEnd();
				}
//if player 2 turn switch to player 1 turn
			} else {
				if (boxes.className.includes('box-filled-1') == false && boxes.includes('box-filled-2') == false) {
					boxes.className += ' box-filled-2';
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
	function checkIfWon(first, second, third) {
        if (box[first].className === "box box-filled-1" && box[second].className === "box box-filled-1" && box[third].className === "box box-filled-1") {
			oWins();
		}
        else if (box[first].className === "box box-filled-2" && box[second].className === "box box-filled-2" && box[third].className === "box box-filled-2") {
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
		activeOrInactive(player1);
		activeOrInactive(player2);
	}
	function prepareWin () {
		finish.style.visibility = 'visible';
		board.style.visibility = 'hidden';
		finish.className = 'screen screen-win';
	}
//turn off board and give O player victory screen
	function oWins () {
		prepareWin();
		finish.className += ' screen-win-one'
		message.textContent = "Congrats " + playerName + ' . You are the winner.';
	}
//turn off board and give X player victory screen or computer victory screen
	function xWins () {
		prepareWin();
		finish.className += ' screen-win-two'
		if (versusAi == true) {
			message.textContent = 'Darn, it seems the supercomputer won';
		} else {
		message.textContent = "Congrats " + playerXName + ' . You are the winner.';
		}
	}
//turn off board and give tie screen
	function tie () {
		prepareWin();
		finish.className += ' screen-win-tie';
		message.textContent = "It's A Tie!";
	}
//when New game is clicked clear the board and make it player 1 turn to start again
	endButton.addEventListener('click', () => {
		finish.style.visibility = 'hidden';
		board.style.visibility = 'visible';
		for (let i = 0; i < 9; i++) {
			box[i].className = 'box';
		}
		endCounter = 0;
		player1.className = 'players active';
		player2.className = 'players';
		for (let i = 0; i < 9; i++) {
			hovering(box[i]);
			clicking(box[i]);
		}
		console.log('new game START');
	})
//FOR AI = check if 2 in a row are selected by opponent and block their victory
	function preventWin (first, second, third) {
		if (first.className.includes('box-filled-1') && second.className.includes('box-filled-1') && third.className.includes('box-filled-2') == false) {
			third.className += ' box-filled-2';
			checkEnd();
			endCounter++;
			activateO();
			return true;
		} else if (first.className.includes('box-filled-1') && third.className.includes('box-filled-1') && second.className.includes('box-filled-2') == false) {
			second.className += ' box-filled-2';
			checkEnd();
			endCounter++;
			activateO();
			return true;
		} else if (second.className.includes('box-filled-1') && third.className.includes('box-filled-1') && first.className.includes('box-filled-2') == false) {
			first.className += ' box-filled-2';
			checkEnd();
			endCounter++;
			activateO();
			return true;
		} else {
			return false;
		}
	}
//FOR AI= If there is no move to prevent a victory then make a move in a box
	function makeMove (boxes) {
		if (boxes.className === 'box') {
			boxes.className += ' box-filled-2';
			checkEnd();	
			activateO();
		}
	}
/*FOR AI = if computer turn create a var that will call func to check if that three in a row needs to be 
blocked, if not check next three etc until all possible vitory is made certain is not necessary. Then
make a while loop to keep making a random number and make a move for it IF that box is empty */
	function vsComputer () {
		if (player2.className.includes('active')) {
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