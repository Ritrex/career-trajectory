var rate = 5;
var arrRate = [];
var limitRate = 4;
var i = 1;

for (var i = 1; i <= rate; i++) {
  arrRate.push(true);
}
if (arrRate.length <= limitRate) {
  for (i = arrRate.length; i <= limitRate; i++) {
    arrRate.push(false);
  }
}
console.log("22222", arrRate);
