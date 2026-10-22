// "Union" Types allow a variable to hold a specific set of allowed types, 
// while "Any" turns off TypeScript's type checking entirely

// Union
let sub: number | string = "1M"
let apiRequestStatus: "pending" | "success" | "error" = "pending"
apiRequestStatus="success"

// Any
let orders=["1", "2", "3", "5", "4"]
let currentOrder; // type : any
// let currentOrder : string | undefined; // correct way

for(let order of orders){
    if(order==="3"){
        currentOrder=order
    }
}

console.log(currentOrder) // type : string | undefined