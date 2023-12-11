const mobileIcon = document.querySelector('.mobileicon');
let navHeader = document.querySelector('.header');

mobileIcon.addEventListener('click', function(){
    // alert("menu is click ")
    navHeader.classList.toggle("active");
})