const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array);
console.log(array[4]);
console.log(array[array.length-1]);

//using object
const num = new Array(1, 2, 3, 4, 5, 6);
//operations
console.log(num.push(7));
console.log(num.unshift(0));            //put value in starting
console.log(num[num.length-1]);
console.log(num.pop());
console.log(num.shift());              //remove value from starting

num[0] = {num:80};                            //can change index value
console.log(num);

const nam = ['a', 's', 'd', 'f', 'g','d'];
console.log(nam);
console.log(nam.indexOf('d'));
console.log(nam.lastIndexOf('d'));    //start search from last index 
console.log(nam.indexOf('q'))         //it doesnt exist so -1
console.log(nam.indexOf('d', 3))      //start search from index 3
console.log(nam.includes('q', 4))     //includes only work in primitive datatype and not in reference datatype so we use find()

let books = [{
    name : 'himani',
    books_read : 1000
}, {
    name : 'lovely',
    books_read : 20
}, {
    name : 'shikha',
    books_read : 10
}];

//call back function
// console.log(books.find(function(element){
//     return element.books_read === 20
// }))
console.log(books.filter(book => book.books_read>10))
console.log(books.map(book => book.books_read * 2))          //will be saved in new array

//arrow function
console.log(books.find((element) => {
    return element.name === 'lovely'
}))

//if only 1 parameter is there so you can use
console.log(books.find(element => element.name === 'shikha'))

let names1 = ['a', 's', 'd'];
let names2 = ['f', 'g','h'];
// let names3 = names1.concat(names2)
// console.log(names1.concat(names2));                   //combining
let names3 = [...names1,...names2]                       //spread operator same as concatinate

console.log(names3);
console.log(names3.slice(3))
console.log(names3.slice(3, 5))                       //remove values

//For loop
for(let i=0; i<nam.length; i++){
    console.log(nam[i])
}

//For of
for(let name of nam){                          //name is variable that represent every value
    console.log(name)
}

//in javascript for each loop doent exist but in array there is a concept of for each loop 
//For each
nam.forEach(function(name, index){
    console.log(name, index)
})

//string and array common operations
//join
let student = ['H', 'i', 'm', 'a', 'n', 'i'];
console.log(student.join())
console.log(student.join(''))
console.log(student.join('-'))

//split
// console.log(student.split('_'))

