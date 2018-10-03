function fibLoop1(n){
  let arr = [1, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return arr[n-1]
}

function fibRecursion(n){
    if (n <= 1) {
    return n;
  } else {
    return fibRecursion(n-1) + fibRecursion(n-2);
  }
} 

let n = parseInt(prompt('Enter number of Fibonacci:'));

//let solutions = fib(n);
alert('Loop1 :' + fibLoop1(n));
alert('Recursion :' + fibRecursion(n));