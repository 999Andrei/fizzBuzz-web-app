let userInput = document.getElementById("number");
let div = document.getElementById("gameArea");
document.getElementById("startGame").addEventListener("click", function() {
  div.innerHTML = "";
for (let i = 1; i <= userInput.value; i++) {    //for loop to iterate through the numbers 1 to the user input
  let paragraph = document.createElement("p");
  if (i % 3 === 0 && i % 5 === 0) {
    paragraph.innerHTML = "FizzBuzz";
    paragraph.className = "white-color";
    
  } else if (i % 3 === 0) {
    paragraph.innerHTML = "Fizz";
    paragraph.className = "blue-color";
  } else if (i % 5 === 0) {
    paragraph.innerHTML = "Buzz";
    paragraph.className = "red-color";
  } else {
    paragraph.innerHTML = i;
  }
  div.appendChild(paragraph);
 
}

});
