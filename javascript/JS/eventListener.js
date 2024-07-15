//Event Listener

//element.addeventListener("click", function);

const buttonTwo = document.querySelector('.btn-2');

//create a callback function
function alertBtn() {
    alert('Another DOM Manipulation');
}

buttonTwo.addEventListener("click", alertBtn);
//using this you can do the same thing JS that you were doing in html



//Mouseover

const newBackgroundColor = document.querySelector('.box-3');
function changeBgColor(){
    newBackgroundColor.style.backgroundColor = 'black';
}

newBackgroundColor.addEventListener('mouseover', changeBgColor);