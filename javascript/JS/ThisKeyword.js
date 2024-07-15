// let counter = createCounter();
// let counter1 = createCounter();

//     function createCounter(){
//         return{
//             count: 0,
//             increment: function(){
//                 this.count++;                  //if we use counter.count++ then only counter will increment not counter1 so we use this so it increment the function 
//                 console.log(this); //here 'this' is refering to the particular object who's function we are calling   
//             }
//         }
//     }
// counter1.increment();
// counter.increment();
// // console.log(counter1);

// var count = 0;
// function incrementCount(){
//     // count++;
//     this.count++;
//     // console.log(this);           //return window object
// }
// incrementCount();           //refering to the particular object who's function we are calling and we have called a window object's function(incrementCounter)
// incrementCount(); 
// incrementCount();
// incrementCount();
// incrementCount();
// console.log(count);

function Car(name){
    this.name = name;
    this.start = function(){
        console.log(this.name + ' started');
        console.log(this);
    }
}

// let mercedes = new Car('Mercedes');
// mercedes.start();
let mercedes = Car('Mercedes');
console.log(this.name);
console.log(this); //window is attached
console.log(name);    //we haven't made any name variable but in window mercedes is saved with name so its return mercedes