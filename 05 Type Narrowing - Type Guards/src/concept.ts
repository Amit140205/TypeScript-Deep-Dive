type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj : any):obj is ChaiOrder{
    return (
        typeof obj === "object" &&
        typeof obj !== null &&
        typeof obj.type === "string" && 
        typeof obj.sugar === "number"
    )
}

function serveOrder(item : ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai ${item}`
}