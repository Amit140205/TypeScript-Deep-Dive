// Type assertion is how you tell TypeScript, "Trust me, I know what I'm doing, 
// and I know the specific type of this variable better than you do."

let response : any = "42"
// let numericLength : number = response.length // does not work like that
let numericLength : number = (response as string).length

type Book = {
    name: string
}

let bookString = "{name: 'Computer Networking'}"
let book = JSON.parse(bookString) as Book
console.log(book.name)

let userName = (document.getElementById("userName") as HTMLInputElement).value