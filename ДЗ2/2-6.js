function isEven (n) {
    if (typeof n !== "number") {
        throw new Error ("parameter type is not a Number");
    } else {
       return (n % 2 == 0) ? true : false;
    }
}

console.log(isEven(3));
console.log(isEven(4));
console.log(isEven('Content'));