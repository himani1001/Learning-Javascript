// //Primitive datatype

// let number = 67;
// //pass by value
// let number_2 = number
// number = 45;

// console.log(number);
// console.log(number_2);

// //Refernce DAtatype
// //using object

// let obj = {number: 10};          //number is key, property is 10  ; at backened object constructor function is used
// //upar wali value ek memory location pe h nd vo location niche vale m ja chuki h nd when u change obj nd bcoz memory location is same for both variable now, then property of them will be changed
// //pass by refernce
// let obj2 = obj;

// obj.number = 15;

// console.log(obj);
// console.log(obj2);

//pass by value using object
const course = {
    title: 'JavaScript',
    enroll(){
        console.log('you are successfully enrolled');
    }
}

// const course_1 = {...course} //name the object you want to copy; the value and pairs of object yaha bahar aate h nd same order m copy ho jate h
// course_1.title = "C++";

//using spread method
// const course_1 = Object.assign({}, course)
// course_1.title = 'C++';

// //using for loop in object
// for(let key in course){
//     console.log(key, course[key]);        
//     //key title will be in the output and enroll is also a key, from course[key] its values is in the output
// }

//using for of loop
// for(let key of Object.keys(course)){
//     console.log(key, course[key]);
// }
//it will gave output as array

//loop
const course_1 = {};
for(let key of Object.keys(course)){
    course_1[key]= course[key];
}