let randomNumber1 =Math.ceil(Math.random() * 6); 
let randomNumber2 =Math.ceil(Math.random() * 6);

let diceImage1= "images/dice"+randomNumber1+".png";
let diceImage2= "images/dice"+randomNumber2+".png";


function  player1(randomNumber1)
{
    document.querySelectorAll("img")[0].setAttribute("src",diceImage1);

}
function  player2(randomNumber2)
{
    document.querySelectorAll("img")[1].setAttribute("src",diceImage2);

}
function result (randomNumber1,randomNumber2)
{
 if(randomNumber1==randomNumber2) document.querySelector("h1").innerHTML="DRAW";
 else if(randomNumber1>randomNumber2) document.querySelector("h1").innerHTML="Player 1 Wins";
 else document.querySelector("h1").innerHTML="Player 2 Wins";
}


player1(randomNumber1);
player2(randomNumber2);
result(randomNumber1,randomNumber2);
