
/* pseudocode

1. make a function called getComputerChoice. 
2. return randomly string Rock Papper OR scissors. 
    - make sure return in right one. 
3. Make a function that plays a single round of game and create two functions
    - playerSelection 
    - computerSelection
4. Inside of computerSelection return winner or lose.
    - You Lose!. 
5. make sure return string the outcomes. 
6. make a game() function and call the playRound function inside of  this one to play
a 5 round game that KEEP SCORE. 
7. Report a winner or loser at the end. 

 */

console.log(game());

function game(){

    const playAround = 5; 
    var finalScore = playRound(playAround);

    console.log("********************************************");
    console.log("Total Score");
    console.log("Player's Score: " +finalScore.winsCounterPlayer);
    console.log("Computer's Score: " +finalScore.winCounterComp);
    console.log("Draw Score: " +finalScore.drawCounter);


    if(finalScore.winsCounterPlayer > finalScore.winCounterComp)
        console.log("You Win the Game!");
    else if(finalScore.winsCounterPlayer < finalScore.winCounterComp)
        console.log("You Lost the Game.");
    else if(finalScore.winsCounterPlayer === finalScore.winCounterComp)
        console.log("Draw. Please Play Again!");
        
        
}

function playRound(playAround){

    var winsCounterPlayer = 0;
    var winCounterComp = 0;
    var drawCounter = 0;

    for(var i = 0; i < playAround; i++)
    {
        var stringMessage = computerSelection();
        if(stringMessage === 1)
            winsCounterPlayer++;
        else if(stringMessage === 0)
            winCounterComp++;
        else if(stringMessage ===2)
            drawCounter++;
        else
        {
            alert("WRONG INPUT");
            break;
        }
       
        /* Update Score each time  */
        console.log("Player's Score: " + winsCounterPlayer);
        console.log("Computer's Score: " + winCounterComp);
        console.log("Draw Score: " + drawCounter);
        
    }

    return {winsCounterPlayer,winCounterComp,drawCounter};
}

function getComputerChoice(){
    var pickRandNum = Math.floor(Math.random() * 3) + 1 ; 
    console.log(pickRandNum);

    if(pickRandNum === 1)
        return 'Rock';  
    else if(pickRandNum === 2)
        return 'Paper';
    else
        return 'Scissors';
}

function playerSelection(){
    /* asking user */
    var playerPick = prompt("Please write Rock, Paper or Scissors your choice here and enter: ");
    return playerPick;
}

function computerSelection(){
    const choicePlayer = playerSelection();
    const choiceComp = getComputerChoice();

    const losserMessage = 0;
    const winnerMessage = 1;
    const drawMessage = 2;

    console.log(choicePlayer);
    console.log(choiceComp);

    if(choicePlayer === 'Rock')
    {
        if(choiceComp === 'Scissors')
            return winnerMessage;
        else if(choiceComp === 'Paper')
            return losserMessage; 
        else    
            return drawMessage;
    }
    else if(choicePlayer ==='Paper')
    {
        if(choiceComp === 'Rock')
            return winnerMessage;
        else if(choiceComp === 'Scissors')
            return losserMessage; 
        else    
            return drawMessage;
    }
    else if(choicePlayer === choiceComp)
    {
        if(choiceComp === 'Paper')
            return winnerMessage;
        else if(choiceComp === 'Rock')
            return losserMessage; 
        else    
            return drawMessage; 
    }
    else
    {
        console.error("Wrong input");
    }
}
