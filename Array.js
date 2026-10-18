// array is an object that store multiple item  under single veriable decleration

// array can store diffren item as well in javasrcipt 
//    ---In array elements can be added , modified ,and removing  by doing manual as well as  built_in methodes 

//  // ***************************** Acadmy work*******************************************
//  // of and from => make  string and numeric into array 
//  // ******************** from ********************************************
//  let word = "hello";
// let letters = Array.from(word);

// console.log(letters);
//   //    ************** of ****************************************************let arr = Array.of(10, 20, 30);
//   let arr = Array.of(10, 20, 30);
// console.log(arr);











// ### three way to define array ###

// let  ab = [ " Ali","akbar", "numan"]
// let newway = new  Array ( 64 ,3, 6)
// //  let nall =[]
//  console.log( ab)
//  console.log( newway)
// //  console.log( nall)
// console.log(  ab[0])
// let lst = ab[ ab.length - 1]
// console.log(lst )

// console.log( ab [ ab.length -1])

// let Modified =["html"," css", " javascript " ," react "]
// console.log( Modified )
// Modified [ 3]=" Anguler"
// console.log( Modified )

// ___ Buailt_in function___ 
// push => add at end 
// shipt=> add at frist index without shipteing

//  let a =[" java" ," python"]
//  console.log(a)
//  a.push( "c++")
// console.log( a)
// a.unshift(" software engeneering")
// console.log( a)

//___ Negative of the above___
//  let a = [" java" ," python" ,"c#" ," c++" ,"software engeneering" ,"data secince"]
//  console.log(a)
//  a.pop( "c++")
// console.log( a)
// a.shift(" software engeneering")
// console.log( a)
//  a .splice(1,3)
// console.log( a)
// console.log( "its about the length: " +a. length) 

//@@@ Through loop  @@@
// let b = [  1,2,3,4,5,6,7]
// for ( i=0 ; i< b.length;i++){
//   console.log( b[i])

// }
 
//  let a =[ "java", "python"]
//  console.log( " This is concatonation of two arrays:" ,a .concat(b))

// %%% conversion %%%
// let x =["java" , "python"]
// console.log (x)
// console.log (x.toString())
// console.log ( typeof x)
//  let z = [1,2,3,4 ]
//  console.log( z)
//  console.log( z.toString())
//  console.log( typeof z)
 
//                        **************
// let M_array =[ 2,3,4,5,6]
// console.log(M_array )
// let N_arry = M_array.map( num=> num -2+1)
// console.log( N_arry)


//                    $$$$$$$$$$$$$$$$$


// let M_array =[ 2,3,4,5,6]
// console.log(M_array )
// let N_arry = M_array.filter( num=> num %2===0)
// console.log(  "This is the even number in the array",N_arry)

//   ### Reduced function ###
//  let R_arry=[ 10,20,30,40]
//   console.log( R_arry)
//   let Updated = R_arry.reduce(( total, num )=>{
//   return   total + num;

//   },0)
//   console.log( Updated) 
 

// ^^^ finde() , sort(), include() ,indexOf() ^^^

//   let FF_arry=[ 20,40,10,30]
//   console.log( FF_arry)
//   // @@@ sort() @@@
//   FF_arry.sort(    (a ,b) => (a-b))
//   console.log(FF_arry)
//  let Updated = FF_arry.find( num => num>25)
//   console.log( Updated) 
//   // include() =>  find out the  elements 
//   console.log( FF_arry. includes(20))
//   console.log( FF_arry. includes(25))
//   // IndexOf()=> find out the IndexOF of particular elements
//   console.log( FF_arry. indexOf(40))
 

//^^^ 2D Array ^^^

// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// // 1. Classic double for loop (most control)
// for(let i = 0; i < arr.length; i++) {         // rows
//     for(let j = 0; j < arr[i].length; j++) {  // columns
//         console.log(`arr[${i}][${j}] = ${arr[i][j]}`);
//     }
// }

// // 2. forEach + forEach (very clean)
// arr.forEach((row, rowIndex) => {
//     row.forEach((value, colIndex) => {
//         console.log(`Row ${rowIndex}, Col ${colIndex} → ${value}`);
//     });
// });

// // 3. for...of (modern & readable)
// for(const row of arr) {
//     for(const value of row) {
//         console.log(value);
//     }
// }
//     -------------------- fill() -----------------------------
//  const arr = new Array(3);
//     console.log(arr);
//   console.log(arr.fill(10));
//   console.log(arr.fill("Hello"));
  
