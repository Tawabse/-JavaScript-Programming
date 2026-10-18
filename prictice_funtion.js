let foodoneprice = +prompt(" enter price")
let foodtwoprice = +prompt("enter price")
function pricecln (foodoneprice ,foodtwoprice ){
  let tax =(foodoneprice+foodtwoprice )*5 /100
  return  foodoneprice + foodtwoprice+tax

}
console.log(pricecln(foodoneprice,foodtwoprice))