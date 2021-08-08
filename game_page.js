var Player1_name = localStorage.getItem("player1_name");
var Player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = Player1_name + " :";
document.getElementById("player2_name").innerHTML = Player2_name + " :";

document.getElementById("player1_score").innerHTML = " " + player1_score;
document.getElementById("player2_score").innerHTML = " " + player2_score;

document.getElementById("q_label").innerHTML = "Question turn is " + Player1_name;
document.getElementById("a_label").innerHTML = "Answer turn is " + Player2_name;

function send(){
    var number1 = document.getElementById("number_1").value;

    var number2 = document.getElementById("number_2").value;

    var vatual_ans = parseInt(number1) * parseInt(number2);

    question_word = "<h4 id='color_1'>"+number1+" X " + number2 +"</h4>";
    answer_word = "<br> Answer: <input type='text' id='check_box' placeholder='type answer here'>";
    check_button = "<br><br> <button class='btn btn-grad' onclick='check()' style='width: 30%;'>Check</button>";
    row = question_word + answer_word + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}