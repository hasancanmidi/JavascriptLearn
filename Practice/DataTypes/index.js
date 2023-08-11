console.log("Tonio Teclic")

// const , let , var atama işlemleridir
// const değiştirilemez değişkendir. Sonradan değiştiremezsin.

 const name = "HasanCan";
 const age = 24;
 const number1 = "20"
 const number2 = 20.2156
 const result = false;

 console.log(typeof name)

 // String Tırnaklar içindeki metinsel ifadelerdir.
 // number tırnaksız sayısal ifadelerdir
 // boolean true yada false gelen sonuclardır
 // typeof ile veri tipini görebiliriz.
 
 //string bir ifadeyi number bir değişkene çevirme.
 console.log(Number(number1) + age)

//toString() ile number bir ifadeyi string bir ifadeye çevirme.
console.log(Number(number1) + age.toString())

//toFixed() ile virgülden sonra ne kadar sayı almak istiyorsanız bunu yapabilirsiniz.
console.log(number2.toFixed(2))

//concat() birleştirme fonksiyonudur.
console.log(name.concat(" Kazandı."))

//replace() yer değiştirme fonksiyonudur.
console.log(name.replaceAll('a' , 'A'))

//split() array'e çevirme fonksiyonudur.
console.log(name.split())

//substr(0,2) 0. elemandan başla 2 elemana kadar yaz gerisi kes
console.log(name.substr(0,2))

//tüm harflerin küçük olmasını istersem
console.log(name.toLowerCase())

//tüm harflerin büyük olmasını istersem
console.log(name.toUpperCase())

//Yazımın kenarlarında boşluklar varsa yokeder
console.log(name.trim())

//Yazdığım ifade bunun içinde var mı ?
console.log(name.includes(’a’))

//arattığımız şeyin arattığımız yerde kaç tane oldugunu söyler
console.log(name.search(’a’))

//index’ini verdiğimiz yeri seçer gösterir
console.log(name.charAt(3))

