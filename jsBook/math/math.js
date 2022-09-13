var onLoaded = function () {
    var ar = [-1, 3, 9, 3, 18];
    document.getElementById("array").innerHTML = ar;

    var avg = avg(ar);
    document.getElementById("result").innerHTML = "avarage: " + avg;

    var amp = amp(ar);
    document.getElementById("amplitude").innerHTML = "amplitude: " + amp;

    function avg(ar) {
        var sum = 0;
        for (let i = 0; i < ar.length; i++) {
            sum = sum + ar[i];
        }

        var avg = sum / ar.length;
        return avg;
    }

    function min(ar) {
        var min = Number.MAX_VALUE;
        for (let i = 0; i < ar.length; i++) {
            if (ar[i] < min) {
                min = ar[i];
            }
        }

        return min;
    }

    function max(ar) {
        var max = Number.MIN_VALUE;
        for (let i = 0; i < ar.length; i++) {
            if (ar[i] > max) {
                max = ar[i];
            }

        }

        return max;
    }

    function amp(ar){
        var amp = max(ar) - min(ar);
        return amp;
    }
}