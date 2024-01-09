let menu = document.querySelectorAll('#menubar');
let mynav = document.querySelectorAll('nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}