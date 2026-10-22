// Any vs Unknown

// In TypeScript, "any" completely turns off type checking, 
// while "unknown" is a safe alternative that says "this could be anything, so we must check its type before we can use it.

const data1 : any = "Hello"
data1.hello() // TypeScript allows this, but it will crash at runtime

const data2 : unknown = "Hello"

if(typeof data2 === "string"){
    console.log(data2.trim())
}