var timer = 60;
var score = 0;
var rn = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#incScore").textContent = score;
}

function makeHit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = rn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 160; i++) {
    var run = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${run}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function setTimer() {
  var time = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeer").textContent = timer;
    } else {
      clearInterval(time);
      document.querySelector("#pbtm").innerHTML = `<h1>Game over</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNum = Number(details.target.textContent);
  if (clickedNum === rn) {
    increaseScore();
    makeHit();
    makeBubble();
  }
});

setTimer();
makeHit();
makeBubble();
