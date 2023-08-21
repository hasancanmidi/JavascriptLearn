// İki şekilde fonksiyon tanımlayabiliriz.

/*
const nameFunc = () => {

}
*/

/*
const nameFunc(){

}
*/

/* *********************** */

const nameFunc = () => {
    let age = 26;
    if(age === 26){
        console.log("yas 26")
    }
}
nameFunc() 

let num1 = 10;


/* *********************** */

let num2 = 10
let num3 = 20
let num4 = 30
const nameFunc2 = (a,b,c) => {
    console.log(a+b+c)
}

nameFunc2(num2,num3,num4)

/* *********************** */

let num5 = 10
let num6 = 20
let num7 = 30
const nameFunc3 = (a,b,c) => {
    return a+b+c
}

console.log(nameFunc3(num5,num6,num7))