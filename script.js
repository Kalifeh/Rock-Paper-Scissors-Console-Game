//Generar aleatoriamente un valor, "piedra","papel" o "tijera"
    //Guardar el valor en una variable

//Pedirle al usuario que elija un valor "piedra","papel" o "tijera"
    //Guardar el valor en una variable
let humanScore=0;
let computerScore=0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getComputerChoice(){
    let random= getRandomInt(3);
    if(random==1){
        return "Piedra";
    }else if(random==2){
        return "Papel";
    }else{
        return "Tijera";
    }
}

function getHumanChoice(){
    let userSelection;
    do{
     userSelection= prompt("Elije piedra, papel o tijera y juega contra la maquina!").toUpperCase();
    }while(userSelection!=="PIEDRA" && userSelection!=="PAPEL" && userSelection!=="TIJERA");
  
    return userSelection;
}

function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        console.log("Tables");
    }else if(humanChoice==="PIEDRA" && computerChoice=== "PAPEL"){
        console.log("Computer wins");
        computerScore++;
    }else if(humanChoice==="PIEDRA" && computerChoice==="TIJERA"){
        console.log("User Wins!");
        humanScore++;
    }else if(humanChoice==="PAPEL" && computerChoice=== "PIEDRA"){
        console.log("User Wins!");
        humanScore++;
    }else if(humanChoice==="PAPEL" && computerChoice=== "TIJERA"){
        console.log("Computer wins");
        computerScore++;
    }else if(humanChoice==="TIJERA" && computerChoice=== "PAPEL"){
        console.log("User Wins!");
        humanScore++;
    }else if(humanChoice==="TIJERA" && computerChoice=== "PIEDRA"){
        console.log("Computer wins");
        computerScore++;
    }
    
}
function playGame(){
    for(let i=0;i<5;i++){
        let humanChoice= getHumanChoice();
        let computerChoice= getComputerChoice().toUpperCase();
        playRound(humanChoice,computerChoice);
    }
    
    if(humanScore>computerScore){
        console.log("Congrats! You won");
        console.log("Your Score: "+humanScore);
        console.log("Computer Score: "+computerScore);
    }else{
        console.log("Im sorry! Computer won");
        console.log("Your Score: "+humanScore);
        console.log("Computer Score: "+computerScore);
    }
}



playGame();



