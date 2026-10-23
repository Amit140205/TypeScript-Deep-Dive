// Best practices to use private access modifier and getter-setter methods

class ModernChai {
    private _sugar = 2

    
    public get sugar() : number {
        return this._sugar
    }

    
    public set sugar(v : number) {
        this._sugar = v;
    }

}

const chai = new ModernChai()
console.log(chai.sugar) // getter

chai.sugar = 3 // setter