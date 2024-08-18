let btns =document.querySelectorAll('.accordion')
for(i=0 ; i<btns.length ; i++){
    btns[i].addEventListener('click', function(){

        this.classList.toggle('active');

        let description = this.nextElementSibling;
        if(description.style.display == 'block'){
            description.style.display = 'none';
        }
        else{
            description.style.display = 'block';
        }
    })
}