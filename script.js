function add (x) {
  return x + 2;
}

function multiply (x) {
  return x * 3;
}

function subtract (x) {
  return x - 4;
}

console.log("When you call each of the functions in a chain using 5 for a value you get " + add(multiply(subtract(5))) + " in return.");
