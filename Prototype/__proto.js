//   SOME CRITICAL POINTS ABOUT THE PROTOTYPE 
//When JavaScript creates an object,it secretly attaches a hidden internal property called  protoype

// let Animal ={
//     eat: true,
//     fly:false,
//  reproductive:false,

// }
// let  Rabbit ={
//     jumps: true,

// }
//               Both Chein Are Allowed 

// Rabbit.__proto__=Animal
// console.log(Rabbit.eat)
// console.log(Rabbit.fly)
// console.log(Rabbit.reproductive)
  
// Animal.__proto__=Rabbit
// console.lo gAnimal.jumps)

//  Example # 02 :


// let animal = {
//   eats: true
// }

// let rabbit = {
//   jumps: true
// }

// let bunny = {
//   cute: true
// }

// rabbit.__proto__ = animal
// bunny.__proto__ = rabbit

// console.log(bunny.eats)

