// Union & Intersection

// Union
// Literal Types
type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType){
    console.log(t)
}

// Intersection
type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra

const cup: MasalaChai = {
    teaLeaves: 2,
    masala: 1
}

// or
type User = {
    userName: string,
    bio?: string//optional
}

const u1: User = {
    userName: "Amit"
}

const u2: User = {
    userName: "Amit",
    bio: "My way is the highway!!!"
}

// or => ReadOnly
type Config = {
    readonly appName: string,
    version: number 
}

const conf: Config = {
    appName: "MindMirror",
    version: 1
}

// conf.appName="MindMirror 2.0" //ReadOnly