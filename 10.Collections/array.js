// Birbiriyle ilişkili ögelerin bir arada tutulduğu yer.

// var eggs = [egg1,egg2,egg3,egg4,egg5]
// var myEggg = eggs[1];

var guestList = ["behzat", "harun", "hayalet", "akbaba", "eda"];

//console.log(guestList);
//console.log(guestList.lenght);
//console.log(guestList[0]); //0. elemanın ne olduğunu sorgular.
// guestList.includes(guest) içinde var mı yok mu kontrol eder.

var guest = prompt("What is your name ? ");

if (guestList.includes(guest)){
    alert("Welcome");
}
else{
    alert("sorry, maybe next time.");
}

// array.push(1) diziye eleman ekler
// array.pop son elemanı siler

/////////////////////////////////////////////////////////////////////////////

var eggs = [];
var count = 1;
function fizzbuzz(){
    eggs.push(count);
    count++;
    console.log(eggs);
}

/////////////////////////////////////////////////////////////////////////////

