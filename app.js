const iconHamb=document.getElementById("iconMenu");
const menuPhone=document.querySelector(".slideMenu");

iconHamb.addEventListener("click", function(){
    menuPhone.classList.toggle("showSlideMenu");
});