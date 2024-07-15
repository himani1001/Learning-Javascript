//Reveal Event

const revealBtn = document.querySelector('.btn-reveal');

const hiddenContent = document.querySelector('.hidden-content')

//will create a callback function which will check if our hidden content over here has the class of reveal btn
function revealContent(){
    if(hiddenContent.classList.contains('btn-reveal')){
        hiddenContent.classList.remove('btn-reveal')
    }
    else{
        hiddenContent.classList.add('btn-reveal')
    }
}

//include event listener
revealBtn.addEventListener('click', revealContent);