//           **** ALL ABOUT OBJECTS ****
//  OBJECTS Is collection of properties where it store as key_ value pair.
 // => used to solved real world problem
 // using two way to declear the objects (1):literal (2): singolten {  creting by declearning nwe constructur}
 //  *** creation using objects literal ***
//   let  obj = {
//              name : " Tawab ",
//             profile :  " students ",
//           workingspace : " web dev " , 
//   }
// console.log( obj);
// // console.log ( Object.keys(obj).length)

// //   !----  ways of calling the objestc  ----!
// console.log( obj.name );
// console.log( obj["profile"] );




// //     --- creation using new objects () construcute 
//    let  obj =  new Object() ;
//              obj.name = " Tawab ",
//             obj.profile =  " students ",
//          obj.workingspace = " web dev " , 
  
// console.log( obj);
// // same methodes of calling 
// // adding , modifying and deleting the properties and behaiver 
//  obj.name = " Noname"
//   obj. salary =" No-salary"
//  console.log( " After updatting or modifying the objects:" ,obj);
//   delete obj.workingspace,
// console.log("After deleting the some value  is :",obj);

// //       ^^^^^^^^^ hasownproperty => used for somthing is exist or not ^^^^^^^^^^
// console.log("Its checks whether property exist or not ",obj.hasOwnProperty("name"));
//  console.log( obj.hasOwnProperty("profile"))
//  console.log( obj.hasOwnProperty("Amount"))
    
//    let  newobj =  new Object()
//              newobj.name = " Nonmae ",
//            newobj.profile =  " tourisst ",
//          newobj.workingspace = " js",
//         newobj.amount = " No_money" ,
//  console.log(newobj);
//   // this is how to print the length of the objects 
//   const size = Object.values(newobj).length
//   console.log(size)
  //  ### object.key( ...).length =>  retrive the size of keys of the objects  
// the same methods of concatnation of two or more objects
// console.log (object.keys(newobj).length);

//   console.log(obj , newobj)
//   const merged ={...obj, ...newobj}
//   console.log(merged);
  
// let obj = { name: "Sourav", age: 23 };
// console.log(Object.keys(obj).length);


//  ^^^^^^^^^^^^^^ inheritence in obects ^^^^^^^^^^^^^^
//  const obj={
//     name:'Pranjal',
//     age:16,
// }
// const obj1=Object.create(obj)
// obj1.class='10th'
// obj1.job=' students'
//  console.log ( obj1)
//  console.log (obj1.name,obj.name)

// //  << factory fucntionn>> 
// function info  ( name ,age ) {
//    return {
//   name : name,
//   age :age,
//  greeting : function () {

//     console.log ( ` hello my name is ${ this.name}`);
//  }

// };

// }
//  const person1 = info ( " Tawab ", " 21");
//  const person2 = info ( " No_name ", " 0");
//   person1.greeting();
//   person2.greeting();
  // **** optional opreater ( ? ) **** working flow 
//   let obj_1 ={
//      name : " Tawab ",
//     age : 21 ,
//     workspace:" web_dev",
//     prfile: {
//        Gmail:" Tawab@google.com",
//         Adrees :{
//           dist: "No_district",
//             tahsil: "No_tahsil" ,
//         }

//     }

//   }
//  console.log (obj_1?.prfile?.Adrees?.dist)


