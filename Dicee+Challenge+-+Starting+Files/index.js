var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var value1 = "./images/dice"+randomNumber1 + ".png";
var value2 = "./images/dice"+randomNumber2 + ".png";

document.firstElementChild.lastElementChild.getElementsByTagName("img")[0].setAttribute("src",value1);

document.firstElementChild.lastElementChild.getElementsByTagName("img")[1].setAttribute("src",value2);

if (randomNumber1 === randomNumber2) {
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML = "Draw!";
} else if(randomNumber1 > randomNumber2) {
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else {
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}