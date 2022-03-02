var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elResult = document.querySelector(".result");

var evenNumbers = [];
var oddNumbers = [];

elForm.addEventListener("submit", function (evt){
  evt.preventDefault()
  var elInputValue = elInput.value;
  
  
  
  if(elInputValue % 2 === 0 ){
    elResult.textContent = elInputValue + "  is even number";
    evenNumbers.push(elInputValue);
    console.log(evenNumbers);
    elInput.value = "";
    
    return;
  }else{
    elResult.textContent = elInputValue + " is odd number";
    oddNumbers.push(elInputValue);
    console.log(oddNumbers);
    elInput.value = "";
  }
  
  
  
})