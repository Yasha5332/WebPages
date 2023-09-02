const btnTag = document.querySelector(".hamburgerContainer");
const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");
const Item = document.querySelector(".showItems");
btnTag.addEventListener("click",()=>{
    if(btnTag.classList.contains("RE")){
        line2Tag.classList.remove("line2CH");
        line1Tag.classList.remove("line1CH");
        line3Tag.classList.remove("line3CH");
        Item.classList.remove("ItemCH");
        btnTag.classList.remove("RE");

    }else{
    line2Tag.classList.add("line2CH");
    line1Tag.classList.add("line1CH");
    line3Tag.classList.add("line3CH");
    Item.classList.add("ItemCH");
    btnTag.classList.add("RE");
    }
})
