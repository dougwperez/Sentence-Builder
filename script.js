//GAME MODE FUNCTIONALITY

let randomnum = Math.floor(Math.random() * 3) + 1;
console.log(randomnum);
//comment out randomnum to use all modes
//andomnum = 3;

let gamea = document.querySelectorAll("#words, #words1, #words2");
for (let i = 0; i < gamea.length; i++) {
  randomnum == 1
    ? (gamea[i].style.display = "block")
    : (gamea[i].style.display = "none");
}

let gameb = document.querySelectorAll("#wordsb, #wordsb1, #wordsb2");
for (let i = 0; i < gameb.length; i++) {
  randomnum == 2
    ? (gameb[i].style.display = "block")
    : (gameb[i].style.display = "none");
}

let gamec = document.querySelectorAll("#wordsc, #wordsc1, #wordsc2");
for (let i = 0; i < gamec.length; i++) {
  randomnum == 3
    ? (gamec[i].style.display = "block")
    : (gamec[i].style.display = "none");
}

//TIMER FUNCTIONALITY

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  var myInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (timer == 0) {
      gameover();
      clearInterval(myInterval);
    }

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}
//Time per game mode set here
window.onload = function () {
  if (randomnum === 1) {
    var timeAmount = 10;
  } else if (randomnum === 2) {
    timeAmount = 20;
  } else if (randomnum === 3) {
    timeAmount = 30;
  }
  //var timeAmount = randomnum == 1 ? 10 : 20;
  display = document.querySelector("#time");
  startTimer(timeAmount, display);
};

function gameover() {
  gameOverModal.style.display = "block";
  console.log("Game Over");
}

// must add 1200 to make accurate
//setTimeout(gameover, 5 * 60 * 1000 + 1200);
//setTimeout(gameover, 60 * 1000 + 1200);

//NOT THIS ONE
//setTimeout(gameover, 5 * 60 * 1000);

//Sector 2 sentences

//var el = document.getElementById("example1");
//var sortable = Sortable.create(el);

var words = document.getElementById("words");
var words1 = document.getElementById("words1");
var words2 = document.getElementById("words2");

var wordsb = document.getElementById("wordsb");
var wordsb1 = document.getElementById("wordsb1");
var wordsb2 = document.getElementById("wordsb2");

var wordsc = document.getElementById("wordsc");
var wordsc1 = document.getElementById("wordsc1");
var wordsc2 = document.getElementById("wordsc2");

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
  group: "shared",
  animation: 150,
  pull: "clone",
});
new Sortable(words1, {
  group: "shared",
  animation: 150,
  pull: "clone",
});
new Sortable(words2, {
  group: "shared",
  animation: 150,
});

new Sortable(wordsb, {
  group: "shared",
  animation: 150,
});
new Sortable(wordsb1, {
  group: "shared",
  animation: 150,
});
new Sortable(wordsb2, {
  group: "shared",
  animation: 150,
});

new Sortable(wordsc, {
  group: "shared",
  animation: 150,
});
new Sortable(wordsc1, {
  group: "shared",
  animation: 150,
});
new Sortable(wordsc2, {
  group: "shared",
  animation: 150,
});

