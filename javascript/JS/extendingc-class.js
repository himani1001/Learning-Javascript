class Producta{
    constructor(itemName){
        console.log('Passed by Book' + itemName);
        this.itemName = itemName;
    }
    getItemName(){
        return this.itemName + " is a Product";       //item is part of product class
    }
}

class Book extends Producta{
    constructor(itemName){
        super(itemName);
    }

    getItemName(){
        return this.itemName + " is a book"       //part of book class
    }
}

let houses = new Producta('houses');
let cars = new Book('cars');