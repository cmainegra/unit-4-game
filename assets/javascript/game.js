var current = 0;
var goal = Math.floor(Math.random() * 87)+ 34;
var card1 = Math.floor(Math.random() * 13) + 1;
var card2 = Math.floor(Math.random() * 13) + 1;
var card3 = Math.floor(Math.random() * 13) + 1;
var card4 = Math.floor(Math.random() * 13) + 1;

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
$("button").on("click", function(){
    $(document).empty();
})
});