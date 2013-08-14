var start = (new Date()).getTime();
// -------------------------

var a = 999
  , b = 999
  , c = 0
  , palindrom = 0;



for(a = 999; a > 0; a--)
{
  for(b = 999; b > 0; b--)
  {
    c = a*b;
    if (c < palindrom)
    {
      break;
    }

    if(String(c).split('').reverse().join('') == c)
    {
      if (c > palindrom)
      {
        palindrom = c;
      }
      break;
    }
  }
}

// -------------------------
console.log("result: "+palindrom);
console.log("ms taken: "+((new Date()).getTime() - start));