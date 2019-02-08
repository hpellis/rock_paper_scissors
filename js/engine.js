/*Set variables*/

var choices = ["rock", "paper", "scissors"];

var played = 0;
var won = 0;
var lost = 0;
var draw = 0;


/*function to listen for clicks and update text*/

$("button").click(function(event) {

  var play_you = this.getAttribute("value");
  console.log(play_you);
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);

});


/*function for computer's move*/

function computer_move() {
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0;

  play_machine = choices[play_machine];
  $("#play_machine").text(play_machine);
  return play_machine;
}


/*function to determine who won*/
function compare(you, machine) {
  var verdict = 'lose';

  if (you == machine) {
    verdict = 'draw';
  } else if ((you == "rock") && (machine == "scissors")) {
    verdict = 'win';
  } else if ((you == "paper") && (machine == "rock")) {
    verdict = 'win';
  } else if ((you == "scissors") && (machine == "paper")) {
    verdict = 'win';
  }


  /*function to update tally*/

  switch (verdict) {
    case "win":
      won++;
      $("#game_won").text(won);
      $("#resultimage").attr("src", "images/win.png");
      break;
    case "lose":
      lost++;
      $("#game_lost").text(lost);
      $("#resultimage").attr("src", "images/lose.png");

      break;
    case "draw":
      draw++;
      $("#game_draw").text(draw);
      $("#resultimage").attr("src", "images/draw.png");
      break;
  }

  $("#verdict").text(verdict);
  played++;

  $("#game_played").text(played);
}


/*code for buttons to stay clicked color*/

$('button[type="button"]').click(function() {
  $('button[type="button"].color').removeClass("color");
  $(this).addClass("color");
});
