class Customer{
    constructor(id,customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}
let customer1 = new Customer(1,"12345");

//protptyping---------------
customer1.name = "Murat Kurtboğan" //instence
console.log(customer1.name)

Customer.bisey = "B"  //Class
console.log(Customer.bisey)
//-------------------------

class IndividualCustomer extends Customer{ //Miras alıyoruz
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
    }
}
class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}