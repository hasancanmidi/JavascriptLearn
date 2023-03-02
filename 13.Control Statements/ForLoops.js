//For Loops

/*
for (i=0; i<10; i++){
    console.log("Hasan Can Midi " + i);
}
*/

//////////////////////////////////////////
var eggs = [];

function fizzbuzz() {
    for (var count = 1; count <= 100; count++) {
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
    }
    console.log(eggs);
}
/*
While döngüsü bir durum devam ederken sürekli çalıştırır yani o durum sürdüğü sürece o döngünün içerisindesindir
for döngüsünde ise kaç kez calıstıracagımızı belirliyoruz.
*/