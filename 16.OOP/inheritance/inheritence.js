// Hayvan sınıfı
class Hayvan {
    constructor(isim, yas, tur) {
      this.isim = isim;
      this.yas = yas;
      this.tur = tur;
    }
  
    yuru() {
      console.log(this.isim + " yürüyor...");
    }
  
    kos() {
      console.log(this.isim + " koşuyor...");
    }
  
    yuz() {
      console.log(this.isim + " yüzüyor...");
    }
  }
  
  // Kedi sınıfı, Hayvan sınıfından miras alıyor
  class Kedi extends Hayvan {
    constructor(isim, yas, tur, renk) {
      super(isim, yas, tur);
      this.renk = renk;
    }
  
    miyavla() {
      console.log(this.isim + " miyavlıyor...");
    }
  }
  
  // Köpek sınıfı, Hayvan sınıfından miras alıyor
  class Kopek extends Hayvan {
    constructor(isim, yas, tur, cins) {
      super(isim, yas, tur);
      this.cins = cins;
    }
  
    havla() {
      console.log(this.isim + " havlıyor...");
    }
  }
  
  // Kedi ve Köpek nesneleri oluşturalım
  let kedi1 = new Kedi("Pamuk", 2, "Siyam", "Beyaz");
  let kopek1 = new Kopek("Karabaş", 4, "Golden Retriever", "Erkek");
  
  // Kedi ve Köpek nesnelerinin özelliklerini ve metodlarını kullanalım
  kedi1.yuru(); // "Pamuk yürüyor..."
  kopek1.kos(); //
  