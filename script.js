getComputerChoice
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
        return "You Lose!";
      }else{
        return "Winner Winner Chicken Dinner!";
      }
  
    }else if(userChoice === "Paper"){
  
      if(compChoice === "Paper"){
        return "It`s a tie!";
      }else if(compChoice === "Scissors"){
        return "You Lose!";
      }else{
        return "Winner Winner Chicken Dinner!";
      }
  
    }
    else if(userChoice === "scissors"){
      
      if(compChoice === "scissors"){
        return "It`s a tie!";
      }else if(compChoice === "paper"){
        return "You Lose!";
      }else{
        return "Winner Winner Chicken Dinner!";
      }
  
    }
    else{
      return "It's rock, paper or scissors, not tic tac toe!"
    }
  }
  