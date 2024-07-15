// let lecture = 5;
// let section = 1;
// let title = 'JavaScript';

// const course = {       //key value pair store
//     lecture: 5,        //lecture is a property 
//     section: 1,
//     title: 'JavaScript',
//     notes: {
//         introduction: 'Welcome to JS course'        //we have made another object in the object
//     },
//     enroll(){
//         console.log('you are successfully enrolled');
//     }
// }

// function enroll(){         //function will enroll the user
//     console.log('you are successfully enrolled');

// }

// course.enroll()
// console.log(course.title)          //to access a property
// console.log(course)                //you can console whole object

//factory function

function createCourse(title){
    return {       //key value pair store
        title: title,
        enroll(){
            console.log('you are successfully enrolled');
        }
    }
    // return course;             //in the function which ever variable we'll use wo is k andar us object ko pass kr dega
}

// const course = createCourse('JavaScript');
// course.enroll()
// console.log(course)

//constructor function

function Course(title){
    this.title = title,
    this.enroll = function(){
        console.log('you are successfully enrolled');
    }
}

// const course = new Course('JavaScript');        //new - make an empty object then object point to 'this' reference, at last new keyword will return 'this' in variable course and your object will be made.
// delete course.title;
// course.checkEnrollment = function(){              //new function checkEnrollment
//     console.log('20 users are enrolled');
// }
// course .enroll()

//function is also an object

const Course_1 = new Function('title', ` 
this.title = title,
this.enroll = function(){
    console.log('you are successfully enrolled');
}`)

//when code goes in js internally like above one : constructor function

const course_2 = new Course_1('JavaScript');
course_2.enroll();