const bar = document.querySelector(".fa-bars");
const SideBar = document.querySelector(".sideBar");
const input = document.querySelector(".SearchIn");
const text = document.querySelectorAll(".text");
const S = document.querySelector("#S");



bar.addEventListener("click",()=>{
    if(SideBar.classList.contains("move"))
    {
        SideBar.style.width = 95 +"px";
        input.style.display = "none";
        S.classList.add("A");
        bar.classList.add("B");
        text.forEach(sec=>{
        sec.style.display= "none";
        }) 
    SideBar.classList.remove("move");
    }  
    else
    {
        SideBar.style.width = 250+"px";
        input.style.display = "inline-block";
        text.forEach(sec=>{
        sec.style.display= "inline-block";
        }) 
        S.classList.remove("A");
        bar.classList.remove("B")
        SideBar.classList.add("move");
    }
})