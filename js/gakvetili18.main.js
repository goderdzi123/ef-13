
//1 

let age = [2,3,60,70,34]

age.forEach( function (number) {
   // console.log(number)
})

//2

let find = age.find(check);
    function check(value) {
        return value > 50;
    }
 //console.log(find)

//3
  
let el = age.filter(function (number) {
    if (number < 50 ) {
        return number
    }
})
//console.log(el)

//4

for (let a = 0; a < el.length; a++) {
    const element = el[a];
   // console.log(element)
    
}
//5
let to = age.some(check);
function check (value) {
    return value <= 1
}

//console.log(to)

//6
let or = age.every(check);
 function check(value) {
     return value < 5
 }

 console.log(or)



 let products = [
     {name:"Air Conditioner ", descr:" კონდიციონერი - HYUNDAI - ESAF-09HDN1 ESAF-09HDN1" , img:"images/business.png", price:1099.99},
     {name:"Mixer ", descr:" კონდიციონერი - HYUNDAI - ESAF-09HDN1 ESAF-09HDN1" , img:"images/business.png", price:45.00},
     {name:" PlayStation", descr:"ფლეისთეიშენი - PLAYSTATION - PS4 1TB F GTS/HZD " , img:"images/business.png", price:1399.00},
     {name:"Washing Macine ", descr:" სარ.მანქანა წინა ჩატვირთვით - BOSCH - WAJ2017SMEWAJ2017SME " , img:"images/business.png", price:1399.99},
     {name:"TV ", descr:"ლედ სერია - SAMSUNG - UE43T5300AUXRU UE43T5300AUXRU " , img:"images/business.png", price:1529.99},
     {name:"Notebook ", descr:"ლეპტოპები - ASUS - X515MA-BR103 X515MA-BR103 " , img:"images/business.png", price:1699.99},
     {name:"Refrigerator ", descr:"ზედა საყინულით - CHANGHONG - CR260W CR260W" , img:"images/business.png", price:769.99},
     {name:"Mobile Phone ", descr:"აიფონი - APPLE - iPhone SE 128GB WhiteiPhone SE 128GB White " , img:"images/business.png", price:2089.99},


 ]


 


 function calc (els){
    return els.price > 20 && els.price < 10000
 }



 let filteredArray = products.filter(calc);

 let outs = document.getElementById("htmls");

 filteredArray.forEach(forprod)

 function forprod(elements){
    let prod = `  <div class="col-lg-3 mb-4"> <div class=" card" >
    <img src="${elements.img}" class="card-img-top" alt="...">
    
    
    <div class="card-body">
      <h5 class="card-title">${elements.name}</h5>
      <p class="card-text">${elements.descr}</p>
      <span class="btn btn-primary">${elements.price} ₾ </span>
    </div>
  </div> 
  </div>`;

  outs.innerHTML += prod;




 }

