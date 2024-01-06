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

function Complexfn(n) {
 var sum =0;
 for (var i=0; i<n; i++) {
  sum += i;
 }
 return sum;
}

var t1 = performance.now();
var ans = Complexfn(1000000000);

console.log(ans);
