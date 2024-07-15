let bread1 = prompt("What bread do you want - ");
let veggie1 = prompt("What veggie do you want - ");
let sauce1 = prompt("What sauce do you want - ");

function makeSandwich(bread, veggie, sauce){
    let sandwich = bread + ' bread ' + veggie + ' ' + sauce + ' sauce sandwich is readyp';
    return sandwich;
}

let vegSandwich = makeSandwich(bread1, veggie1, sauce1);
console.log(vegSandwich);