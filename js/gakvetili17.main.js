let Product = {
    title :" ვაშლი ",
    img:"https://sparonline.ge/files/catalog/2020168.jpg",
    weight:"3კგ"
}
let names = `<div class="card" >
<img src="${Product.img}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">  ${Product.title}</h5>
  <p class="card-text"> წონა: <span class="badge bg-danger"> ${Product.weight}</span></p>
</div>
</div>`

     let nwarray = [1,5,9,23,34];

let unshift = nwarray.unshift(3)
let push = nwarray.push(6)
let pop = nwarray.pop();
let shift  = nwarray.shift();
let splice = nwarray.splice (3,0,'80')

//console.log(splice)

function sor(a,b) {
    return a-b;
}

//console.log(nwarray.sort(sor))

function number(a,b) {
    return b-a ;
}
//console.log(nwarray.sort(number))


let array = ["gio","mari","nata","avto"];
for ( let i = 0; i < array.length; i++){
    let all = array[i];
       
    document.getElementById("document").innerHTML += all + "<br>";
  }



document.getElementById("gb").innerHTML = nwarray
document.getElementById("card").innerHTML = names;