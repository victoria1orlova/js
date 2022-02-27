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

var landMarks = [];
landMarks.push("My house;");
landMarks.push("School,");
landMarks.push("Shop,");
landMarks.push("Cinema,");
landMarks.push("My friend's house,");
landMarks.push("Cafe,");
landMarks.push("Park,");
landMarks.push("Gym,");
console.log(landMarks.pop(),
            landMarks.pop(),
            landMarks.pop(),
            landMarks.pop(),
            landMarks.pop(),
            landMarks.pop(),
            landMarks.pop(),
            landMarks.pop());

for(var i = 0; i < 3; i++)
{
    console.log(Math.random());
}

for(var i = 0; i < 3; i++)
{
    console.log(Math.random() * 10);
}

console.log(Math.floor(3.567392));
console.log(Math.floor(9.9999));
console.log(Math.floor(0.79436998239729));

console.log(Math.floor(Math.random() * 3));

var randomPlace = ["Kyiv", "Odessa", "Harkiv", "Lviv"];
var randomIndex = Math.floor(Math.random() * 4);
console.log(randomPlace[randomIndex]);

var randomBodyParts = ["eye", "nose", "skull"];
var randomAdjectives = ["smelly", "dull", "stupid"];
var randomWords = ["fly", "otter", "cudgel", "monkey", "rat"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 5)];
var randomInsult = "You have " + randomBodyPart + " like " + 
randomAdjective + " " + randomWord + "!!!";
console.log(randomInsult);