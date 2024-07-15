// //the scope is by default global
// var name = 'Amal';

// function sayName(){
//     var marks = 10;        //this variable will be destroyed after the block end
//     console.log(name);
// }

// sayName();               //when we call this function behind the scenes an execution context will be made nd var is gone in it nd console.log wxecution will be made of it and output will be made
// //in global scope Amal is a global variable thats why we are excessing it in new function
// // console.log(marks);       //we will get error bcoz this var is already is destroyed




// var x = 0;

// //Global Scope
// function first(){
//     //Local Scope 1
//     var x = 1;
//     console.log(x);
//     function childOfFirst(){
//         var x = 2;                    //if we comment this line of code then output will be 1 
//         console.log(x);
//         //local scope 2
//     }
//     childOfFirst();
// }

// first()

// //GLobal Scope 
// function second(){
//     console.log(x);
//     //local scope
// }
// second()











//block scope only use let and const not var
// var x = 10;                   //it get attached to window object
// {
//     var x = 1;                // window.x will be changed now it will bw like sabka sath sabka vikas so it will stay with us forever
//     console.log(x);
// }

// console.log(x)             //we will get 1 as output rather 10

// let x = 10
// {
//     let x = 1;
//     console.log(x);
// }
// console.log(x);






// if(true){
//     //this 'if' conditional block doesn't create a new scope
//     var foo = 'bar';      //we have declared foo as a global variable bcoz in block scope we have used var keyword which has no use over there, block will treat it as a global variable and with window object our foo is attached now so if you access it you will get the output BUT WE REPLACE VAR WITH LET KEYWORD we will not get an output rather a error
// }

// console.log(foo)







// Lexical scope  //it could be understand as inheritance; parent function properties get into child function 
function Dada(){
    var name = 'Jagdeesh Prasad Sharma'
    //likes is not accessible here
    function Papa(){
        console.log(name);
        //name is accessible here
        //likes is not accessible here
        function Beta(){
            //Innermost level of the scope chain
            //name is not accessible here
            var likes = 'Coding';
        }
        // console.log(likes)          //execution context will be ended as its call/block end
        Beta()
    }
    Papa()
}
Dada()