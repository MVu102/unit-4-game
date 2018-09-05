$(document).ready(function () {
    //Number Varibles
    var computerNumber = Math.floor(Math.random()* 101+19)
    var crystalNumbers = [3,4,5,7,9,11,12];
    var redNumber = crystalNumbers[Math.floor(Math.random()* crystalNumbers.length)];
    var blueNumber = crystalNumbers[Math.floor(Math.random()* crystalNumbers.length)];
    var greenNumber = crystalNumbers[Math.floor(Math.random()* crystalNumbers.length)];
    var whiteNumber = crystalNumbers[Math.floor(Math.random()* crystalNumbers.length)];

    $("#randomNumber").text(computerNumber);

    //Win and Losses varibles
    var wins = 0
    $("#winCount").text(wins);
    var losses = 0
    $("#lossesCount").text(losses);

    //Score
    var userTotal = 0;
    $("#userScore").text(userTotal);

    //Reset

    function reset(){
        computerNumber=Math.floor(Math.random()*101+19);
        $('#randomNumber').text(computerNumber);
        redNumber = crystalNumbers[Math.floor(Math.random()* crystalNumbers.length)];
        blueNumber = crystalNumbers[Math.floor(Math.random()* crystalNumbers.length)];
        greenNumber = crystalNumbers[Math.floor(Math.random()* crystalNumbers.length)];
        whiteNumber = crystalNumbers[Math.floor(Math.random()* crystalNumbers.length)];
        userTotal= 0;
        $('#userScore').text(userTotal);
        } 
    //Win
    function win(){
        wins++;
        $("#winCount").text(wins);
        reset();
    }
 
    //Lose
    function lose(){
        losses++;
        $("#lossesCount").text(losses);
        reset();
    }
    

    //Crystal Clicking
    $("#rubyNumber").on ("click", function(){
        userTotal = userTotal + redNumber;
        $("#userScore").text(userTotal); 
            if (userTotal === computerNumber){
              win();
            }
            else if ( userTotal > computerNumber){
              lose();
            }   
      })  
      
      $("#sapphireNumber").on ("click", function(){
        userTotal = userTotal + blueNumber;
        $("#userScore").text(userTotal); 
            if (userTotal === computerNumber){
              win();
            }
            else if ( userTotal > computerNumber){
              lose();
            }   
      })  

      $("#emeraldNumber").on ("click", function(){
        userTotal = userTotal + greenNumber;
        $("#userScore").text(userTotal); 
            if (userTotal === computerNumber){
              win();
            }
            else if ( userTotal > computerNumber){
              lose();
            }   
      })  

      $("#diamondNumber").on ("click", function(){
        userTotal = userTotal + whiteNumber;
        $("#userScore").text(userTotal); 
            if (userTotal === computerNumber){
              win();
            }
            else if ( userTotal > computerNumber){
              lose();
            }   
      })  


});