new Sortable(example1, {
  group: "shared",
  animation: 150,
  disabled: false,
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

//SCORE LOGIC
let scoreCard = document.getElementById("counter"),
  score = 0;

function win() {
  score += 1;
  document.getElementById("counter").innerHTML = "Score: " + score;
  scoreSound.play();
}

const scoreSound = new Audio();
scoreSound.src = "score.mp3";
scoreSound.volume = 0.5;

let observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    //console.log($(mutation.removedNodes)); // <<-- includes text nodes

    //note you can remove the break statments if the desired outcome is the exact same
    $(mutation.removedNodes).each(function (value, index) {
      if (finalAnswer.includes(example1.textContent)) {
        score += example1.textContent.length;
        win();
        function correct(thecolor, thetext) {
          let span = document.getElementById("example1");
          let text = document.createTextNode(".   Correct!");
          span.style.pointerEvents = "none";
          span.style.color = "green";
          span.style.fontSize = "24px";
          span.appendChild(text);
          return span;
        }
        correct();
      }

      if (finalAnswer.includes(example2.textContent)) {
        score += example2.textContent.length;
        win();
        function correct(thecolor, thetext) {
          let span = document.getElementById("example2");
          let text = document.createTextNode(".  Correct!");
          span.style.pointerEvents = "none";
          span.style.color = "green";
          span.style.fontSize = "24px";
          span.appendChild(text);
          return span;
        }
        correct();
      }

      if (finalAnswer.includes(example3.textContent)) {
        score += example3.textContent.length;
        win();
        function correct(thecolor, thetext) {
          let span = document.getElementById("example3");
          let text = document.createTextNode(".  Correct!");
          span.style.pointerEvents = "none";
          span.style.color = "green";
          span.style.fontSize = "24px";
          span.appendChild(text);
          return span;
        }
        correct();
      }
      if (finalAnswer.includes(example4.textContent)) {
        score += example4.textContent.length;
        win();
        function correct(thecolor, thetext) {
          let span = document.getElementById("example4");
          let text = document.createTextNode(".  Correct!");
          span.style.pointerEvents = "none";
          span.style.color = "green";
          span.style.fontSize = "24px";
          span.appendChild(text);
          return span;
        }
        correct();
      }
      if (finalAnswer.includes(example5.textContent)) {
        score += example5.textContent.length;
        win();
        function correct(thecolor, thetext) {
          let span = document.getElementById("example5");
          let text = document.createTextNode(".  Correct!");
          span.style.pointerEvents = "none";
          span.style.color = "green";
          span.style.fontSize = "24px";
          span.appendChild(text);
          return span;
        }
        correct();
      }
      if (finalAnswer.includes(example6.textContent)) {
        score += example6.textContent.length;
        win();
        function correct(thecolor, thetext) {
          let span = document.getElementById("example6");
          let text = document.createTextNode(".  Correct!");
          span.style.pointerEvents = "none";
          span.style.color = "green";
          span.style.fontSize = "24px";
          span.appendChild(text);
          return span;
        }
        correct();
      }
      if (finalAnswer.includes(example7.textContent)) {
        score += example7.textContent.length;
        win();
        function correct(thecolor, thetext) {
          let span = document.getElementById("example7");
          let text = document.createTextNode(".  Correct!");
          span.style.pointerEvents = "none";
          span.style.color = "green";
          span.style.fontSize = "24px";
          span.appendChild(text);
          return span;
        }
        correct();
      }
      if (finalAnswer.includes(example8.textContent)) {
        score += example8.textContent.length;
        win();
        function correct(thecolor, thetext) {
          let span = document.getElementById("example8");
          let text = document.createTextNode(".  Correct!");
          span.style.pointerEvents = "none";
          span.style.color = "green";
          span.style.fontSize = "24px";
          span.appendChild(text);
          return span;
        }
        correct();
      }
      if (finalAnswer.includes(example9.textContent)) {
        score += example9.textContent.length;
        win();
        function correct(thecolor, thetext) {
          let span = document.getElementById("example9");
          let text = document.createTextNode(".  Correct!");
          span.style.pointerEvents = "none";
          span.style.color = "green";
          span.style.fontSize = "24px";
          span.appendChild(text);
          return span;
        }
        correct();
      }
      if (finalAnswer.includes(example10.textContent)) {
        score += example10.textContent.length;
        win();
        function correct(thecolor, thetext) {
          let span = document.getElementById("example10");
          let text = document.createTextNode(".  Correct!");
          span.style.pointerEvents = "none";
          span.style.color = "green";
          span.style.fontSize = "24px";
          span.appendChild(text);
          return span;
        }
        correct();
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

console.log(example2.textContent);

/*
//FROM HTML MODAL
<div class="gameOverModal" id="gameOverModal">
        <button class="closebtn" onclick="hidebox()">X</button>
        <h2>Game Over</h2>
        <span class="text">
          First unscramble all the words in the green boxes, the order in which
          you do so is unimportant. After unscrambling the words, you must put
          the new words in the blue boxes in the correct order. If you have any
          difficulty, press the "Need a hint?" button.
        </span>
      </div>
*/
