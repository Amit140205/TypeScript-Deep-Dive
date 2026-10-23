let tea: {
    name: string
    price: number
    isHot: boolean
}

tea = {
    name: "ginger chai",
    price: 20,
    isHot: true
}

type Tea = {
    name: string,
    price: number,
    ingredients: string[]
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
}