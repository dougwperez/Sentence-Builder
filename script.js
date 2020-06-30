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
  var fiveMinutes = 10,
    display = document.querySelector("#time");
  startTimer(fiveMinutes, display);
};

function gameover() {
  gameOverModal.style.display = "block";
  console.log("Game Over");
}

//setTimeout(gameover, 10 * 1000 + 1200);

//NOT THIS ONE
//setTimeout(gameover, 5 * 60 * 1000);

//Sector 2 sentences

//var el = document.getElementById("example1");
//var sortable = Sortable.create(el);

var words = document.getElementById("words");
var words1 = document.getElementById("words1");
var words2 = document.getElementById("words2");
var example1 = document.getElementById("example1");
var example2 = document.getElementById("example2");
var example3 = document.getElementById("example3");
var example4 = document.getElementById("example4");
var example5 = document.getElementById("example5");
var example6 = document.getElementById("example6");
var example7 = document.getElementById("example7");
var example8 = document.getElementById("example8");
var example9 = document.getElementById("example9");
var example10 = document.getElementById("example10");

new Sortable(words, {
  group: "shared", // set both lists to same group
  animation: 150,
});

new Sortable(words1, {
  group: "shared", // set both lists to same group
  animation: 150,
});

new Sortable(words2, {
  group: "shared", // set both lists to same group
  animation: 150,
});

new Sortable(example1, {
  group: "shared",
  animation: 150,
});

new Sortable(example2, {
  group: "shared",
  animation: 150,
});

new Sortable(example3, {
  group: "shared",
  animation: 150,
});

new Sortable(example4, {
  group: "shared",
  animation: 150,
});

new Sortable(example5, {
  group: "shared",
  animation: 150,
});

new Sortable(example6, {
  group: "shared",
  animation: 150,
});

new Sortable(example7, {
  group: "shared",
  animation: 150,
});

new Sortable(example8, {
  group: "shared",
  animation: 150,
});

new Sortable(example9, {
  group: "shared",
  animation: 150,
});

new Sortable(example10, {
  group: "shared",
  animation: 150,
});

//console.log(example2.textContent); must equal finalanswer

var finalAnswer = [
  "Thedogwalkshome",
  "Mydogwalkshome",
  "Ihopeitworks",
  "loveit",
  "Sheplaysvideogames",
  "Myparentslovegoingtodinner",
];
var realAnswer;

//SCORE LOGIC
var scoreCard = document.getElementById("counter"),
  score = 0;

function win() {
  score += 1;
  document.getElementById("counter").innerHTML = "Score: " + score;
}

const scoreSound = new Audio();
scoreSound.src = "score.mp3";
scoreSound.volume = 0.5;

var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    //console.log($(mutation.removedNodes)); // <<-- includes text nodes

    //note you can remove the break statments if the desired outcome is the exact same
    $(mutation.removedNodes).each(function (value, index) {
      if (finalAnswer.includes(example1.textContent)) {
        console.log("win");
        console.log(example1.textContent.length);
        score += example1.textContent.length;
        $("words").css("background", "#red");
        scoreSound.play();
        win();
      } else if (finalAnswer.includes(example2.textContent)) {
        console.log("win");
        score += example2.textContent.length;
        scoreSound.play();
        win();
      } else if (finalAnswer.includes(example3.textContent)) {
        console.log("win");
        score += example3.textContent.length;
        scoreSound.play();
        win();
      } else if (finalAnswer.includes(example4.textContent)) {
        console.log("win");
        score += example4.textContent.length;
        scoreSound.play();
        win();
      } else if (finalAnswer.includes(example5.textContent)) {
        console.log("win");
        score += example5.textContent.length;
        scoreSound.play();
        win();
      } else if (finalAnswer.includes(example6.textContent)) {
        console.log("win");
        score += example6.textContent.length;
        scoreSound.play();
        win();
      } else if (finalAnswer.includes(example7.textContent)) {
        console.log("win");
        score += example7.textContent.length;
        scoreSound.play();
        win();
      } else if (finalAnswer.includes(example8.textContent)) {
        console.log("win");
        score += example8.textContent.length;
        scoreSound.play();
        win();
      } else if (finalAnswer.includes(example9.textContent)) {
        console.log("win");
        score += example9.textContent.length;
        scoreSound.play();
        win();
      } else if (finalAnswer.includes(example10.textContent)) {
        console.log("win");
        score += example10.textContent.length;
        scoreSound.play();
        win();
      }
    });
  });
});

var config = { attributes: true, childList: true, characterData: true };

observer.observe($("#example1")[0], config);
observer.observe($("#example2")[0], config);
observer.observe($("#example3")[0], config);
observer.observe($("#example4")[0], config);
observer.observe($("#example5")[0], config);
observer.observe($("#example6")[0], config);
observer.observe($("#example7")[0], config);
observer.observe($("#example8")[0], config);
observer.observe($("#example9")[0], config);
observer.observe($("#example10")[0], config);
