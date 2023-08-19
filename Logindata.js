const btnTag = document.querySelector("button");
const NameTag =document.getElementById("name");
const EmailTag =document.getElementById("email");
const PassTag =document.getElementById("password");
const AddTag =document.getElementById("address");
let Name = "AAA";
let Email="myata5332@gmail.com";
let Password = "#AunG2004$";
let Address ="12 street"
btnTag.addEventListener("click",()=>{
    
    if(NameTag.value==Name && EmailTag.value==Email && PassTag.value==Password && AddTag.value==Address)
        alert("It is same.");
    else
        alert("It is not same.");
});