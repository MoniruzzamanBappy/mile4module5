var numbers = [15, 14, 18, 19, 28, 38, 39, 58, 98];
console.log(numbers);
console.log('using break');
var i = 0;
while (i <= numbers.length) {
    console.log('start');
    console.log(numbers[i]);
    if (i == 3) {
        break;
    }
    console.log("after");
    console.log(numbers[i]);
    i++;
}

for (i; i <= numbers.length; i++) {

    if (numbers[i] < 40) {
        continue;
    }
    console.log(numbers[i]);
}