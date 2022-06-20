var onloaded = function () {
    var Car = function (x, y) {
        this.x = x;
        this.y = y;
    };

    Car.prototype.draw = function (car) {
        var carHtml = '<img src="https://www.pngall.com/wp-content/uploads/11/White-Tesla-PNG-Free-Image.png">';

        this.carElement = $(carHtml);

        this.carElement.css({
            position: "absolute",
            left: this.x,
            top: this.y,
            width: "20%"
        });

        $("body").append(this.carElement);
    };

    Car.prototype.moveRight = function () {
        console.log("move right");
        this.x += 5;

        this.carElement.css({
            left: this.x,
            top: this.y
        });
    };

    Car.prototype.moveLeft = function () {
        console.log("move left");
        this.x -= 5;

        this.carElement.css({
            left: this.x,
            top: this.y
        });
    };
    Car.prototype.moveUp = function () {
        console.log("move up");
        this.y -= 5;

        this.carElement.css({
            left: this.x,
            top: this.y
        });
    };
    Car.prototype.moveDown = function () {
        console.log("move down");
        this.y += 5;

        this.carElement.css({
            left: this.x,
            top: this.y
        });
    };

    var tesla = new Car(10, 20);
    var nissan = new Car(100, 200);
    tesla.draw();
    nissan.draw();

    function moveUp() {
        tesla.moveUp();
        nissan.moveUp();
    }
    function moveDown() { 
        tesla.moveDown();
        nissan.moveDown();
     }
    function moveLeft() { 
        tesla.moveLeft();
        nissan.moveLeft();
     }
    function moveRight() { 
        tesla.moveRight();
        nissan.moveRight();
     }

    document.addEventListener('keydown', (event) => {

        switch (event.key) {
            case 'ArrowUp':
                moveUp();
                break;
            case 'ArrowDown':
                moveDown();
                break;
            case 'ArrowLeft':
                moveLeft();
                break;
            case 'ArrowRight':
                moveRight();
                break;
        }

        console.log('Key pressed: ' + event.key + ' key code value: ' + event.code);
    }, false);


    /*
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
    */
};