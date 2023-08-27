const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");

const tabs =["home","service","contact us","about us","login"]

const ChangeWidth=(event)=>{
    const liTagOffsetWidth= event.target.offsetWidth;
    const liTagOffsetleft = event.target.offsetLeft;
    sliderTag.style.width = liTagOffsetWidth+"px";
    sliderTag.style.transform=`translateX(${liTagOffsetleft}px)`;
}




for(let i=0;i<tabs.length;i++){
    const liTag =document.createElement("li");
    liTag.append(tabs[i].toUpperCase());
    liTag.id =i;
    ulTag.append(liTag);
    liTag.addEventListener("click",ChangeWidth);
    if(i==0){
        sliderTag.style.width = liTag.offsetWidth+"px"; 
    }
}