const chaiFlavour: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [25, 30]

const rating: Array<number> = [3.5, 4.5, 5.0]

type Chai = {
    name: string,
    price: number
}

const menu: Chai[] = [
    {name: "Masala Chai", price: 20},
    {name: "Lemon Chai", price: 25},
]

const cities: readonly string[] = ["Delhi", "Kolkata"]
// cities.push("")

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]