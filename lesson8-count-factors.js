function solution(A) {
  var factor = 0;
  var sqrtN = Math.sqrt(A);
  var i = 1;
  while (i <= sqrtN) {
    if ((A % i) == 0)
      if ((A / i) == sqrtN)
        factor++;
      else
        factor += 2;
 
    i++;
  }
 
  return factor;
}