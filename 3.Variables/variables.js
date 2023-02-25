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






