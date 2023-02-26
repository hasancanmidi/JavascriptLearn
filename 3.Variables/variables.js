/* prompt kodu kullanıcıdan input almamızı sağlar. */

var userName = prompt("What is your name ?");

alert(userName);

////////////////////////////////////////////////////

// Variables - Değişkenler

/* Javascript'de "variables" (değişkenler), programcıların bir değere atama yaparak belirli bir ad altında depolamalarını sağlar. 

var
let
const

Keyword Name = "Value" ;  
Var İsim = "Değer";            */

var myName = "Hasan Can" ;  

var yourName = prompt("What is the your name ? ");

alert("Hello my name is " + myName + " Welcome to my youtube channel " + yourName);

var gameLevel = 1;
gameLevel = 2;
gameLevel = 3;

alert("Your game level currently : " + gameLevel);

////////////////////////////////////////////////////

// Naming and Naming Conventions - Adlandırma kuralları

/*
1.Değişken isimleri, harfle veya alt çizgi ile başlamalıdır.
2.Değişken isimleri, sadece harf, rakam ve alt çizgi (_) karakterlerini içerebilir. Boşluk ve diğer özel karakterler kullanılamaz.
3.Değişken isimleri, büyük/küçük harf duyarlıdır. Yani, myVar ve myvar iki farklı değişken olarak kabul edilir.
4.Değişken isimleri, anahtar kelimelerle çakışmamalıdır. Örneğin, let, const, var, function gibi anahtar kelimeler değişken ismi olarak kullanılamaz.
5.Değişken isimleri açıklayıcı olmalıdır ve anlaşılır şekilde olmalıdır. Bu, kodun okunması ve anlaşılması için önemlidir. */

////////////////////////////////////////////////////

// String Concatenation - String birleştirme

var message = "Hello";
var myName = "Can"
alert(message + " " + myName);

////////////////////////////////////////////////////

// String Lengths and Retrieving the Number of Characters - Dize Uzunlukları ve Karakter Sayısını Alma

var comment = "Hello I am angry";
comment.length;   // 16 sonucunu verir.

var tweet = prompt("comment is here");
var tweetCount = tweetCount.length;
alert("You have written " + tweetCount + " characters, you have : " +(tweetCount - 180) + " characters");

////////////////////////////////////////////////////

// Slice() fonksiyonu

var bread = [1,2,3,4,5,6];
bread.slice(2,4);        // result 2,3,4

/* Daha önce kaç karakter harf yazdıgımızı söyleyen ve kaç karakterimiz kaldıgını söyleyen kod yazmıştık şimdide 
twitter'da ki gibi sadece 140 karakteri alan bir kod yazalım. */

var tweet = prompt("Compose your tweet : ")
var tweetUnder140 = tweet.slice(0,140); // Burada 0 ile 140 karakter arasında ki karakteri seç dedik.
alert(tweetUnder140);

// Burada kodumuzu tek bir satıra indirebiliriz. Değişkenlere olan zorunluluğumuzu kaldıralım.

alert(prompt("Compose your tweet : ").slice(0,140));


////////////////////////////////////////////////////

// toUpperCase() fonksiyonu - tüm harfleri büyük yapar.

// toLowerCase() fonksiyonu - tüm harfleri küçük yapar.

// Şimdiye kadar öğrendiklerimizle aldığımız küçük harfli ismi ilk harfini büyük yazdıralım.

var named = prompt("What is your name ; ");
var firstChar = named.slice(0,1);     // ilk harfi bulduk.
var upperCaseFirstChar = firstChar.toUpperCase(); // İlk harfi büyüttük
var restOfName = named.slice(1,named.length);  // Geri kalan harfleri aldık
restOfName = restOfName.toLowerCase();
var capitalisedName = upperCaseFirstChar + restOfName;
alert("Hello ; " + capitalisedName);  // ve onları birleştirdik.

