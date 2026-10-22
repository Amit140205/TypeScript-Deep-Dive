// Type narrowing is the process where TypeScript moves a variable from a broader type (like a union type) 
// to a more specific type. 
// Type guards are the actual expressions or tools we use to trigger that narrowing.

function getChai(kind: string | number){
    if(typeof kind==="string"){
        return `Making ${kind} chai...`
    }
    return `Chai order: ${kind}`
}

function serveChai(msg?: string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving default masala chai`
}

function orderChai(size: "small" | "medium" | "large" | number){
    if(size==="small"){
        return `Small cutting chai`
    }else if(size==="medium" || size==="large"){
        return `Make extra chai`
    }

    return `Chai order #${size}`
}

class KulhadChai{
    serve(){
        return `Serving kulhad chai`
    }
}

class CuttingChai{
    serve(){
        return `Serving cutting chai`
    }
}

function serve(chai : KulhadChai | CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve()
    }
}