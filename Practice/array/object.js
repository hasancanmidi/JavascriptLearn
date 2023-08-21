/*Nesne Oluşturma*/
const obj = {
    name: "Hasan Can",
    surName: "Midi",
    age: 24,
    ID: 26258511594,
    getInfo: function(){
        return "Adınız : " + this.name + " "
    }
}
/*Nesneye Ulaşma*/
console.log(obj.name)
console.log(obj["surName"])
console.log(obj.getInfo())
