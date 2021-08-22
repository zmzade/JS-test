function logNumber() {
  for (let i = 0; i <= 100; i++) {
    console.log(i);

    if (i % 15 === 0) {
      return console.log("Jackpot!");
    }
    if (i % 3 === 0) {
      return console.log("this is divisble by 3");
    }
    if (i % 3 === 5) {
      return console.log("this is divisble by 5");
    }
  }
}
