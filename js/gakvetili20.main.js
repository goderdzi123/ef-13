let Product = {
  title :" დასახელება ",
  img:"https://www.thoughtco.com/thmb/wL14UYCmPZoy3z0SCK8APPG5p74=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/getty-calendar-58b9cb935f9b58af5ca70e48.jpg",
  Descr:"აღწერააღწერააღწერააღწერააღწერააღწერააღწერააღწერააღწერააღწერააღწერააღწე",
  date: new Date('2021/05/07') ,
  category:"კატეგორია",
  Quantity: 400,
  active: true,
};

function checklen(des = Product.Descr){
  if (des.length > 50 && Product.active && Product.Quantity < 100)  {
    var text = "აუცილებლად წასაკითხი";
  }else{
    var text = "ნუ წაიკითხავთ";
  }
  return text;
}

let names = `<div class="card" >
<img src="${Product.img}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">  ${Product.title}</h5>
<p class="card-text">   ${Product.Descr}</p>
<p class="card-text"> დამატების თარიღი:  ${Product.date}</p>
<p class="card-text">   ${Product.category}</p>
<p class="card-text bg-success">   ${checklen()}</p>
<p class="card-text"> რაოდენობა:  ${Product.Quantity}</p>
</div>
</div>`



document.getElementById("card").innerHTML = names;









