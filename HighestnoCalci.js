// highest number calcultor
var numMax1, numMax2, numMax3;
var numbers = [9, 2, 4, 60, 80, 10, 100, 12];
numMax1 = numbers[0]
numMax2 = numbers[0]
numMax3 = numbers[0]

for (i = 0; i < numbers.length; i++) {
    //  console.log(numbers[i]);
    if (numbers[i] >= numMax1) {
        numMax3 = numMax2;
        numMax2 = numMax1;
        numMax1 = numbers[i];
    } else if (numbers[i] >= numMax2) {
        numMax3 = numMax2;
        numMax2 = numbers[i];
    } else {
        numMax3 = numbers[i];
    }
}

console.log(numbers);
console.log('1st Highest Number: ' + numMax1 + ',' + '2nd Highest Number: ' + numMax2 + '.');