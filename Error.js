// Error => A fuaulte in code or porgrame that bahaive incorrectly or  stop runing code 
//  two types  (1) Compile time error ( 2) run time error 
// Compile Time Error=> The error that deteected before the executing code  mainly during machine readble code 
// Run  Time Error=> The error that detected during the execution of code
// //                   Compile Time Error 
//  let  CompileTimeError = ( x;

 //       Run Time Error 
//   let RunTimeError = ( x )
//   console.log( RunTimeError)
  
//   // Error Handling Cases 
// try{ 
//     console.log( " THis is the  entry point  of try ")

//     console.log(x)
//     console.log( " The end point of try ")
// }
// catch{
//      console.log(" Error Catching ")

// }

// // Finally call 
// try{ 
//     console.log( " THis is the  entry point  of try ")
      
//     console.log(x)
//     console.log( " The end point of try ")
// }
// catch ( err) {
//      console.log(" Error Catching ")
//      // you can print the error as well 
//      console.log ( "This is the error printing " +err )

// }
//  finally{
//      console.log(`This is the supperman`)
//  }
 // Custom Error 
   let CodeError = 100;
   if ( CodeError ==100){
      throw new Error (" Invalid JSON")
   }
