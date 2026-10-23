interface Chai {
    readonly id: number 
    flavour: string
    price: number
    milk?: boolean
}

const masalaChai: Chai = {
    id: 1,
    flavour: "Masala",
    price: 20
}

interface discountCalculator {
    (price: number): number
}

const apply50: discountCalculator = (price: number) => ( price*0.5 )

interface TeaMachine {
    start(): void
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log("start")
    },

    stop(){
        console.log("stop")
    }
}