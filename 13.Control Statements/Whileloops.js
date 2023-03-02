// While Loops
// Küme içerisinde ki parantez yanlış olana dek devam döngü eder.
/*

while (something is true){
    Do something
}

*/


var eggs = [];
var count = 1;

function fizzbuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            eggs.push("fizzbuzz");
        }
        else if (count % 3 === 0) {
            eggs.push("fizz");
        }
        else if (count % 5 === 0) {
            eggs.push("buzz");
        }
        else {
            eggs.push(count);
        }
        count++;
    }
    console.log(eggs);
}


/////////////////////////////////////////////

var numberOfBottles = 99

while (numberOfBottles >= 0) {
    var bottleWord = "bottle";

    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }

    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");

    console.log(numberOfBottles + " " + bottleWord + " of beer,");

    console.log("Take one down, pass it around,");

    numberOfBottles--;

    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

