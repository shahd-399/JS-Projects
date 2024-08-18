let theImage = document.querySelectorAll('.the-img')
let modal = document.querySelector('.modal')
let close = document.querySelector('.close')
let caption = document.querySelector('.caption')
let modalImg = document.querySelector('.modal-img')


for(let i = 0; i < theImage.length; i++){
    theImage[i].addEventListener('click',function(){
        modal.style.display = 'flex';
        modalImg.src = this.src;
        caption.innerHTML = this.alt
    })
}
close.addEventListener('click',function(){
    modal.style.display = 'none'
})

document.onkeydown = function(e){
    if(e.keyCode == '27'){
        modal.style.display = 'none'
    }
}