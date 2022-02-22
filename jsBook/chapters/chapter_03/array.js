var dinosaur1 = "T-Rex";
var dinosaur2 = "Velocirator";
var dinosaur3 = "Stegosaurus";
var dinosaur4 = "Tricerators";
var dinosaur5 = "Branchiosaurus";
var dinosaur6 = "Pteranodon";
var dinosaur7 = "Apatosaurus";
var dinosaur8 = "Diplodocus";
var dinosaur9 = "Compsognathus";
[]; // that's array

var dinosaur = ["T-Rex",
                "Velocirator",
                "Stegosaurus",
                "Tricerators",
                "Branchiosaurus",
                "Pteranodon",
                "Apatosaurus",
                "Diplodocus",
                "Compsognathus"
]; // that's array too

var dinosaurus = [];
dinosaurus[0] = "T-Rex";
dinosaurus[2] = "Velocirator";
dinosaurus[2] = "Stegosaurus";
dinosaurus[3] = "Tricerators";
dinosaurus[4] = "Branchiosaurus";
dinosaurus[5] = "Pteranodon";
dinosaurus[6] = "Apatosaurus";
dinosaurus[7] = "Diplodocus";
dinosaurus[8] = "Compsognathus";
console.log(dinosaurus[6]);

var animals = [];
animals.push("Cat");
animals.push("Dog");
animals.push("Lama");
animals;
console.log(animals.length);
animals[0];
animals.unshift("Monkey");
console.log(animals);
animals.unshift("Polar bear");
console.log(animals);
animals[2];
animals;
var lastAnimal = animals.pop();
console.log(lastAnimal);
console.log(animals);
console.log(animals.pop());
console.log(animals);
animals.unshift(lastAnimal);
console.log(animals);

var lazyAnimals = ["Sylva", "Lyntik"];
console.log(lazyAnimals.join());
console.log(lazyAnimals.join(" - "));
console.log(lazyAnimals.join("/"));
console.log(lazyAnimals.join(" and "));

var names = ["Vicky", "Mike", "Yaroslav", "Vanya"];
console.log(names.join(" "));
console.log(names[0] + " " + names[1] + " " + names[2] + " " + names[3] + ":)" ); // If we didn't have "join"

var ages = [12, 41, 9, 19]
console.log(ages.join(" "));