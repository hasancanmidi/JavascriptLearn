//for(let i=0; i<=10; i++){
//    console.log(i)
//}

var meyveler = ["elma", "armut", "muz", "çilek"];

meyveler.forEach(function(meyve, index) {
  console.log("Meyve " + index + ": " + meyve);
});

/*
let i = 0: Döngü değişkeni i'yi 0 olarak başlatır.
i < 5: Koşul ifadesi, i'nin 5'ten küçük olduğu sürece döngünün devam etmesini sağlar.
i++: Her döngü adımında i değeri bir artar.
*/


// Spread operator Spread operatörü, veri yapılarını kopyalamak, birleştirmek veya ayırmak için oldukça kullanışlıdır ve JavaScript kodunu daha okunabilir ve kompakt hale getirir.

const nesne1 = { ad: "Ahmet", yas: 25 };
const nesne2 = { soyad: "Yılmaz", meslek: "Mühendis" };

const birlesikNesne = { ...nesne1, ...nesne2 };

console.log(birlesikNesne);
// { ad: "Ahmet", yas: 25, soyad: "Yılmaz", meslek: "Mühendis" }



