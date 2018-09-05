//Number Varibles
var computerNumber = Math.floor(Math.random()* 101+19)
var crystalNumbers = [3,4,5,7,9,11,12];
var redNumber = crystalNumbers[Math.floor(Math.random()* crystalNumbers.length)];
var blueNumber = crystalNumbers[Math.floor(Math.random()* crystalNumbers.length)];
var greenNumber = crystalNumbers[Math.floor(Math.random()* crystalNumbers.length)];
var whiteNumber = crystalNumbers[Math.floor(Math.random()* crystalNumbers.length)];

$('#randomNumber').text(computerNumber);

//Win
var winCount = 0

//Losess
var lossesCount = 0

//Reset

//Score
var userScore = 0;
$("userScore").text(userScore);