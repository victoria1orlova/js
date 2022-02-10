var a = 4;
var b = 2;
var c = a + b; // addition
var d = a - b; // subtraction
var e = a * b; // multiplication
var f = a / b; // division
console.log(c, d, e, f);

var vicky;
// underfined

var age = 12;
// underfined

var cSharpBetter = true;
var javaScriptIsHard = false;

var yaroslav;
var vicky = !yaroslav;

var box = null;

var a = 10;
console.log(a + a);

var f = 1;
++f; // increment
--f; // decrement

console.log("+=", 
            a += 5,
            "-=", 
            a -= 1);

var string = "Just string";
console.log("lenght: ", string.length);

var myNickName = "Hero10Vvv";
console.log(myNickName[4],
            myNickName[5]);
var myName = "Vicky";
console.log(myName.slice(2, 5));

var height = 154;
var secondHeight = 156;
console.log(secondHeight > height,
            height > secondHeight,   // false
            height >= secondHeight,  // true
            height < secondHeight,   // false
            height <= secondHeight); // true

var str = "Hi there, what's up?";
var str2 = "hI tHeRe, WhaTs Up?";
console.log(str.toLowerCase(),
            str2.toLowerCase());

var sillyString = "HeLlO THErE, HoW ARE yOu?";
var lowerString = sillyString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1);
console.log(firstCharacterUpper + restOfString);