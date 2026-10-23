class Chai {
    public flavour: string = "Masala"
    private secretIngredients: string = "Cardamom"

    protected shopName: string = "Chai Corner" // within class and within child class inheriting the parent class

    readonly capacity: number
    // readonly capacity: number = 100 // this is also allowed, this is treated as a default value

    constructor(capacity: number){
        this.capacity = capacity
    }

    // getters
    reveal():string{
        return this.secretIngredients // best practice
    }
}

class Branch extends Chai {
    getName(): string{
        return this.shopName
    }
}

const chai = new Chai(100)
console.log(chai.reveal())