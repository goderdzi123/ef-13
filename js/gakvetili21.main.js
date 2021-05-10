let bg = document.getElementById("bg");

function like() {
    bg.innerHTML++;
}

function dislike() {
    if (bg.innerText >=1 ) {
        bg.innerHTML --;
    }
}
function reset() {
   
    bg.innerHTML = 0;
 
    
}