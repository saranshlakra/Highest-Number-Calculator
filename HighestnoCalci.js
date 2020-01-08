// highest number calcultor
var numbers = [9, 2, 4, 60, 8, 10, 100, 12];
var numMax1 = numbers[0]

for (i = 0; i < numbers.length; i++) {
    //  console.log(numbers[i]);
    if (numbers[i] >= numMax1) {
        numMax1 = numbers[i];
    } else {

    }
}
console.log('Highest Number: ' + numMax1);
console.log(numbers);