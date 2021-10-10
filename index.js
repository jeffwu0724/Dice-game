
var randomNumber1 = rollDice(".img1");
var randomNumber2 = rollDice(".img2");
checkWin(randomNumber1, randomNumber2);

function rollDice(className){
  var randomNumber = Math.ceil(Math.random() * 5) + 1;
  var imageName = "dice" + randomNumber +".png";
  var imageSrc = "images/" + imageName;
  document.querySelector(className).setAttribute("src", imageSrc);
  return randomNumber;
}

function checkWin(randomNumber1, randomNumber2){
  if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw!";
  }else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "🚩Play 2 wins!";
  }else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Play 1 wins!";
  }
}
