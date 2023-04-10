//const, let, var

let name = "Hasan Can";
const age = 24; // const soradan değiştirilemez. bir veri tipidir.
const number1 = "10"; // bu bir stringdir
let number2 = 10.6666666;
const result = false;

// String, Number, Boolean

name = "deneme deneme";

console.log(Number(number1) + age); //Number(number1) tipini değiştim.
console.log(number1 + age.toString); //age.toString() ifadeyi string bir ifadeye çevirir

// NaN = Tanımsız.
// Undefined = Tanımsız.
// Null = boş.

console.log(number2.toFixed(2)); // toFixed ile ondalıklı sayının virgülden sonra istediğimiz kadarını almamıza yarayan kod.

// Sayısal veri tipleri

let x = 5;       // tam sayı (integer)
let y = 3.14;    // ondalıklı sayı (float)

// Metinsel veri tipleri 

let ad = 'Ali';      // tek tırnak içinde string (metin) veri tipi
let soyad = "Veli";  // çift tırnak içinde string (metin) veri tipi

// Boolean veri tipi sadece true ve false olur

let yas = 18;
let ehliyetVarMi = true;

// Null ve Undefined Veri Tipleri

let a = null;      // null veri tipi
let c;             // undefined veri tipi

// Diziler 

let meyveler = ["elma", "armut", "çilek"];