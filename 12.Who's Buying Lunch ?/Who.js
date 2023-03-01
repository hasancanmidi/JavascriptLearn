var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names){
    var numberOfPeoples = names.length;
    var randomPersonPosition = math.floor(math.random() * numberOfPeoples);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
}