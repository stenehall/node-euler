var start = (new Date()).getTime();
var max = 4000000;
// -------------------------

var a = 1
  , b = 2
  , tmp = 0
  , sum = 0;

while (a < max) {
  if (a%2 === 0)
  {
    sum = sum + a;
  }

  tmp = b;
  b = a + b;
  a = tmp;
}

// -------------------------
console.log("result: "+sum);
console.log("ms taken: "+((new Date()).getTime() - start));