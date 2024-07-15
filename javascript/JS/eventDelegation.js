//Event Delegation

// document.querySelector('#football').addEventListener('click', function(e){   //event object
//     console.log('Football is clicked');

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// })
// document.querySelector('#basketball').addEventListener('click', function(e){   //event object
//     console.log('Basketball is clicked');

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// })
// document.querySelector('#boxing').addEventListener('click', function(e){   //event object
//     console.log('Boxing is clicked');

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// })
// document.querySelector('#tennis').addEventListener('click', function(e){   //event object
//     console.log('Tennis is clicked');

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// })
// document.querySelector('#golf').addEventListener('click', function(e){   //event object
//     console.log('Golf is clicked');

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

//instead of doing all this we can directly use 

//when the target which is our list item has an id attribute which all of them do whichever we click on will display that specific sport plus the extra bit of text here of is clicked 

document.querySelector('#sports').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'lightgray';
    }
})

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'F1';
newSport.setAttribute('id', 'F1');

sports.appendChild(newSport);