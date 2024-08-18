let btn = document.getElementById('btn');
let heading = document.querySelector('h1');
let list = document.querySelector('ul');
let items = document.querySelectorAll('li');

// for(let i=0 ; i<items.length ; i++){
//     items[i].addEventListener('click',function(){
//         heading.innerHTML = this.innerHTML

//         for(let i=0 ; i<items.length ; i++){
//             items[i].classList.remove("active");
//         }

//         this.classList.add("active");
//     })
// }
list.addEventListener('click',active);

function active(e){
    if(e.target.nodeName == "LI"){
        heading.innerHTML = e.target.innerHTML;
        for(let i=0 ; i<e.target.parentNode.children.length ; i++){
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }
}

//to add new items
let counter = 1;
btn.addEventListener('click',function(){
    list.innerHTML += `<li>New Item ${counter}</li>`
    counter++;
})
