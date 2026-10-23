// Composition
// Basically we are passing the instance of one class to another class, 
// so that second class can access the properties of first class 

class Heater {
    heat(){}
}

class ChaiMaker {
    constructor(private heater: Heater){}

    make(){
        console.log(this.heater.heat())
    }
}