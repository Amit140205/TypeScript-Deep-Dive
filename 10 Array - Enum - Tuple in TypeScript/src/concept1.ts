// Enum

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

// auto increment (automatically asigned)
enum Status {
    PENDING = 100,
    SERVED, // 101 
    CANCELLED // 102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType){
    console.log(`Making: ${type} chai`)
}

makeChai(ChaiType.MASALA)


// or in some scenarios
const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s: Sugars = Sugars.HIGH