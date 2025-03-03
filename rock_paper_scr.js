let userScore=0;
let compScore=0;

let playGame1 = true;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");

const drawGame=()=>{
    msg.innerText=`Game was Draw. Play Again 👆`;
    msg.style.backgroundColor = "#0000FF";
    
}

const genCompChoice=()=>{
    const options = ['rock','paper', 'scissors'];
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScoreP.innerText=`${userScore}`
        msg.innerText=`You Win! ⭐️ Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor ="#0db426";
    }
    else{
        compScore++;
        compScoreP.innerText=`${compScore}`
        msg.innerText=`You Lose 👀 Computer ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#FF0000";
    }
}

const playGame= (userChoice)=>{
    const compChoice = genCompChoice();
    if (userChoice===compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            //paper,scissor
            userWin = compChoice ==='paper'?false:true;
        }
        else if(userChoice === 'paper'){
            //rock,scissors
            userWin = compChoice === 'scissors'?false:true;
        }
        else{
            //rock,paper
            userWin=compChoice==='rock'?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})

//some-code

let newGameP = document.querySelector(".text")
newGameP.addEventListener('click',function(){
    userScore=0;
    compScore=0;
    userScoreP.innerText=0;
    compScoreP.innerText=0;

})

