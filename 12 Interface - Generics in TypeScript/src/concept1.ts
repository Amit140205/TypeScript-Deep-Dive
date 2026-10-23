// Generics

// Function
function wrapInArray<T>(item: T): T[]{
    return [item]
}

console.log(wrapInArray("masala"))
console.log(wrapInArray(21))

function pair<A, B>(a: A, b: B): [A, B]{
    return [a, b]
}

function pairObj<A, B>(a: A, b: B): {a: A, b: B}{
    return {a, b}
}

// Interface
//example 1
interface Box<T> {
    content: T
}

const numberBox: Box<number> = {
    content: 21
}

const stringBox: Box<string> = {
    content: "Amit"
}

// example 2
interface ApiPromise<T> {
    status: number,
    data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}