// DOM =>DOCUMENT  OBJECT MODEL
// Its a tree like sturcture  by the help of which we can 
// access the html content 

//  // DOM=> Dynamic changes OR dynamic manipulation 
//  // Selectin element by id 
//  //  document .getelEmentById( " id name like")
//   let heading =document.getElementById("heading")
//    console.log(heading);
   
//  console.dir(heading)
 
// //   @@@@@@@@Selection through class @@@@@@@ 
// // Manipulation through class will target the class 
//  let selectionThroughClass =document.getElementsByClassName("swc")
//  console.dir ( selectionThroughClass)
//  console.log ( selectionThroughClass)
//  // ****** selection through paraghraph ***********
//   let phara = document.getElementsByTagName("p")
//  console.dir ( phara)
//  console.log(phara);

// //  $$$$ selection through queryselecter $$$$
// let myid = document.querySelector("#myid")
//   console.dir(myid);

//  let fs =document.querySelector("p")
//   console.log(fs);
//   let ss = document.querySelectorAll("p")
//  console.log( ss);


// ((((((((((((DOM manipulation properties )))))))))))
// (1)tagname =>return tag for element node
//(2)innertext =>return the text content of elements & its childs
//(3)innerHTTML =>return the plain text or html content in the element
//(4)textcontent =>return texual content even for hidden elements

//  @@@@@@@@ DOM manipulation properties  @@@@@@@@
// let  id1= document.querySelector("h")
//  console.log(id1);
//      let  id=  heading.getAttribute(" id")
//  console.og(id)
//   let  call = document.querySelector("#myid")
//    console.log(call)
//   let id= call.getAttribute("id")
//    console.log(id)
//  let  cln = document.querySelector(".para")
//    console.log(cln);
//     let  non= cln.getAttribute( "class")
//   console.log(non)

// let cha = document.querySelector(".para");
// cha.setAttribute("class", "MyNewClass");
// console.log(cha);

// //  ****** Quiaz # 01  ******

//  let myid = document.getElementsByClassName("para")[0]



//  let newbutton = document.createElement("button")
//     newbutton.textContent=(" click me")
//          newbutton.style.backgroundColor=" red"
//    newbutton.style.color="white"


//       myid.prepend(newbutton)
//     // document.body.prepend(newbutton)
// //      newbutton.style.backgroundColor=" red"
// //    newbutton.style.color="white"

//   *********** Quiaz # 02  *************
  //  let  para = document.querySelector(".para")
  // console.log(para)
  // let access= para.getAttribute ("class");
  // console.log(access);
  // para.classList.add("highlight")
  
  
//   *********** All About EventListner  **************

  //  document.getElementById("btn").addEventListener("click",function(e){
  //      document.getElementById("evl").innerText="you have change the text"
      
  //   })
  //    let  btn=document.getElementById("btn")
//        let evl=document.getElementById("evl")
// //  btn.addEventListener("mouseover",function(e){

// let toggleBtn = document.getElementById("toggleBtn");
// let body = document.body;

// // Add click event
// toggleBtn.addEventListener("click", function () {
//   // Toggle the class 'dark-mode' on body
//   body.classList.toggle("dark-mode");
  
//   // Optional: Change button text
//   if (body.classList.contains("dark-mode")) {
//     toggleBtn.textContent = "Switch to Light Mode";
//   } else {
//     toggleBtn.textContent = "Switch to Dark Mode";
//   }
// });
//      evl.innerHTML="The text are changed "
//       console.log(" The text become changed ")
//  })
  // Light and dark mode project 

 // Select the button and body
// function  BMI_calculater ( ) {
  
//   let markMass = 78;
//   let markHeight = 1.69;

//   let johnMass = 92;
//   let johnHeight = 1.95;

  
//   let markBMI =  Math.floor( markMass / (markHeight * markHeight))
//   let johnBMI = Math.floor(johnMass / (johnHeight * johnHeight));
//        console.log(" Mark BMI :" ,markBMI)
//        console.log(" John  BMI :" ,johnBMI)


//   if ( markBMI>johnBMI){
//       console.log("Mark BMI is greater then John BMI:", markBMI)
//   } else if (johnBMI >markBMI ){
//       console.log("John BMI is greater then Mark BMI:", johnBMI); 
//   } else {
//      console.log(" Not Valide NUmber ");
     
//   }
 


// }
// BMI_calculater();






// console.log(` no world  world `);
// console.log(` no world  world `);

// console.dir( document.body)
// console.log( document.body)
