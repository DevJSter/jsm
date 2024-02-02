// Promises

function promiseBody(resolve) {
 setTimeout(resolve , 5000);
}

function medicineget() {
  var answer = new Promise(promiseBody);
  return answer;
}

function printthing() {
  console.log("I am done");
}

var promise = medicineget();
promise.then(printthing);


// same thing in callbacks
function medicineget() {
  console.log("I am done");
}
setTimeout(medicineget, 5000);