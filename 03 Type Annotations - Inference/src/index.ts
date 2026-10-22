// Type annotation is when we explicitly tell TypeScript what the data type is, 
// while type inference is when TypeScript figures out the data type on its own based on the value we provide.

// Type Inference
let drink="chai"
let cups=Math.random()>0.5?2:1

// Type Annotation
let chaiFlavour:string="masala chai"
chaiFlavour="ginger chai"
// chaiFlavour=2