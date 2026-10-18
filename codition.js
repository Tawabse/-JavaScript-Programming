//   +++ All about controll flow +++
// condtional statment => to make decision 
// tooke decision on compresion as well as logical opreater 
//  let  a = 20
//  if ( a%2 == 0){
//     console.log( `This is an even number`);
    
//  } else {
//      console.log(`This is an odd number `);
     
//  }
//  // @@@ Nasted if else  @@@
//   let marks = 75
//    if ( marks >=90 && marks<=100 ) {
//  console.log( `Grade :A`)
//     } else if ( marks >= 80 && marks <90
//      ){
//  console.log( `Grade :B`)
//    }
//    else if ( marks >= 70 && marks<80 ){
//  console.log( `Grade :C`)
//    }
//  else if ( marks >=1 && marks <70  ){
//  console.log( `Grade :D`)
//    } 

// // (Example # 02 )
//   let weather = "sunny";
// let temp = 25;

// if (weather === "sunny") {
//     if (temp > 30) {
//         console.log("It's a hot day!");
//     } else if (temp > 20) {
//         console.log("It's a warm day.");
//     } else {
//         console.log("It's a bit cool today.");
//     }
// } else if (weather === "rainy") {
//     console.log("Don't forget your umbrella!");
// } else {
//     console.log("Check the weather forecast!");
// };


//     else {
//     console.log(`Not a valid number `)
    
//    } 
 //*****   Switch staatment ******
//  let  day = 7 
//   switch( day){
//      case 1 :{
//        console.log(`This is moneday`);
//        break ;
//      }
//   case 2 :{
//     console.log(`This is teusday`);
//      break;
//   }
//  case 3:{
//      console.log(`This is wedensday`);
//      break;
//  }
//   case 4:{
//     console.log(`This is thuresday`);
//     break;
//   } 
//  case 5 :{ 
//     console.log(`This is friday`);
//     break ;

//  } 
//  case 6:{
//     console.log(`This is saturday `);
// break;
//  }
//   case 7 :{
//     console.log(`This is sunday`);
//     break;
//   }
//   default:{
//      console.log(`Not included in day list `);
     
//   }

//   } 

// **** Ternary opreater *****
// ( ?)=>its works properley when both of the condition are matched  
// let y = 8
// console.log ( y===5 ? ` y is greter  then 5` : `y is less than 5 `)

//   function To_deciode ( whether) {
//       const activity = whether === "sunney" ? " get out" : "sty in";
//     //    console.log(activity)
//     return  activity
//   } 
//   console.log (To_deciode( "sunney"))
//    console.log(To_deciode( "raining"))
//    console.log(To_deciode( "snowing"))



// function decideActivity(weather){
//    const activity = weather === "sunny" ? "go out" : "stay in"

   
//    return activity

// }

// // Usage
// console.log(decideActivity("raining")); // Output: "stay in"
// console.log(decideActivity("snowing")); // Output: "stay in"
// console.log(decideActivity("sunny")); // Output: "go out"



  // function To_deciode ( whether) {
  //     const activity = whether === "sunney" ? " stay in  " : " got out   ";
  //   //    console.log(activity)
  //   return  activity
  // } 
  // console.log (To_deciode( "sunney"))
  //  console.log(To_deciode( "raining"))
  //  console.log(To_deciode( "snowing"))
