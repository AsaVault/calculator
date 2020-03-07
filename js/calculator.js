let runningTotal = 0;
let buffer = "0";
let clickEquals = false;
let previousOperator;
const screen = document.querySelector('.screen');

// No two
function buttonClick(value){
	if (isNaN(value)){
		handleSymbol(value);
	}else {
		handleNumber(value);
	}
	screen.innerText = buffer;
}

// No three
function handleNumber(numberString){
	if (buffer === "0"){
		buffer = numberString;
		console.log(buffer);
	} else {
		buffer += numberString;
		console.log(buffer);
	}
}

// No four
function handleSymbol(symbol){
	// if (symbol === "C"){
	// 	buffer = "0";
	// 	runningTotal = 0;
	// }
	switch	(symbol){
		case "C":
			buffer = "0";
			runningTotal = 0;
			break;

			// No seven
		case "=":
			if (previousOperator === null){
				//meaning if the user is clicking equals sign for the first time, we return nothing  else we carry out the next order inline.
				//we just return to skip the operation
				// we need two numbers to do math 
				return;
			}
			//confuse here
			//here we run our flush operation code
			flushOperation(parseInt(buffer));
			//after the operation we, we have no previousOperator
			previousOperator = null;
			//then we display our running total to the screen
			buffer = runningTotal;
			//after the display, we set our running total to 0.
			runningTotal = 0;
			//operation done and finish.
			break;
			// No seven Ends here
			//No eight arror sign
		case "←":
			if (buffer.length === 1){
				buffer = "0";
			} else {
				buffer = buffer.substring(0, buffer.length -1);
			}
			break;
		case "+":
		case "-":
		case "÷":
		case "×":
			handleMath(symbol)
			break;
	}
	
}

// no 5

function handleMath(symbol){
	if (buffer === "0"){
		return
	}
	// converting our buffer string to number
	const intBuffer = parseInt(buffer);

	if (runningTotal === 0){
		runningTotal = intBuffer;
	} else {
		flushOperation (intBuffer);
	}
	previousOperator = symbol;

	buffer = "0";
}

// no six

function flushOperation(intBuffer){
	if (previousOperator === '+'){
		runningTotal += intBuffer;
	} else if (previousOperator === '-'){
		runningTotal -= intBuffer;
	} else if (previousOperator === '÷'){
		runningTotal /= intBuffer;
	} else {
		runningTotal *= intBuffer;
	}
	
}
// No one
function init (){
	document.querySelector(".calc-buttons")
	.addEventListener("click", function (event){
		buttonClick(event.target.innerText);
	})
}

init();