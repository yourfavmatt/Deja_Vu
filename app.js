let num = 7.89;
let n = num.toFixed(2)
let guessNumber 
while (guessNumber != n) {
  guessNumber = prompt("Guess Number to the one-hundreth decimal");
  if (guessNumber == n) {
      alert("Congrats you are correct!");
  } else if (guessNumber > n) {
      alert("Guess was too high");
  } else if (guessNumber < n) {
      alert("Guess was too low");
  }
}



