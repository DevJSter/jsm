function startLane(n) {
 var answer = "";
 for (var i = 0; i < n; i++) {
  answer += "**";
 }
 console.log(answer) ;
}

function starryPattern(n) {
 for (var i = 1; i <= n; i++) {
  startLane(i);
 }
}

var answer = starryPattern(10);
console.log(answer);