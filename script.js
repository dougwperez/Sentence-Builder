function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);

  if (timer == 4) {
    console.log("yess");
  }
}

window.onload = function () {
  var fiveMinutes = 5,
    display = document.querySelector("#time");
  startTimer(fiveMinutes, display);
};

function gameover() {
  gameOverModal.style.display = "block";
  console.log("Game Over");
}

setTimeout(gameover, 5 * 60 * 1000);

//Sector 2 sentences

//var el = document.getElementById("example1");
//var sortable = Sortable.create(el);

var el = document.getElementById("example1");
var example2 = document.getElementById("example2");

new Sortable(el, {
  group: "shared", // set both lists to same group
  animation: 150,
});

new Sortable(example2, {
  group: "shared",
  animation: 150,
});
