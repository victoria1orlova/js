function loadImage() {
    console.log("Map is ready");

    var clicks = 0;
    document.getElementById("map").onclick = function () {
        clicks++;

        var width = 400;
        var height = 400;

        var target = {
            x: randomNum(width),
            y: randomNum(height)
        };

        var distance = getDistance(event, target);

        var distanceHint = getDistanceHint(distance);

        console.log(distanceHint);

        if (distance < 8) {
            console.log("Treasure found! Clicks made: " + clicks);
        }
    };
}

var randomNum = function (size) {
    return Math.floor(Math.random() * size);
};

var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

var getDistanceHint = function (distance) {
    if (distance < 10) {
        console.log("Distance is: " + distance);
        return "Get burn!";
    } else if (distance < 20) {
        console.log("Distance is: " + distance);
        return "Very hot";
    } else if (distance < 40) {
        console.log("Distance is: " + distance);
        return "Hot";
    } else if (distance < 80) {
        console.log("Distance is: " + distance);
        return "Warmly";
    } else if (distance < 160) {
        console.log("Distance is: " + distance);
        return "Cold";
    } else if (distance < 320) {
        console.log("Distance is: " + distance);
        return "V.. v..very c..c..cold";
    } else {
        console.log("Distance is: " + distance);
        return "Get freezed!"
    };
};