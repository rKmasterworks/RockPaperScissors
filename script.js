//func computerchoice
function computerChoice(){
    let compChoice = Math.floor(Math.random() * 3) + 1;
//selecting 1 rock 2 paper 3 scissors
if(compChoice === 1){
    compChoice = "Rock";
}else if(compChoice === 2)
    compChoice = "Paper"
else{
compChoice = "Scissors"
}
//return value
return compChoice;
}

function playRound(userChoice, compChoice) {
    if(userChoice === "Rock"){
  
      if(compChoice === "Rock"){
        return "It`s a tie!";
      }else if(compChoice === "Paper"){
        return "Ha! You're a loser!";
      }else{
        return "Winner Winner Chicken Dinner!";
      }
  
    }else if(userChoice === "Paper"){
  
      if(compChoice === "Paper"){
        return "It`s a tie!";
      }else if(compChoice === "Scissors"){
        return "Ha! You're a loser!";
      }else{
        return "Winner Winner Chicken Dinner!";
      }
  
    }
    else if(userChoice === "scissors"){
      
      if(compChoice === "scissors"){
        return "It`s a tie!";
      }else if(compChoice === "paper"){
        return "Ha! You're a loser!";
      }else{
        return "Winner Winner Chicken Dinner!";
      }
  
    }
    else{
      return "It's rock, paper or scissors, not tic tac toe!"
    }
  }
  function playGame(){
    // User Wins
    let countUserWins = 0;
    // Computer Wins
    let countCompWins = 0;
    for(let i = 1, j = 0; i <= 5; i++){
  
      // Waiting for user choice
      let userChoice = prompt("Rock, Paper or Scissors?")();
  
      // Computer choice and return value
      let compChoice = computerChoice();
  
      // Round result
      let result = playRound(userChoice, compChoice);
  
      // Counting wins
      if(result === "Winner Winner chicken dinner!"){
        countUserWins++;
        console.log("User - " + userChoice + " Computer - " + compChoice);
        j++;
      }else if(result === "Ha! You're a loser"){
        countCompWins++;
        console.log("User - " + userChoice + " Computer - " + compChoice);
        j++
      }else if(result === "Draw!"){
        countUserWins++;
        countCompWins++;
        console.log("User - " + userChoice + " Computer - " + compChoice);
        i = j;
      }else {
        i = j;
      }
  
      // Display user and computer wins
      console.log("User - " + countUserWins + " Computer - " + countCompWins + "; " + result);
      console.log(" ")
    }
  }
  
  playGame();