// tutorialの復讐
let number = 0;
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);

// while文の使い方
number = 1;
while (number <= 100) {
    console.log(number);
    number += 1;
}

// for文の使い方
for (number = 1; number <= 100; number++) {
    console.log(number);
}

// 3の倍数の時にコンソールに  "3の倍数です"  と表示
for (number = 1; number <= 100; number++) {
    if (number % 3 === 0) {
        console.log("3の倍数です");
    } else {
        console.log(number);
    }
}