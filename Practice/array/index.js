//Push()
var meyveler = ["elma", "armut", "muz"];
meyveler.push("çilek");
console.log(meyveler); // ["elma", "armut", "muz", "çilek"]

//Pop()
var meyveler = ["elma", "armut", "muz"];
var sonMeyve = meyveler.pop();
console.log(sonMeyve); // "muz"
console.log(meyveler); // ["elma", "armut"]

//Unshift()
var meyveler = ["elma", "armut", "muz"];
meyveler.unshift("kiraz", "şeftali");
console.log(meyveler); // ["kiraz", "şeftali", "elma", "armut", "muz"]

//Concat
var dizi1 = [1, 2, 3];
var dizi2 = [4, 5, 6];
var dizi3 = [7, 8, 9];
var birlesikDizi = dizi1.concat(dizi2, dizi3);

console.log(birlesikDizi); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//filter
var sayilar = [10, 20, 30, 40, 50, 60];

var buyukSayilar = sayilar.filter(sayi => sayi > 30);

console.log(buyukSayilar); // [40, 50, 60]

//every 
var yaslar = [25, 30, 22, 28, 35];

var hepsiYasliMi = yaslar.every(yas => yas >= 18);

console.log(hepsiYasliMi); // true

//some
var yaslar = [25, 30, 15, 28, 35];

var herhangiBiriYasliMi = yaslar.some(yas => yas >= 18);

console.log(herhangiBiriYasliMi); // true

//map
var sayilar = [1, 2, 3, 4, 5];

var kareleri = sayilar.map(sayi => sayi * sayi);

console.log(kareleri); // [1, 4, 9, 16, 25]

//sort
var sayilar = [30, 10, 5, 20, 15];

sayilar.sort();

console.log(sayilar); // [10, 15, 20, 30, 5]
/* ******** */
var sayilar = [30, 10, 5, 20, 15];

sayilar.sort(function(a, b) {
  return a - b;
});

console.log(sayilar); // [5, 10, 15, 20, 30]
