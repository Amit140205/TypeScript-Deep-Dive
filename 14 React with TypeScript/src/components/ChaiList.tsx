import type { Chai } from "../types/types"
import { ChaiCard } from "./ChaiCard"

interface ChaiListProp {
    items: Chai[]
}

export function ChaiList({items}: ChaiListProp){
    return (
        <div>
            {items.map((chai: Chai) => (
                <ChaiCard
                    key={chai.id}
                    name={chai.name}
                    price={chai.price}
                    isSpecial={chai.price > 20}
                />
            ))}
        </div>
    )
}