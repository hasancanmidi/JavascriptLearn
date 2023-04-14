class Kullanici {
    #sifre; // private özellik
    ad; // public özellik
    soyad; // public özellik
  
    constructor(ad, soyad, sifre) {
      this.ad = ad;
      this.soyad = soyad;
      this.#sifre = sifre; // private özelliğe değer atama
    }
  
    // public metot
    tamAd() {
      return this.ad + " " + this.soyad;
    }
  
    // private metot
    #sifreKontrol(girilenSifre) {
      return this.#sifre === girilenSifre;
    }
  
    // public metot
    girisYap(girilenSifre) {
      if (this.#sifreKontrol(girilenSifre)) {
        console.log("Giriş başarılı.");
      } else {
        console.log("Hatalı şifre.");
      }
    }
  }
  
  let kullanici1 = new Kullanici("Ali", "Veli", "123456");
  console.log(kullanici1.ad); // "Ali"
  // console.log(kullanici1.#sifre); // Hata! private özellik erişimi yok
  console.log(kullanici1.tamAd()); // "Ali Veli"
  kullanici1.girisYap("123456"); // "Giriş başarılı."
  