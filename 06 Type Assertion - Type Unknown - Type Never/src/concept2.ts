// The never type in TypeScript represents values that will never occur.

// type Role = "admin" | "user" // type never
type Role = "admin" | "user" | "superadmin" // type superadmin

function redirectBasedOnRole(role: Role):void{
    if(role === "admin"){
        console.log("Redirecting to admin dashboard")
        return
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard")
        return
    }

    role
}

// or

function neverReturn():never{
    while(true){}
}