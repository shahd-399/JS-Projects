let password = document.querySelector('input')
let hideIcon = document.querySelector('.hide-icon')
let showIcon = document.querySelector('.show-icon')


showIcon.addEventListener('click',function(){
    hidePassword()
})
hideIcon.addEventListener('click',function(){
    showPassword()
})

function hidePassword(){
    showIcon.style.display = "none"
    hideIcon.style.display = "flex"
    password.setAttribute('type', 'password');
}
function showPassword(){
    showIcon.style.display = "flex"
    hideIcon.style.display = "none"
    password.setAttribute('type', 'text');
}