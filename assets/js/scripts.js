var currentNumberWraper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment() {
	currentNumber++;
	currentNumberWraper.innerHTML = currentNumber;
    
}

function decrement() {
	currentNumber--;
	currentNumberWraper.innerHTML = currentNumber;
    
}

function setColor() {
	if (currentNumber < -5){
        document.getElementById("currentNumber").style.color = "red"
    }
    if (currentNumber >= -5 && currentNumber <= 5 ){
        document.getElementById("currentNumber").style.color = "black"
    }
    if (currentNumber > 5){
        document.getElementById("currentNumber").style.color = "blue"
    }
}