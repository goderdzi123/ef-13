let x = 30;
function number (x)  {
    x++;
    return x; 
 }

 
 function gh(x,y) {
     return(x*y)
 }
 console.log(gh(6,6))


 let img = 'images/Warstwa 7.png';
 let clas = 'img-fluid';

let html = `<img src= " ${img}" class=" ${clas}"> `
document.getElementById("cards").innerHTML = html


let mystr = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
console.log(mystr.search("dolor"))

console.log(mystr.slice(5,-6))
console.log(mystr.slice(18,-35))
