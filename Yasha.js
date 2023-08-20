const ham = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburgerMenuContainer");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const tag = document.querySelector(".tag");
menu.addEventListener("click",()=>{
    if(menu.classList.contains("IsOpened"))
    {
        line2.classList.remove("chgline2"); 
        line1.classList.remove("chgline1");
        line3.classList.remove("chgline3");
        tag.classList.remove("changeA");
        menu.classList.remove("IsOpened");
    }
    else{       
        line2.classList.add("chgline2"); 
        line1.classList.add("chgline1");
        line3.classList.add("chgline3");
        tag.classList.add("changeA");
        menu.classList.add("IsOpened");
    }
});