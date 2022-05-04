class Customer{
    constructor(n)//  used to create a variable for the class
    {
      this.name=n;
    }
    age=123;
    college="VVIT";
    buy()//define the method inside Class
    {
        console.log(this.name);
    }
    getage()
    {
        console.log(this.age);
    }
    getcollege=()=>
    {
        console.log(this.college);
    }

}
class GuestCustomer extends Customer{
    hello()
    {
        console.log("Hello...")
    }
}
let cust1=new Customer("Atul");
let cust2=new Customer("Rahul");
let cust3=new GuestCustomer("Ayush");
cust1.buy();
cust2.buy();
cust3.buy();
cust3.hello();
console.log(cust1);
cust1.getage();
cust1.getcollege();