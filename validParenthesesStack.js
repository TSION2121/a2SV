/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // create a stack initially
    let stacks = []
    // loop through each element in the string
    for (i = 0; i< s.length; i++){
        let char = stacks[stacks.length -1]
        //push if you encounterd starting bracket 
        if (s[i] =="(" || s[i]== "{" || s[i]== "["){
            stacks.push(s[i])
        }
        //pop the opening bracket off the stack
    // if there is a corresponding closing bracket in the string
        else if ((char == "(" && s[i]== ")") ||
                (char == "{" && s[i]== "}") ||
                 (char == "[" && s[i]== "]")
                ){
            stacks.pop()
        }
        else return false
    }
    //is the stack empty?
    return stacks.length ? false : true
};
