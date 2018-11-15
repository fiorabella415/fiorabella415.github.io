//<label>Square this number:
   // <input type="number" id="square-input" size="2">
  //</label>
  //<button id="square-button">Calculate</button>
 // <br><br>

function squareNumber(){
    var snInput = document.getElementById('square-input').value;
    var snOutput = snInput*2;
    console.log('The squaring of the number '+ snInput + ' is ' + snOutput)
    alert('The squaring of the number '+ snInput + ' is ' + snOutput)
}

squareButton = document.getElementById('square-button');
squareButton.addEventListener('click', squareNumber)


//<label>Half this number:
    //<input type="number" id="half-input" size="2">
 // </label>
  //<button id="half-button">Calculate</button>
  //<br><br>
  
function halfNumber(){
    var halfInput = document.getElementById('half-input').value;
    var halfOutput = halfInput/2;
    console.log('Half of '+ halfInput + " is " + halfOutput)
    alert('Half of '+ halfInput + " is " + halfOutput)
}

halfButton = document.getElementById('half-button');
halfButton.addEventListener('click', halfNumber)

//<label>
   // Fraction:
    //<input type="number" id="percent1-input" size="2">
 // </label>
  //<label>
   // Whole:
   // <input type="number" id="percent2-input" size="2">
 // </label>
  //<button id="percent-button">Calculate</button>
  //<br><br>

function percentOf(){
    var firstNumber = document.getElementById('percent1-input').value;
    var secondNumber = document.getElementById('percent2-input').value;
    var percentOutput = (firstNumber/secondNumber)*100
    console.log(firstNumber + " is " + percentOutput+"% of " + secondNumber)
    alert((firstNumber + " is " + percentOutput+"% of " + secondNumber))
}

percentButton = document.getElementById('percent-button');
percentButton.addEventListener('click', percentOf)


//<label>Calculate area of circle with radius:
    //<input type="number" id="area-input" size="2">
  //</label>
  //<button id="area-button">Calculate</button> 
  //<br><br>
 //<div id="solution"></div>

function areaOfCircle(){
    var areaInput = document.getElementById('area-input').value;
    var areaOutput = (areaInput*2)*3.14;
    console.log('The area for the circle with radius '+ areaInput + " is " + areaOutput)
    alert('The area for the circle with radius '+ areaInput + " is " + areaOutput)
}

areaButton = document.getElementById('area-button');
areaButton.addEventListener('click', areaOfCircle)
