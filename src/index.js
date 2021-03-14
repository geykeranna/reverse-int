module.exports = function reverse (n) {
  n = Math.abs(n);
  let rev = 0; //результат
  while (true)
  {
     if(n == 0) break;
     rev = rev * 10 + n % 10;
     n = n / 10 | 0;
  }
     return rev;
}
