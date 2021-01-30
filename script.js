var p1Btn = document.getElementById("p1");
var p2Btn = document.getElementById("p2");
var resetbtn = document.getElementById("reset");
var p1display = document.getElementById("score1");
var p2display = document.getElementById("score2");
var p1score = 0;
var p2score = 0;
var winningscore = 5;
var gameover = false;

p1Btn.addEventListener("click", function(){
    if(!gameover){
        p1score++;
        if(p1score === winningscore){
            p1display.classList.add("winner");
            gameover = !gameover;
        }
        p1display.textContent = p1score;
    }
});
p2Btn.addEventListener("click", function(){
    if(!gameover){
        p2score++;
        if(p2score === winningscore){
            p2display.classList.add("winner");
            gameover = !gameover;
        }
        p2display.textContent = p2score;   
    }
});
resetbtn.addEventListener("click", function(){
    p1score =0;
    p2score=0;
    p1display.textContent=0;
    p2display.textContent=0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover = false;
});