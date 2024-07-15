// //creating elements

// const ul = document.querySelector('ul');     //create a variable for the unordered list and we want to oreder this unordered list so we use document
// const li = document.createElement('li');     //use create element method to create the list item and its need to be inserted in document and the way we add element inthis document is using append method

// //Adding element
// ul.append(li);

// //Modify Element
// const firstListItem = document.querySelector('.list-item');

// // console.log(firstListItem.innerText);        //visible text conytained inside the node
// // console.log(firstListItem.innerHTML);        //indents and jumping onto a new line but its also showing the tag used
// // console.log(firstListItem.textContent);     //displayed in same way as in HTML file and showing indents and jumping onto a new line   

// li.innerText = 'Empire';

// //make our list item look like the rest of the list items 
// //Making Attribute & classes

// // li.setAttribute('id', 'main-heading');
// // li.removeAttribute('id');

// // const title = document.querySelector('#main-heading');

// // console.log(title.getAttribute('id'));

// // li.classList.add('list-item')         //adding class to list item 
// li.classList.remove('list-item');

// console.log(li.classList.contains('list-item'));        //true if add method is not commented

// //remove elements
// li.remove()