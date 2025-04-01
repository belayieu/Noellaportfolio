const mobileMenu = document.getElementById("mobile_menu");
mobileMenu.addEventListener("click", ()=>{
   const logo = document.getElementById('logo');
   logo.classList.toggle('noella');
    const desktopMenu = document.getElementById("desktop_menu");
    desktopMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
})


