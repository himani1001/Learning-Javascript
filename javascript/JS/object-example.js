//Ex-1 square side
// function area(side, are){
//     this.side = side,
//     this.are = are,
//     this.square = function(){
//         return side*side;
//     }
// }
// const answer = new area(10, 5);              //WRONG

let square = {              //make object first
    side: 5,
    get area() {
        return this.side * this.side;
        // return this.side**2         //this is same as above
    }
}

square.side = 10;
console.log(square.area)





//EX -2 concat and use separator
function stringConcat(separator, ...strings){
    let ans = ''                                //putting empty string so var will be initialized, if we dont initialize it, it will be undefined and if you have to connect to undefine then it will not work
    strings.forEach((string, i) => {
        if(i == strings.length-1){
            ans += string;
        }
        else{
            ans += string + separator;
        }
    })
    return ans;
}
console.log(stringConcat('+', 'this', 'is', 'invalid'))




//Ex - 3
// arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let first = arr[0];
// let second = arr[1]
// let third = arr[2]
// let other = arr.slice(3)


//using destructuring
let[first, second, third, ...other] = [1, 2, 3, 4, 5, 6, 7, 8];


console.log(first);
console.log(second);
console.log(third);
console.log(other);



//Ex-4 common matchstick in making houses you have to input and in output you get how many were used to make the house
function matchHouses(house){
    if(house <= 0){
        return 0;
    }
    else{
        return (house*6) - house +1;
    }
}

console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(6));
