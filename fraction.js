const prompt = require('prompt-sync');
class divide() {
  constructor(a,b) {
    this.a = a;
    this.b = b;
    this.c = a/b;
  }
  get_c() {
    return(this.c);
  }
}

function input() {
  a = parseInt(prompt("enter 1st number");
  b = parseInt(prompt("enter 2 nd number");
  return[a,b];
}

function output() {
  console.log("the quotient of %d and %d is %d",s.a,s.b,s.c);
}

function main() {
  let a = 0;
  let b = 0;
  [a,b] = input();
  let s = new divide(a,b);
  output(s);
}

main();
