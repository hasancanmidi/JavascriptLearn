//Rest ,Spread ,Destructure

//REST
//Geriye kalanlar Rest 
let showProducts = function (id,...products){
    console.log(id)
    console.log(products)
}
//console.log(typeof showProducts) // türü nedir (function)

showProducts(10,["Elma","Armut","Karpuz"])

