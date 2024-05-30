let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#Msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice = ()=>{
const options =["rock", "paper", "scissors"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
}
const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerText="Game Draw";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin)=>{
if(userWin){
    userscore++;
    userScorePara.innerText=userscore
  
    msg.innerText="You Win!!"
    msg.style.backgroundColor="green";
}else{
    compscore++;
    compScorePara.innerText=compscore;
    msg.innerText="You Lost";
    msg.style.backgroundColor="red";
}
}
const playgame =(userchoice)=>{
    console.log("user choice is ",userchoice);
// to generate computer choice
const compchoice = genCompChoice();
console.log("comp choice=",compchoice);
if(userchoice===compchoice){
drawGame();
}else{
let userWin = true;
if(userchoice==="rock"){
userwin= compchoice=="paper" ? false:true;
}else if(userchoice==="paper"){
    userWin=compchoice==="scissors"?false: true;
}else{
    userWin=compchoice==="rock"?false:true;

}
showWinner(userWin);
}
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
const userchoice =choice.getAttribute("id");
    playgame(userchoice);
    })
})
