// Duck typing
// In TypeScript duck typing means an object is compatible with a target type 
// if it satisfies the minimum structural requirements of that type, 
// regardless of any extra properties it contains.

type Cup = {
    size: string
}

let smallCup: Cup = {
    size: "200ml"
}

let bigCup = {
    size: "500ml",
    material: "steel"
}

smallCup = bigCup

console.log(smallCup) // { size: '500ml', material: 'steel' }