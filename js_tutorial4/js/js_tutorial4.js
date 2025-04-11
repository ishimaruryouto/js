// tutorial2の復習
const animalDate = {
    name: "レオ",
    age: 3,
    greet: () => {
        console.log("こんにちは！");
    }
}
console.log(animalDate.name);
animalDate.greet();

// クラス名の使い方
class Animal { }
const animal = new Animal();
console.log(animal);

// コンストラクタ（constructor）の使い方
class AnimalNew {
    constructor() {
        console.log("インスタンスを生成しました");
    }

}
const animalNew = new AnimalNew();

class Animals {
    constructor() {
        this.name = "レオ";

        this.age = 3;
    }
}

const animals = new Animals();

console.log(`名前: ${animals.name}`);

console.log(`年齢:${animals.age}`);