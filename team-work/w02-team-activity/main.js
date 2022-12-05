function getInOut() {
  // this is where we will get our input whenever the user type in something
  const input = document.getElementById("step1Input").value;
  // and this is to put the input text in the div section for the user to see
  const outputText = document.getElementById("step1output");
  // now we display what the user entered
  outputText.innerHTML = "You entered: " + input;
}

// step 2
function addAllNum() {
  const input2 = document.getElementById("step2Input").value;
  const outputNum = document.getElementById("step2Output");
  // 1.Make the input an int by assigning the input to a parseInt function
  // and assign the input2 to new variable
  const inputInt = parseInt(input2);
  if (inputInt !== NaN) {
    outputNum.innerHTML = "The Total is " + sum(inputInt);
  }
}

function sum(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

// step 3
function addAllInput() {
  const input3Num1 = document.getElementById("num1").value;
  const input3Num2 = document.getElementById("num2").value;
  const outputnum3 = document.getElementById("step3Output");
  // now we will set the input to a float
  const floatNum1 = parseFloat(input3Num1);
  const floatNum2 = parseFloat(input3Num2);

  if ((floatNum1 !== NaN) & (floatNum2 !== NaN)){
    let total = floatNum1 + floatNum2;
    outputnum3.innerHTML = "The Total is: "  + total;
  }

}

// my stretch solution
// stretch step 1
// function subAllInput() {
//   const input3Num1 = document.getElementById("num1").value;
//   const input3Num2 = document.getElementById("num2").value;
//   const outputnum3 = document.getElementById("step3Output");
//   // now we will set the input to a float
//   const floatNum1 = parseFloat(input3Num1);
//   const floatNum2 = parseFloat(input3Num2);

//   if ((floatNum1 !== NaN) & (floatNum2 !== NaN)){
//     let total = floatNum1 - floatNum2;
//     outputnum3.innerHTML = "The remainder is: "  + total;
//   }

// }

// // strectch step 2
// function timesAllInput() {
//   const input3Num1 = document.getElementById("num1").value;
//   const input3Num2 = document.getElementById("num2").value;
//   const outputnum3 = document.getElementById("step3Output");
//   // now we will set the input to a float
//   const floatNum1 = parseFloat(input3Num1);
//   const floatNum2 = parseFloat(input3Num2);

//   if ((floatNum1 !== NaN) & (floatNum2 !== NaN)){
//     let total = floatNum1 * floatNum2;
//     outputnum3.innerHTML = "The product is: "  + total;
//   }

// }

// stretch solution from instructor
/* first we will creat a function that will get the number.
which will contain a paramter whichs agument is the inputs id.
will get the Element by id with .value.
make the input number a float.
return the number or else return 0.*/
function getNum(numIn) {
  const inputNum = document.getElementById(numIn).value;
  const floatNumIn = parseFloat(inputNum);
  if (floatNumIn !== NaN){
    return floatNumIn;
  }
  else return 0;
}

// create a function that will output the value,
function outTotal(value) {
  const outputNum = document.getElementById("stretchOutput");
  outputNum.innerHTML = "Answer: " + value;
}

// create a function to do the subtracting part
const subAllInput = (num1, num2) => num1 - num2;

// create a function to do the times part
const timesAllInput = (num1, num2) => num1 * num2

// example of using a callback to pull it all together
function doOperation(operation) {
  // the argument 'operation' is a function...so when we are ready we can call that function in our code below
  const answer = operation(
    getNum("stretchNum1"),
    getNum("stretchNum2")
  );
  outTotal(answer);
}



