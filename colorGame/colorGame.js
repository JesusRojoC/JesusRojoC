var squares = document.querySelectorAll(".square");
var mode = 9;
var colors = colorsArrRandom(mode);
var goal = generateRandom();
var rgb = document.querySelector("#rgb");
rgb.textContent = goal;
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
    buttonsDificult();
    setupSquares();
}

function buttonsDificult(){
    for(var i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function() {
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            modeButton[2].classList.remove("selected");
            this.classList.add("selected");	
            if(this.textContent === "Easy"){
                mode = 3;
            }else if (this.textContent === "Medium"){
                mode = 6;
            }else{
                mode = 9;
            }
            reseter();
        });
    }
}
function setupSquares(){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        
        squares[i].addEventListener("click", function() {
            //grab color of clicked squares
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === goal) {
                message.textContent = "Correct!!!";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
                reset.textContent = "Play Again!";
            } else {
                message.textContent = "Try Again!";
                this.style.backgroundColor = "#232323";
            } 
        });
    }
}
reset.addEventListener("click", ()=>{
    reseter();
});


function changeColor(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function generateRandom(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function colorRandom(){
        var r = Math.floor(Math.random() *256);
        var g = Math.floor(Math.random() *256);
        var b = Math.floor(Math.random() *256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
}

function colorsArrRandom(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(colorRandom());
    }
    return arr;
}

function reseter (){
        // Generate new colors
        colors = colorsArrRandom(mode);
        //generate new goal
        goal = generateRandom();
        //Change display
        rgb.textContent = goal;
        //Print new colors square
        for(var i=0; i<squares.length; i++){
            if(colors[i]){
                squares[i].style.display = "block";
                squares[i].style.background = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }
        h1.style.backgroundColor = "#4085f5";
        reset.textContent = "New Colors";    
        //message.style.display ="none";
        message.textContent = "";
}