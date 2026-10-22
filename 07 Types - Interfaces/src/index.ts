// Interfaces are strictly for defining the structure of objects, 
// while types can define anything (objects, primitives, unions, tuples, and aliases).

type ChaiOrder = {
    type : string,
    sugar : number,
    strong : boolean
}

function makeChai(order: ChaiOrder){
    console.log(order)
}

function serveChai(order: ChaiOrder){
    console.log(order)
}

// where type fails

type TeaRecipe = {
    water: number
    milk: number
}

class MasalaChai implements TeaRecipe{
    water = 100
    milk = 50
}

type CupSize = "small" | "large"

// A class can only implement an object type or intersection of object types 
// with statically known members.

// class Chai implements CupSize{

// }

