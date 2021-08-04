var i = 0;
while(i < 10){
    console.log(i);
    if (i==5){
        break;
    }

    i++;
}

for (var i = 0; i < 10; i++){
    console.log(i);
    if (i==5){
        break;
    }
}
var numbers = [13, 11, 17, 28, 73, 69, 109, 83, 94]
for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number > 100){
        // break;
        continue;
    }
    console.log(number);
}