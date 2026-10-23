// index signature

interface ChaiRatings {
    [flavor: string]: number
}

const ratings: ChaiRatings = {
    masala: 5.0,
    ginger: 4.5
}

// Another case
interface User {
    name: string
}

interface User {
    age: number
}

const user: User = {
    name: "Amit",
    age: 21
}

// Or
interface A {a: string}
interface B {b: string}

interface C extends A, B {}