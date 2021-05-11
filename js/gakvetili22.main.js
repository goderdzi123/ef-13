let  title ={
    Length: 12,
    Width: 10,
    Height: 2,
    price: 120,
   total : function () {
        this.total = this.Length * this.Width * this.Height
        return this.total
    }
}
console.log(title.total())



let names = `<div class="card" >

<div class="card-body">
<h5 class="card-title"> სიგრძე:  ${title.Length}</h5>
<p class="card-text"> სიგანე:  ${title.Width}</p>
<p class="card-text"> სიმაღლე:   ${title.Height}</p>
<p class="card-text"> ფასი:   ${title.price}</p>
</div>
</div>`




document.getElementById("card").innerHTML = names;