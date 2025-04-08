// 関数の呼び出し
const greet = function () {
    console.log("こんにちは！");
    console.log("関数を学習していきましょう！");
}
greet();

// 定数helloに関数を代入してください
const name = "石丸椋士";
const hello = function () {
    console.log("こんにちは！");
    console.log(`私の名前は${name}です`);
}
hello();

// アロー関数の使い方
const Greet = () => {
    console.log("こんにちは！");
}
Greet();

// 引数の使い方
const hi = (name) => {
    console.log(`こんにちは、${name}さん`);
}
hi("ひつじ仙人");

// 関数に複数の引数を渡す使い方
const add = (number1, number2) => {
    console.log(number1 + number2);
}
add(5, 7);

// 戻り値の使い方
const half = (number) => {
    return number / 2;
}
const result = half(130);
console.log(`130の半分は${result}です`);

// 戻り値の詳しい使い方
const check = (number) => {
    return number % 3 === 0;
}

if (check(123)) {
    console.log("3の倍数です");
} else {
    console.log("3の倍数ではありません");
}



