// 1. Partial
// 2. Required
// 3. Pick
// 4.Omit


// Partial
type Chai = {
    name: string,
    price: number,
    isHot: boolean
}

// Make all properties in Chai optional
const updateChai = (updates: Partial<Chai>)=>{
    console.log(`Updating chai with ${updates}`)
}

updateChai({price: 20})
updateChai({isHot: true})
updateChai({isHot: false})
updateChai({})

const c: Partial<Chai> = {
    // also we can define like this
}

// Required
type ChaiOrder = {
    name?: string,
    quantity?: number
}

// Make all properties in ChaiOrder required
const placeOrder = (order: Required<ChaiOrder>)=>{
    console.log(order)
}

placeOrder({name: "Ginger Chai", "quantity": 1})

// Pick
type Coffee = {
    name: string,
    quantity: number,
    isHot: boolean,
    ingredients: string[]
}

type basicCoffeeInfo = Pick<Coffee, "name" | "quantity">

const coffeeInfo: basicCoffeeInfo = {
    name: "Black Coffee",
    quantity: 1
}

// Omit
type ChaiNew = {
    name: string,
    quantity: number,
    isHot: boolean,
    secretIngredients: string[]
}

type PublicChai = Omit<ChaiNew, "secretIngredients" | "isHot">

const publicChai: PublicChai = {
    name: "Adrak Chai",
    quantity: 1
}