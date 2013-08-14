var start = (new Date()).getTime();
var nr = 600851475143;

// -------------------------

var i = Math.floor(nr/2)
  , existingPrimes = [];


function isPrime(number)
{
  if (existingPrimes.indexOf(number) !== -1)
  {
    return true;
  }

  for (var f = 2; f < number/2; f++)
  {
    if (Math.floor(number/f) === number/f)
    {
      return false;
    }
  }

  existingPrimes.push(number);
  return true;
}

for (i=3; i < (nr/2); i = i + 2)
{
  if(nr/i == Math.floor(nr/i))
  {
    if (isPrime(i))
    {
      nr = nr / i;
      i = 3;
    }
  }
}

if (isPrime(nr))
{
  prime = nr;
}
else
{
  prime = existingPrimes.pop();
}

// -------------------------

console.log("result: "+prime);
console.log("ms taken: "+((new Date()).getTime() - start));