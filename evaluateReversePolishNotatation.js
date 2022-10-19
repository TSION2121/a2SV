/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let set = new Set();
    set.add('+');
    set.add('-');
    set.add('/');
    set.add('*');
    
    let i = 0;
    while(tokens.length > 1) {
        if(set.has(tokens[i+2])) {
            const result = calculate(parseInt(tokens[i]), parseInt(tokens[i+1]), tokens[i+2]);
            tokens.splice(i, 3, result);
            i = 0;
        } else
            i++;
    }
    
    return tokens[0];
};
    
const calculate = (left, right, operator) => {
    let res;
    switch(operator) {
        case '+':
            res = left + right;
            break;
        case '-':
            res = left - right;
            break;
        case '*':
            res = left * right;
            break;
        case '/':
            res = left / right;
            break;
    }
    
    return res;
}
