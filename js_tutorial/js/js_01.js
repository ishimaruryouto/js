console.log("miyoshinn");

// 計算
console.log("5+4");
console.log(2 + 4);

console.log(8 * 4);
console.log(24 / 4);

// 文字列
console.log("ひつじ" + "仙人");
console.log("20" + "15");

// 変数
let name = "にんじゃわんこ";
console.log(name);

// 変数２(円の計算)
let length = 5;
console.log(length * length * 3);

// 変数の上書き
name = "うわずきん";
console.log(name);

// 変数自身の更新
let number = 7;
console.log(number);

number = number + 3;
number = number / 2;

// constの使い方
const language = "フランス語";
console.log(language);
console.log(language + "を話せます");

// $の使い方
let myname = "石丸椋士";
console.log(`僕の名前は${myname}です`);

let age = 19;
console.log(`今は${age}です`);

// if文の使い方
const level = 12;
if (level > 10) {
    console.log("levelは10よりも大きいです");
}

let myAge = 24;
console.log(myAge >= 20);
console.log(myAge < 20);

if (myAge >= 20) {
    console.log("私は20歳以上です");
}

const password = "ninjawanko";
if (password === "ninjawanko") {
    console.log("ログインに成功しました");
};

if (password !== "ninjawanko") {
    console.log("パスワードが間違っています");
};

// elseの使い方
if (myAge >= 20) {
    console.log("私は20歳以上です");
} else {
    console.log("私は20歳未満です");
}

// else ifの使い方
if (myAge >= 17) {
    console.log("私は20歳以上です");
} else if (myAge >= 20) {
    console.log("私は20歳未満ですが、10歳以上です");
}
else {
    console.log("私は20歳未満です");
}

// かつ＆＆　　または||の使い方
let age2 = 24;
if (age2 >= 20 && age2 < 30) {
    console.log("私は20代です");
}

// swith
const n = 2;

switch (n) {
    case 1:
        console.log("大吉です");
        break;
    case 2:
        console.log("吉です");
        break;
    case 3:
        console.log("小吉です");
        break;
}

// defaultの使い方
const n2 = 4;

switch (n2) {
    case 1:
        console.log("大吉です");
        break;
    case 2:
        console.log("吉です");
        break;
    case 3:
        console.log("小吉です");
        break;
    default:
        console.log("凶です");
        break;
}