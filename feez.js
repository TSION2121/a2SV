/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const numbers = []
    
    for(let i =1; i<=n; i++){
        if (i%3 == 0 && i%5 == 0){
            numbers.push("FizzBuzz")
        }
        else if (i%3 == 0 ){
            numbers.push("Fizz")

        }
         else if (i%5 == 0 ){
            numbers.push("Buzz")

        }
         else {
            numbers.push(i.toString())

        }
    
    }
    return numbers
    
};
