let inputMessage = document.getElementById('input')
let btn = document.getElementById('btn')
let msg = document.getElementById('msg')

btn.addEventListener('click',function(){
    if(inputMessage.value != ""){
        msg.innerHTML = inputMessage.value
        inputMessage.value = null
    }
})