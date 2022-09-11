var onLoaded  = function(){
    var ar = [-1, 3, 9, 3, 18];
    debugger;
    arg(ar);
    document.getElementById("result").value = avr;
}

var avg = function(ar){
    var sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum = sum + ar[i];
    }

    var avg = sum / nums.length;
    return avg;
}

function min(ar){
    var min = Number.MAX_VALUE;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] < min) {
            min = ar[i];
        }
    }

    return min;
}

function max(ar){
    var max = Number.MIN_VALUE;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > max) {
            max = ar[i];
        }

    }

    return max;
}

function amp(ar){
    var min = Number.MAX_VALUE;
    var max = Number.MIN_VALUE;
}