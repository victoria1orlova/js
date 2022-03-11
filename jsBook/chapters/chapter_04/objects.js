var catOption1 = {
    "legs": 3,
    "name": "Harmony",
    "color": "Tortoiseshell"
};
var catOption2 = {
    legs: 3,
    name: "Harmony",
    color: "Tortoiseshell"
};
var catOption3 = {
    "legs": 3,
    "full name": "Philomena harmony Usi-Pusechka Morgan",
    "color": "Tortoiseshell"
};
var cat = { legs: 3, name: "Harmony", color: "Tortoiseshell" };
console.log(cat["name"]);
// console.log(cat.name);

var dog = { name: "Sharik",  age: 3, color: "Ginger",
bark: "Woof woof woof!"};
var cat = { name: "Vaska",  age: 4, color: "Black",
says: "Meow meow meow"};
console.log(Object.keys(dog));
console.log(Object.keys(cat));

var object = {};

var nyanCat = {};
nyanCat["legs"] = 3;
nyanCat["name"] = "Harmony";
nyanCat["color"] = "Tortoiseshell";
console.log(cat);

var nyanCat = {};
nyanCat.legs = 3;
nyanCat.name = "Harmony";
nyanCat.color = "Tortoiseshell";
console.log(cat);

var dog = {
    name: "Sharik",
    age: 3,
    isAwesome: true
};
console.log(dog.isBrown);

var dinosaurus = [
    { name: "Tyrannosaurus Rex", period: "Upper Cretaceous" },
    { name: "Stegosaurus", period: "Upper Jurassic" },
    { name: "Plateosaurus", period: "Triassic" },
];
console.log(dinosaurus[0],
            dinosaurus[0] ["name"],
            dinosaurus[1].period);

var anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };
var friends = [anna, dave, kate];
console.log(friends[1]);
console.log(friends[2].name);
console.log(friends[0].luckyNumbers[1]);

var owedMoney = {};
owedMoney["Jimmy"] = 5;
owedMoney["Anna"] = 7;
console.log(owedMoney["Jimmy"]); //5
console.log(owedMoney["Elis"]);
owedMoney["Elis"]; // undefined
owedMoney["Jimmy"] += 3;
console.log(owedMoney["Jimmy"]);
console.log(owedMoney);

var movies = {
    "Finding Nemo": {
        releaseDate: 2003,
        duration: 100,
        actors: ["Albert Brooks", "Ellen DeGeneres",
        "Alexander Gould"],
        format: "DVD"
    },
    "Star Wars: Episode VI - Return of the jedi": {
        releaseDate: 1983,
        duration: 134,
        actors: ["Mark Hemill", "Harrison Ford", "Karry Fisher"],
        format: "DVD"
    },
    "Garry Potter and Goblet of fire": {
        releaseDate: 2005,
        duration: 157,
        actors: ["Deniel Redliff", "Emma Watson", "Rupert Grind"],
        format: "Blu-ray"
    }
};
var findingNemo = movies["Finding Nemo"];
console.log(findingNemo.duration, findingNemo.format);

var cars = {
    releaseDate: 2006,
        duration: 117,
        actors: ["Ouen Wilson", "Bonny Hant", "Pol Newman"],
        format: "Blu-ray"
};
console.log(movies["Wheelbarrows"] = cars);
console.log(Object.keys(movies));

var myCrazyObject = {
    "name": "Ridiculous object",
    "some array": [7, 9, { purpose : "confusion", number: 123 }, 3.3],
    "random animal": "Banana shark"
};