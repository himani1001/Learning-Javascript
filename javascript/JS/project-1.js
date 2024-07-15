//variable

let btn = document.querySelector('#new-des');
let des = document.querySelector('.des');
let titleAuthor = document.querySelector('.titleAuthor');

const description = [
    {
    des: 'Mr. Malfoy. Your next witness is here. Are you ready to proceed? I almost smile. Do I have a choice?',
    titleAuthor: 'All the Wrong Things - LovesBitca8'
},
    {
    des: 'The Rest of the Story is a friends-to-lovers, hockey players/teammates MM romance, and includes themes of survivorship.',
    titleAuthor: 'The Rest of the Story - Tal Bauer'
},
    {
    des: 'You & Me is a single dads, friends-to-lovers, bi awakening MM romance, full of dads and their exasperating teenage sons, high school sports shenanigans, and #FoundFamily. Come for the epic love, stay for the forever feels.',
    titleAuthor: 'You & Me - Tal Bauer'
},
    {
    des: 'Moonstruck is a high heat, intense psychopath romance with an HEA and no cliffhangers. It features a fumbling, sexually confused maniac and the dominating, unapologetic gang leader who can’t stop tormenting him.',
    titleAuthor: 'Moonstruck - Onley James'
},
    {
    des: 'Tessa Bailey is back with a Schitt’s Creek-inspired rom-com about a Hollywood “It Girl” who is cut off from her wealthy family and exiled to a small Pacific Northwest beach town... where she butts heads with a surly, sexy local who thinks she doesn’t belong. ',
    titleAuthor: 'It Happened One Summer - Tessa Bailey'
},
];
btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*description.length);
    des.innerText = description[random].des;
    titleAuthor.innerText = description[random].titleAuthor;
})