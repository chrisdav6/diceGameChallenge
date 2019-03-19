let p1 = document.querySelector(".img1");
let p2 = document.querySelector(".img2");
let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let p1Flag = document.querySelector(".p1hidden");
let p2Flag = document.querySelector(".p2hidden");

function rollDice() {
  let p1Roll = Math.floor(Math.random() * 6) + 1;
  let p2Roll = Math.floor(Math.random() * 6) + 1;

  p1.setAttribute("src", "images/dice" + p1Roll + ".png");
  p2.setAttribute("src", "images/dice" + p2Roll + ".png");

  p1Flag.classList.add("p1hidden");
  p2Flag.classList.add("p2hidden");

  if(p1Roll < p2Roll) {
    h1.textContent = "Player 2 Wins!";
    p2Flag.classList.remove("p2hidden");
    console.log(p1Roll, p2Roll);
  } else if(p1Roll > p2Roll) {
    h1.textContent = "Player 1 Wins!";
    p1Flag.classList.remove("p1hidden");
    console.log(p1Roll, p2Roll);
  } else {
    h1.textContent = "It's a draw!";
    console.log(p1Roll, p2Roll);
  }
}

btn.addEventListener("click", rollDice);

