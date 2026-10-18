// //  Events 
// // Events=> An event is an action that happens in the browser
// //Types =>click, moueup, mousedown, dbclick etc 
  let btn = document.getElementById("btn")
    function changetext (){
    //     console.log(Event)
     let btn = document.getElementById("btn")
     btn.textContent=" The things getting done" 
    }
    btn.addEventListener('click',changetext);
//   btn.removeEventListener( 'click',changetext) 

//  methode  2 

// let  Anr =document.getElementById("Anr") 
//  function cdh(){
//     let  Anr =document.getElementById("Anr")
//      console.log(" You have visited it ") 
//  }
//    Anr.addEventListener(' click',cdh)


//  ************* Prevent Defaulte  ******************

// let Anr=document.getElementById("Anr")
// Anr.addEventListener('click', function(Event){
//      Event.preventDefault();
//      Anr.textContent ="This is prevent defaulte property"
// })
 
//  let para=document.querySelectorAll('#list')
//  for( let i =0;i<para.length;i++){
//     let paras 
//     paras+=[i]
//  }
//  function  prg(){
     
//  let para=document.querySelectorAll('#list')
//  console.log(" You have clicked on para" +[i+1])
//  }
//  para.addEventListener ('click',prg())