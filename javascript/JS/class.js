//declaring class
class Produc{
    constructor(itemName, price, discount, itemCode){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.itemCode = itemCode;
    }
}

let house = new Produc('house', 2000000, 5, 'H05');

//using expression
const Product1 = class Produc{
    constructor(itemName, price, discount, itemCode){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.itemCode = itemCode;
    }
    get getDiscountValue(){
        return this.discount
    }
    set setDiscountValue(value){
        this.discount = value;
    }
    discountValue(){
        return this.discount*this.price/100;
    }
};

let car = new Product1('car', 2470000, 3, 'C03R');    //object made

