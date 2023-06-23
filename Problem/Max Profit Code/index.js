let arr = [0, 0, 0];
let time_unit = [4, 5, 10];

function main() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the Time unit: ', (input) => {
    const n = parseInt(input);
    console.log("Earnings: $" + find(n));
    console.log("Solution: \n" + solString());
    rl.close();
  });
}

function find(n) {
  let pr = 0;
  let prof = [0, 0, 0];
  
  if (n < 4) {
    return 0;
  } else {
    let temp = n - 4;
    prof[0] = temp * 1000;
    if (n >= 5) {
      temp = n - 5;
      prof[1] = temp * 1500;
      if (n >= 10) {
        temp = n - 10;
        prof[2] = temp * 3000;
      }
    }
  }
  
  let max_index = getMax(prof);
  pr += prof[max_index];
  arr[max_index]++;
  
  return pr + find(n - time_unit[max_index]);
}

function getMax(prof) {
  if (prof[0] >= prof[1]) {
    if (prof[0] >= prof[2]) {
      return 0;
    } else {
      return 2;
    }
  } else if (prof[1] >= prof[2]) {
    return 1;
  } else {
    return 2;
  }
}

function solString() {
  return "T: " + arr[1] + ", P: " + arr[0] + ", C: " + arr[2];
}

main();
