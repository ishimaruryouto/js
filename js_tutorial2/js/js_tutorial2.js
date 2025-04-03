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

// 配列の使い方
const animals = ["dog", "cat", "sheep"];
console.log(animals);

console.log(animals[0]);
console.log(animals[2]);

animals[2] = "rabbit";
console.log(animals[2]);

for (let i = 0; i < 3; i++) {
    console.log(animals[i]);
};

// lengthの使い方
console.log(animals.length);

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}




