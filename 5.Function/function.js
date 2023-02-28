// Math.floor() Tabana yuvarlar

// Function //

//Creating the function
function getMilk(){
    //Cods
}
//Calling the function
getMilk();

//////////////////////////////////////////////////////////////////////////

function lifeInWeeks(age){
    
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("You have " + days + " days " + weeks + " weeks " + months + " months left.")
    
}

//////////////////////////////////////////////////////////////////////////

//Creating the function
function getMilk(money){
    console.log("but" + calcBottles(money, costPerBottle) + "bottles of milk");
    return calcChange(money, costPerBottle); //Remainder of this division.
}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}
function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Hello master, here is your " + getMilk(5,1.5) + " change");