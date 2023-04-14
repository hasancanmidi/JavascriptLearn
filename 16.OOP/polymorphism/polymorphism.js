// GeometrikSekil sınıfı
class GeometrikSekil {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    alan() {
      console.log("Alan hesaplanamadı.");
    }
  }
  
  // Dikdortgen sınıfı, GeometrikSekil sınıfından türetiliyor
  class Dikdortgen extends GeometrikSekil {
    constructor(x, y) {
      super(x, y);
    }
  
    alan() {
      console.log("Dikdörtgen alanı: " + this.x * this.y);
    }
  }
  
  // Kare sınıfı, GeometrikSekil sınıfından türetiliyor
  class Kare extends GeometrikSekil {
    constructor(x) {
      super(x, x);
    }
  
    alan() {
      console.log("Kare alanı: " + this.x * this.x);
    }
  }
  
  // Dikdortgen ve Kare nesneleri oluşturalım
  let dikdortgen1 = new Dikdortgen(3, 4);
  let kare1 = new Kare(5);
  
  // Alan hesaplamalarını yapalım
  dikdortgen1.alan(); // "Dikdörtgen alanı: 12"
  kare1.alan(); // "Kare alanı: 25"
  