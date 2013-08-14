var start = (new Date()).getTime();
var max = 1000;
// -------------------------

var i
  , sum = 0;

for (i=0; i<max; i++)
{
  if (i%3 === 0 || i%5 === 0)
  {
    sum = sum + i;
  }
}

// -------------------------
console.log("result: "+sum);
console.log("ms taken: "+((new Date()).getTime() - start));