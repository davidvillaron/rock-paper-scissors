const typeWheel = (type1, type2) => {
  // win lose matrix.
  const matrix = [
    [2, 1, 0], //rock
    [0, 2, 1], //scissors
    [1, 0, 2] //paper
  ];
  // Win logic assignment
  const result = {0: 'You lose!', 1: 'You Win!' , 2: 'You tied!'};

  // elem mapping.
  const elemMap = {'rock': 0,'scissors': 1,'paper': 2};
  
  const winLoseResult= result[matrix[elemMap[type1]][elemMap[type2]]];
  return winLoseResult;
};
// available options.
const listElems = ['rock', 'paper', 'scissors'];

// computer random choice.
const computerChoice = () => {
  let cpuSlct = listElems[Math.floor(Math.random() * listElems.length)]
  cpuSelection(cpuSlct);
  return cpuSlct;
};

const userName = prompt('What is your name?');
let playerPointDashboard = document.querySelector('#playerPoints');
let computerPointDashboard = document.querySelector('#computerPoints');
let btnSelection = document.querySelectorAll('.mn-btn-selct');
const refresh = document.getElementById('resetButton');
const tie = document.getElementById('tieBox');
const tieSpan = document.createElement('span');
const boomContainer = document.getElementById('boomContainer');

const rfrshFunc = () => {
  location.reload();
};
const refreshBtn = refresh.addEventListener('click', () => {
  location.reload();
})

const booom = boomBtn.addEventListener('click', () => {
  // Adding a Boom to button.
  const divTag = document.createElement('div');
  divTag.innerHTML = '<img src="img/boom.webp" alt="boom" id="boomBGtwo">';
  document.body.insertAdjacentElement('afterbegin', divTag);
  setTimeout(rfrshFunc, 8000);

  alert('Boom! congratulations ' + userName + ' you have won the game!');
});

//Results after each selection.
let matchResults = (results) => {

  let div = document.getElementById('game-result-Box');
  div.innerHTML = results;
  if (results === 'You Win!') scoreAdd(playerPointDashboard);
  if (results === 'You lose!') scoreAdd(computerPointDashboard);
  if (results === 'You tied!') scoreAdd(tie);

  let pTracker = playerPointDashboard.innerText;
  let cTracker = computerPointDashboard.innerText;
  bestOutOfThree(pTracker, cTracker);

  return results;
};

// Score agregator.
function scoreAdd(score) {
  score.innerText = parseInt(score.innerText) + 1;
};

//Best out of 3 function.
const bestOutOfThree = (playerScore, cpuScore) => {

  if (parseInt(playerScore) == 3) {
    alert('Congratulations ' + userName + ' you have WON! The game!');
    rfrshFunc();
  };
  if (parseInt(cpuScore) == 3) {
    alert('Sorry ' + userName + ' you have LOST the game! CPU winns!');
    rfrshFuncc();
  };
};


// Enter your name.
const usernameInput = (userName) => {
  const spanName = document.getElementsByClassName('playerName');
  spanName[0].textContent = userName;
};
usernameInput(userName);

//Tracking what hand we click.
let gamePhase = btnSelection.forEach(btn => {
  btn.addEventListener('click', e => {

    let btnClicked = btn.textContent;
    let results = typeWheel(btnClicked, computerChoice());
    playerClickedSelection(btnClicked);
    matchResults(results);
  });
});

//Changing to selected hand in dashboard.
let boardHand = {
  'rock': "img/board-rock.svg",
  'paper': "img/board-paper.svg",
  'scissors': "img/board-scissors.svg"
};


// What we actually clicked on.
let playerClickedSelection = (btnClicked) => {
  document.getElementById('playerChosenHand').src = boardHand[btnClicked];
  return btnClicked;
};

// What the computer selects.
let cpuSelection = (compSelection) => {
  document.getElementById('cpuChoseHand').src = boardHand[compSelection];
};