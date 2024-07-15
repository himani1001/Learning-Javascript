//Traverse the DOM



//Parent Node Traversal 

// let ul = document.querySelector('ul');
// console.log(ul.parentNode);
// console.log(ul.parentElement);

// const html = document.documentElement;  

// console.log(html.parentNode);
// console.log(html.parentElement);
//returning null because the job of parent element property here is try and retrieve the parent element of the html element i.e. the document node however the document node and an element node aren't the same type of node



//Child Node Traversal

// let ul = document.querySelector('ul');

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[2].style.backgroundColor = 'blue';

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);



//Sibling Node Traversal

let ul = document.querySelector('ul');

const div = document.querySelector('div');

console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextSibling);
console.log(ul.nextElementSibling);           //no element after ul