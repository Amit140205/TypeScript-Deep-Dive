// type CupSize = "small" | "large" 

interface CupSize{
    size: "small" | "large"
}

class Chai implements CupSize{
    size: "small" | "large" = "small"
}

// Another scenario

// A class can only implement an object type or intersection of object types with statically known members.
type Response = {ok: true} | {ok: false}

// class myResponse implements Response{
//     ok: boolean = true
// }