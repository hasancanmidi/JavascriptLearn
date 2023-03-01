var eggs = [];
var count = 1;
function fizzbuzz(){
    if (count % 3 === 0 && count % 5 === 0) {
        eggs.push("fizzbuzz");
    }   
    else if (count % 3 === 0) {
        eggs.push("fizz");
    }
    else if (count % 5 === 0){
        eggs.push("buzz");
    }
    else{
        eggs.push(count);
    }
    console.log(eggs);
    count++;
}
