var onloaded = function () {
    

var Car = function (x, y) {
    this.x = x;
    this.y = y;
};

var drawCar = function (car) {
    var carHtml = '<img src="https://www.pngall.com/wp-content/uploads/11/White-Tesla-PNG-Free-Image.png">';

    var carElement = $(carHtml);

    carElement.css({
        position: "absolute",
        left: car.x,
        top: car.y,
        width: "40%"
    });

    $("body").append(carElement);
};

var tesla = new Car(10, 20);
var nissan = new Car(100, 200);
drawCar(tesla);
drawCar(nissan);

var cat = {
    name: "Silva",
    legs: 4,
    isAwesome: true
};
console.log(cat.name);
cat.age = 3;
console.log(cat);

cat.meow = function () {
    console.log("Meow-meow! My name is " + this.name);
};
console.log(cat.meow);

var speak = function () {
    console.log(this.sound + "! My name is " + this.nam);
};

var littleCat = {
    sound: "Myau",
    name: "Luntik",
    speak: speak
};
console.log(cat.speak);
};