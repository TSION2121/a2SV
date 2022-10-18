'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort1(n, arr) {
    // Write your code here
 let IndexToTheRightMost = n-1;
    let temp = arr[IndexToTheRightMost];
for(let i=0; i<n-1; i++){
    if(arr[IndexToTheRightMost-1] > temp){
        arr[IndexToTheRightMost] = arr[IndexToTheRightMost-1];
        IndexToTheRightMost--;
        const str = `${arr.join(' ')}`;
        console.log(str);
    }
    else{
        arr[IndexToTheRightMost] = temp;
        break;
    }
}
        const str = `${arr.join(' ')}`;

        console.log(str);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}
