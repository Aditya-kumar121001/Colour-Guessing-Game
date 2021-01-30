var numSq = 6;
var sq = document.querySelectorAll(".squares");
var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var colours = generateRandomColor(6);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colordisplay");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSq = 3;
    colours = generateRandomColor(numSq);
    colorDisplay.textContent = pickedColor;
    pickedColor = pickColor();
    for(var i=0; i<sq.length; i++){
        if(colours[i]){
            sq[i].style.backgroundColor = colours[i];
        }
        else{
            sq[i].style.display = "none";
        }
    }

});
hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSq = 6;
    colours = generateRandomColor(numSq);
    pickedColor = pickColor();
    for(var i=0; i<sq.length; i++){
            sq[i].style.backgroundColor = colours[i];
            sq[i].style.display = "block";
        }
});
colorDisplay.innerHTML = pickedColor;
for(var i=0; i< sq.length; i++){
    //initialising the color of the squares
    sq[i].style.backgroundColor = colours[i];
    //comparing picked color and selected color
    sq[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            changeColor(clickedColor);
            h1.style.background = clickedColor;
            resetbtn.textContent= "Play Again";
            displayMessage.textContent = "Correct";
        }
        else{
            this.style.backgroundColor = "#232323";
            displayMessage.textContent = "Try Again";
        }
});
}

var resetbtn = document.getElementById("reset");
resetbtn.addEventListener("click", function(){
    colours = generateRandomColor(numSq);
    pickedColor = pickColor();
    h1.style.background = "steelblue";
    colorDisplay.textContent = pickedColor;
    resetbtn.textContent = "New Colours";
    for(var i=0; i<sq.length; i++){
        sq[i].style.backgroundColor = colours[i];
    }
    displayMessage.textContent = " ";
})
function changeColor(color){
        for(var i=0; i< sq.length; i++){
            sq[i].style.backgroundColor = color;
        }
}
function pickColor(){
    var picked = Math.floor(Math.random() * colours.length);
    return colours[picked];
}

function generateRandomColor(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(randomColor());}
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + r +", "+ g + ", " + blue + ")";
}