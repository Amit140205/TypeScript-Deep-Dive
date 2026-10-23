type Item = {
    name: string,
    quantity: number
}

type Address = {
    street: string,
    pin: number
}

type Order = {
    id: string,
    items: Item[],
    address: Address
}