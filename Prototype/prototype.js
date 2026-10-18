// prototype => prototype is where one object is link to other object 
//  it's like inheritence in javascript 
 // its a builtin properties of object is as well 

//  const MyObj= {
//     course :" web dev",
//     ins : "smit",
//      duration  : 16 

//  }

//   console.log(Object.getPrototypeOf(MyObj));
//   console.log(Object.getPrototypeOf(Object.prototype));


// //       Inheritence  via prototype 
//   const InProto={
//         greet(){
//             console.log("This is will  be  inhereted")
//         }
//   }
//    console.log(`Before The Inheretence :${ InProto.greet}`)
//   let NewIN =Object.create(InProto)
//    console.log("After inheretence ")
//   NewIN.greet()

//            FUNCTION BASE PROTOTYPE 


// function perName (name){
//     this.name =name
// }
//     perName.prototype.InMe = function(){
//         console.log(`My name is ${this.name}`)
//     } 
//      const pername1 = new perName("john")
//      const pername2 = new perName("tomme")
//       pername1.InMe();
//       pername2.InMe();
// console.log(pername1.InMe === pername2.InMe);


 
// //        ASSIGNMENT OF FUNCTION PROTOTYPE 
//   const  person = {
//         greet () {
//         console.log(`Hello my name is :${ this.name}`);
//     },
       
//      goodby () { 
//         console.log("Good By ");
        
//      }

//   };

//  function naame (name ){
//     this.name= name 
//  }
//  Object.assign(naame.prototype, person)

//  const human = new naame ("jemms")
//   human.greet();
//   human.goodby();

