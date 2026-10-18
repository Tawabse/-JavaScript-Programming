// const myPromise = new Promise((resolve, reject) => {
//     resolve("Success!");

// });

// myPromise.then(value => console.log(value))
 


// // Catching the Error 
//  let MPromise = new Promise ( ( resolve,reject )=>{

//         reject (" Somthing Wrong ")
//  });
//  MPromise.catch ( err=> console.error (err));



// console.log("Start")
// const wait = new Promise((resolve) => {
//     setTimeout(() => resolve("2 seconds passed"), 2000);
// });

// wait.then(msg => console.log(msg));
// console.log("Done")

//    ************** Chaining Promissis  *******************


// let NP= new Promise( res=> res(10))
//    .then( num => num * 2)
//    .then(num => num + 5 )
//    .then (res =>console.log(res))
