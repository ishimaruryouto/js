let number = 0;
number += 1;
console.log(number);
number += 1;
console.log(number); number += 1;
console.log(number); number += 1;
console.log(number); number += 1;
console.log(number);

while (number <= 100) {
    console.log(number);
    number += 1;

}

for (let number = 1; number <= 100; number++) {
    console.log(number);
}

for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0) {
        console.log("3の倍数です");
    } else {
        console.log(number);
    }
}

const animals = ["dog", "cat", "sheep"];
console.log(animals);

console.log(animals[0]);
console.log(animals[2]);

animals[2] = "rabbit";
console.log(animals[2]);

for (let i = 0; i < 3; i++) {
    console.log(animals[i]);
    ;
}

console.log(animals.length);

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

const character = { name: "にんじゃわんこ", age: 14 };
console.log(character);

console.log(character.name);
character.age = 20;
console.log(character);

const characters = [
    { name: "にんじゃわんこ", age: 14 },
    { name: "ひつじ仙人", age: 1000 }
];

console.log(characters[0]);
console.log(characters[1].name);

const characterGuys = [
    { name: "にんじゃわんこ", age: 14 },
    { name: "ひつじ仙人", age: 100 },
    { name: "ベイビーわんこ", age: 5 },
];

for (let i = 0; i < characterGuys.length; i++) {
    console.log("--------------------");
    const chara = characterGuys[i];
    console.log(`名前は${chara.name}です`);
    console.log(`${chara.age}歳です`);
}

const chara = [
    { name: "にんじゃわんこ", age: 14 },
    { name: "ひつじ仙人", age: 100 },
    { name: "ベイビーわんこ", age: 5 },
    { name: "とりずきん" }
];

for (let i = 0; i < characters.length; i++) {
    console.log("--------------------");
    const character = characters[i];
    console.log(`名前は${character.name}です`);
}

if (character.age === undefined) {
    console.log("年齢は秘密です");
} else {
    console.log(`${character.age}歳です`);
}

const cafe = {
    name: "Progateカフェ",
    businessHours: {
        opening: "10:00(AM)",
        closing: "8:00(PM)"
    },
    menus: ["コーヒー", "紅茶", "チョコレートケーキ"]
};

console.log(`店名:${cafe.name}`);
console.log(`営業時間: ${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("おすすめメニューはこちら");

for (let i = 0; i < cafe.menus.length; i++) {
    console.log(cafe.menus[i]);
}






