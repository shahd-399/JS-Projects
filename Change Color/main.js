let btn = document.getElementById('btn')
let box = document.querySelector('div')

var colors = ["red", "green", "blue", "orange" , "teal"];
var i = 0;

btn.addEventListener('click',function(){
    box.style.backgroundColor = colors[i]; 
    i++; 

    if(i == 5) {
        i = 0
    }
})