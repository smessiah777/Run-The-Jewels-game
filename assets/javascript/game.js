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
  var jewelScore = 0;
  var targetScore = 0;

  //hero section button start
  $("#enter-icon").on("click", function() {
    gameNum();
  });

  function gameNum() {
    var goalNum = Math.round(Math.random() * (120 - 19) + 19);
    $("#game-number").html(goalNum);
    console.log("I am the goal number " + goalNum);
  }

  //   function jewelNum() {
  //     var rndJewel = Math.round(Math.random() * (12 - 1) + 1);
  //     $(".jewel-img").html(rndJewel);
  //   }
});
