let obj = {
    title:"dasaxeleba",
    img:'images/technology.png',
    weight:4,
    price:2.5,
    quantity:1,
    

    total:function () {
        this.total = this.weight * this.price
        return this.total
    }
}

console.log(obj.total());


let cardTitle = document.querySelector('.card-title')
cardTitle.innerHTML = obj.title


let cardWeight = document.querySelector('.weight')
cardWeight.innerHTML = obj.weight

let cardPrice = document.querySelector('.price')
cardPrice.innerHTML = obj.price


let cardQuantity = document.querySelector('.quantity')
cardQuantity.innerHTML = obj.quantity

let cardImg = document.querySelector('.card-img')
cardImg.src = obj.img



 function myFunction() {
  
    if (0) {
      console.log(" არ არის მარაგში");
    } else {
       console.log("  არის მარაგში");
    }
    document.getElementById("cards").innerHTML = cards;
  }

 






