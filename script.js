console.log("Test")

// document.body.innerHTML= "<h1>Let's Insert Another Heading Because Reasons</h1>"; // replaces the content of "body"

// document.body.style.background= "blue"; // changes CSS property background to color of choice

// let headingEl = document.getElementById('mn-hdg')

// headingEl.textContent = "Hi!"

// const changeColorButton = document.getElementById('clk-me');

let currentColour = 0;

let colourArray = ["#ffffff", "#efefef", "#1abba1", "#baccab", "#abcabc"];

function changeColour() {
  
  if (currentColour === colourArray.length - 1) {
    currentColour = 0;
  } else {
    currentColour++;

    //     if (document.body.style.background === "aliceblue") {
    //         document.body.style.background = "#FFFFFF";
    //     } else {
    //         document.body.style.background = "aliceblue";
    // }
  }
  document.body.style.background = colourArray[currentColour];
}

function pushColour() {
    let newColour = document.getElementById('new-colour').value
    colourArray.push(newColour)
}


// getElementById

document.getElementById('sb-hdg').textContent = "The Document Object Model"
// document.querySelector('#sb-hdg').textContent = "Change"

// .textContent changes text inside element 

// .innerHTML changes HTML inside of an element

// .style changes the style on an element


// let helloDom = document.querySelector('#hdg');

let counterEl = document.getElementById("counter");
let incrementButton = document.getElementById("inc-btn")
let decrementButton = document.getElementById('dec-btn')

counterEl.textContent = 0;

incrementButton.addEventListener('click', function(){
    counterEl.textContent++;
})

incrementButton.addEventListener("mouseover", function () {
  incrementButton.style.background = "cyan";
})

incrementButton.addEventListener("mouseout", function () {
  incrementButton.style.background = "#ffffff";
});

decrementButton.addEventListener("click", function () {
  counterEl.textContent--;
})

decrementButton.addEventListener("mouseover", function () {
  decrementButton.style.background = "cyan";
});

decrementButton.addEventListener("mouseout", function () {
  decrementButton.style.background = "#ffffff";
});



// events! 
// onchange, = when change detected to element
// onmouseover, = when mouse is moved over object
// onmouseout,  = when mouse is moved out of an object
// onkeydown, =when a key is pressed on the keyboard
// onload, =when page has loaded
// oninput,  = when the user inputs somethinhg
// onsubmit = when the an input is submitted (submit button pressed)

// .addEventListeners() method in our JS code is the preferred approach

let testDiv = document.getElementById("test");
testDiv.textContent = "Hey!"

testDiv.addEventListener("mouseout", function() {
    testDiv.textContent = "Come back!"
})

testDiv.addEventListener("mouseover", function () {
  testDiv.textContent = "Hey!";
});


// TARGET 

function alarmingPink(event) {
  event.target.style.background = "pink";
  // alert("what changed?");
}

function aliceBlue(event) {
  event.target.style.background = "aliceblue";
  // alert("what changed?");
}

testDiv.addEventListener("mouseover", alarmingPink);
counterEl.addEventListener("mouseover", alarmingPink);
testDiv.addEventListener("mouseout", aliceBlue);
counterEl.addEventListener("mouseout", aliceBlue);

// const inputElement = document.querySelector('#myInput');
// inputElement.addEventListener('input', logValue);

// function logValue(event) {
//   console.log(event.target.value);
// }
const inputElement = document.getElementById('myInput');
const charCounterEl = document.getElementById('charCounter')

function displayCharCount(event) {
  charCounterEl.textContent = event.target.value.length
}

inputElement.addEventListener('input', displayCharCount)

const addButton = document.getElementById('addButton')
const numOne = document.getElementById('firstNum')
const numTwo = document.getElementById('secondNum')
let result = document.getElementById('result')
addButton.addEventListener("click", function() {
  let sum = parseInt(numOne.value) + Number(numTwo.value); //parseInt or Number works
  result.textContent = `${numOne.value} + ${numTwo.value} = ${sum}`;
});
 
// Reuben's result

console.log(
  "Nan" + +"a" + +"a" + +"a" + +"a" + +"a" + +"a" + +"a" + "a Batmaaaaaaan"
);












