type MasalaChai = {
    type: "masala",
    spicelevel: number
}
type GingerChai = {
    type: "ginger",
    amount: number
}
type ElaichiChai = {
    type: "elaichi",
    aroma: number
}

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order : Chai){
    switch (order.type) {
        case "masala":
            return `Masala Chai`
            break;
        case "ginger":
            return `Ginger Chai`
            break;
        case "elaichi":
            return `Elaichi Chai`
            break;
    }
}