$(document).ready(function() {
  var jewels = {
    j1: {
      name: "j1",
      value: 0
    },
    j2: {
      name: "j2",
      value: 0
    },
    j3: {
      name: "j3",
      value: 0
    },
    j4: {
      name: "j4",
      value: 0
    }
  };

  var wins = 0;
  var losses = 0;

  //hero section button start
  $("#enter-icon").on("click", function() {
    start();
    var id = $("this").data("id");

    var audio = $("#boom #" + id)[0];
    audio.play();
  });

  //random number generation and adding the value to the necessary elements
  var rndNum = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var start = function() {
    sumScore = 0;
    gameNum = rndNum(19, 120);
    jewels.j1.value = rndNum(1, 12);
    jewels.j2.value = rndNum(1, 12);
    jewels.j3.value = rndNum(1, 12);
    jewels.j4.value = rndNum(1, 12);

    $("#game-number").text(gameNum);

    console.log("j1 ", jewels.j1.value);
    console.log("j2 ", jewels.j2.value);
    console.log("j3 ", jewels.j3.value);
    console.log("j4 ", jewels.j4.value);
    console.log("random game number ", gameNum);
  };

  //Win conditions and logic
  var victory = function() {
    //matches added jewel score to game number
    if (sumScore > gameNum) {
      console.log("You Lose");
      losses++;
      $("#losses").text(losses);
      roundReset();
    } else if (sumScore === gameNum) {
      console.log("You Win");
      // alert("won");
      wins++;
      $("#wins").text(wins);
      roundReset();
    }
  };
  ///adds current player score to value of new jewel clicked
  var addJewels = function(runJewel) {
    sumScore += runJewel.value;
    $("#score-number").text(sumScore);
    victory();

    console.log("I am the player score ", sumScore);
  };
  //hard reset game, generate new game number and clear player
  var reset = function() {
    start();
    $(sumScore).empty();
    $("#score-number").html("0");
    $(wins).empty();
    $(losses).empty();
    $("#wins").html("0");
    $("#losses").html("0");
  };
  //clear player score from last round and generate new game number
  var roundReset = function() {
    start();
    $(sumScore).empty();
    $("#score-number").html("0");
  };

  $("#j1").click(function() {
    addJewels(jewels.j1);
  });
  $("#j2").click(function() {
    addJewels(jewels.j2);
  });
  $("#j3").click(function() {
    addJewels(jewels.j3);
  });
  $("#j4").click(function() {
    addJewels(jewels.j4);
  });

  $("#reset-btn").click(reset);
});
