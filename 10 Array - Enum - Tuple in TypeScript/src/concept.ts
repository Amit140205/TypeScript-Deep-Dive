// Tuple

let chaiTuple: [string, number]
chaiTuple = ["Masala", 20]

let userInfo: [string, number, boolean?]
userInfo = ["Amit", 21, true]
userInfo = ["Amit", 21]

const location: readonly [number, number] = [28.66, 32.22]

// Named tuple
let chaiItems: [name: string, price: number] = ["Masala", 20]

// Unexpected Case
let t: [string, number] = ["chai", 10]
t.push("extra") // allowed


