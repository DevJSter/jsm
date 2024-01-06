// function startLane(n) {
//  var answer = "";
//  for (var i = 0; i < n; i++) {
//   answer += "**";
//  }
//  console.log(answer) ;
// }

// function starryPattern(n) {
//  for (var i = 1; i <= n; i++) {
//   startLane(i);
//  }
// }

// var answer = starryPattern(10);
// console.log(answer);

// function starryPattern(n) {
//   for (var i = 1; i <= n; i++) {
//    var answer = "";
//     for (var j = 0; j < i+1; j++) {
//       answer += "**";
//      }
//       console.log(answer) ;
//   }
//  }
 
//  var answer = starryPattern(10);
//  console.log(answer);


// Javascript is Single threaded

// function Complex(n) {
//  var sum =0;
//  for (var i=0; i<n; i++) {
//   sum += i;
//  }
//  return sum;
// }


// var ans = Complex(100000);

// console.log(ans);

//extra js
// for (var i = 0; i < 15559; i++) {
//  console.log("Radha");
// }

function count (first, second) {
 var sum = 0;
 for (var i = first; i < second; i++) {
  sum += i;
 }
 return sum;
}



var ans = count(1, 100);
console.log(ans);