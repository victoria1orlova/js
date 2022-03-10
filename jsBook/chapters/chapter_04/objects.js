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
