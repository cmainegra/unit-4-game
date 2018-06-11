// 1. [Watch the demo](homework_demos/crystalsCollector_demo.mp4).

// 2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

// 3. Here's how the app works:

//   There will be four crystals displayed as buttons on the page.

//    * The player will be shown a random number at the start of the game.

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

//two empty variables, 
var current = 0;
var goal = Math.floor(Math.random() * 87)+ 34;
var card1 = Math.floor(Math.random() * 13) + 1;
var card2 = Math.floor(Math.random() * 13) + 1;
var card3 = Math.floor(Math.random() * 13) + 1;
var card4 = Math.floor(Math.random() * 13) + 1;
console.log(card1);
console.log(goal);

$(document).ready(function() {

$(".goal").html(goal);

$("#card1").on("click", function(){
    current += card1;
    $(".current").html(current);
    console.log(current)
    if (current === goal) {
        alert("You Win!");
    } else if (current > goal) {
        alert("You Lose!");
    }
});
$("#card2").on("click", function(){
    current += card2;
    $(".current").html(current);
    console.log(current);
    if (current === goal) {
        alert("You Win!");
    } else if (current > goal) {
        alert("You Lose!");
    }
});
$("#card3").on("click", function(){
    current += card3;
    $(".current").html(current);
    console.log(current);
    if (current === goal) {
        alert("You Win!");
    } else if (current > goal) {
        alert("You Lose!");
    }
});
$("#card4").on("click", function(){
    current += card4;
    $(".current").html(current);
    console.log(current);
    if (current === goal) {
        alert("You Win!");
    } else if (current > goal) {
        alert("You Lose!");
    }
});






});
//goal 34-120
    //current sum of values of clicks
//generate random variables for game
    //a value of 1-12 for each card
    //four positions each have a different value; between 1-12 
//user clicks picture
    //add user value of click for that image to current
//user clicks other picture
    //add value of picture to current
//if current > goal 
    //user loses
//if current === goal
    //user wins

