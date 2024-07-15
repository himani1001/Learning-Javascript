const characters= [
{   name: 'h',
    height: '166',
    eye_color: 'brown',
    gender: 'female',
},
{
    name: 's',
    height: '171',
    eye_color: 'brown',
    gender: 'female',
},
{
    name: 'a',
    height: '167',
    eye_color: 'brown',
    gender: 'male',
},
{
    name: 'r',
    height: '201',
    eye_color: 'brown',
    gender: 'male',
},
]


//grt an array of all names
console.log(characters.map(nam => nam.name)) 
//or
const names = characters.map(ch => ch.name)
console.log(names)


//get an array of objects with just name and height properties
const namhei = characters.map(ch => {
    return { 
        name : ch.name,
        height: ch.height }
})
console.log(namhei);


//get the total height of all characters
const totalHeight = characters.reduce((prevHeight, character) => {
    return prevHeight + Number(character.height);                   //converting string into number otherwise the output will be in string
}, 0);      //prevHeight = 0 , we have to give initial value
console.log(totalHeight)


//get all female characters
console.log(characters.filter(gen => gen.gender=='female'))


//sort by gender
//there will be a comparision and it will return -1 or 1
const sortBYGender = characters.sort((charac1, charac2) => {
    if(charac1.gender < charac2.gender){
        return -1;
    }
    if(charac1 < charac2){
        return 1;
    }
    return 0;
})
console.log(sortBYGender);


//sort by name
const sortByName = characters.sort((character1, character2) => {
    if(character1.name < character2.name){
        return -1;
    }
    if(character1 > character2){
        return 1;
    }
    return 0;
})
console.log(sortByName);


//does every character have blue eyes?
console.log(characters.every((character) => character.eye_color == 'blue'));


//is there at least one male character?
console.log(characters.some((character) => character.gender == 'male')); 


//is there at least one character taller than 200?
console.log(characters.some((character) => character.height >200));