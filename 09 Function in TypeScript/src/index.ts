function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type}`)
}

makeChai("Ginger", 2)

function getChaiPrice(): number{
    return 25
}

function makeOrder(order: string): string | null{
    if(!order) return null
    return order
}

function logChai():void{
    console.log("Chai is ready!!!")
}

function orderChai(type?: string, quantity: number=1){
    // type => optional
    // quantity => default value 1
}

function createChai(order: {
    type: string,
    sugar: number,
    size: "small" | "large"
}): number{
    return order.sugar
}