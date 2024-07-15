//itemName
//price
//discount
//itemCode

const product = {
    itemName : 'Flower',
    price : 50,
    discount: 20,
    itemCode: 'F40'
}

//factory function

function createProduct(name, price, discount, code){
    return {
        itemName: name,
        price: price,
        discount: discount,
        itemCode: code
    }
}

const book = createProduct('method', 400, 10, 'F89');

//constructor function

function Product(name, price, discount, code){
    this.itemName = name;
    this.price = price;
    this.discount = discount;
    this.itemCode = code;
    this.discountValue = function(){
        return price * discount / 100;
    }
}

const football = new Product('Barcelona', 50000000, 10, 'O90')

