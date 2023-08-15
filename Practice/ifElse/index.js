const age = 26

/*
const name = age == 26 ? "Berkant Kaya" : "Deneme"
console.log(name)
*/

// == Eşitlik Kontrolü Yapar.
// === Hem eşitlik Hem Tip kontrolü yapar
// != Eşit Değildir

if(age == 26){
    console.log("Yaş 26 ya eşitmiş")
}else{
    console.log("Yaş 26'ya eşit değilmiş")
}

//switch

var gun = "Pazartesi";

switch (gun) {
  case "Pazartesi":
    console.log("Haftanın başı, enerji toplama günü.")
    break;
  case "Salı":
    console.log("Yeni projelere başlama günü.")
    break;
  case "Çarşamba":
    console.log("Orta hafta, tempolu çalışma günü.")
    break;
  case "Perşembe":
    console.log("Toplantı ve işbirliği günü.")
    break;
  case "Cuma":
    console.log("Hafta sonuna yaklaşırken son işleri bitirme günü.")
    break;
  case "Cumartesi":
    console.log("Rahatlayıp hobilerle ilgilenme günü.")
    break;
  case "Pazar":
    console.log("Dinlenme ve aileyle vakit geçirme günü.")
    break;
  default:
    console.log("Geçerli bir gün girilmedi.")
}

//If else

var gun2 = "Pazartesi";

if (gun === "Pazartesi") {
  console.log("Haftanın başı, enerji toplama günü.")
} 
else if (gun === "Salı") {
  console.log("Yeni projelere başlama günü.")
} 
else if (gun === "Çarşamba") {
  console.log("Orta hafta, tempolu çalışma günü.")
} 
else if (gun === "Perşembe") {
  console.log("Toplantı ve işbirliği günü.")
} 
else if (gun === "Cuma") {
  console.log("Hafta sonuna yaklaşırken son işleri bitirme günü.")
} 
else if (gun === "Cumartesi") {
  console.log("Rahatlayıp hobilerle ilgilenme günü.")
} 
else if (gun === "Pazar") {
  console.log("Dinlenme ve aileyle vakit geçirme günü.")
} 
else {
  console.log("Geçerli bir gün girilmedi.")
}