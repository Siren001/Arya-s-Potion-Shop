const hamburger = document.querySelector('.header .navbar .navlist .hamburger');
const mobilemenu= document.querySelector('.header .navbar .navlist ul');
const menuitem= document.querySelectorAll('.header .navbar .navlist ul li a');
const header= document.querySelector('.header.container');


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobilemenu.classList.toggle('active');
})
document.addEventListener('scroll',()=>{
    var scrollposition = window.scrollY;
    if (scrollposition > 175){
        header.style.backgroundColor = "#29323c";
    }
    else{
        header.style.backgroundColor  = 'transparent';
    }
})

menuitem.forEach(item=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobilemenu.classList.toggle('active');
    })
})

