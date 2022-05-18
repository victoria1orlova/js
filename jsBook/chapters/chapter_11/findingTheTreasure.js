console.log("start");

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
        return "Get burn!";
    } else if (distance < 20) {
        return "Very hot";
    } else if (distance < 40) {
        return "Hot";
    } else if (distance < 80) {
        return "Warmly";
    } else if (distance < 160) {
        return "Cold";
    } else if (distance < 320) {
        return "V.. v..very c..c..cold";
    } else {
        return "Get freezed!"
    };

    var width = 400;
    var height = 400;

    var target = {
        x: randomNum(width),
        y: randomNum(height)
    };
};

var clicks = 0;
document.getElementById("map").onclick = function(){
    clicks++;

    console.log("Click!");

    var distance = getDistance(event, target);

    var distanceHint = getDistanceHint(distance);

    $("#distance").text(distanceHint);

    if (distance < 8) {
        alert("Treasure found! Clicks made: " + click);
    }
};