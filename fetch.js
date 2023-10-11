
let product;
const url = "https://fakestoreapi.com/products";

fetch(url)
    .then((data)=>{
        const response = data.json()
        return response;
    })
    .then((ProductDataFromServer)=>{
        product = ProductDataFromServer;
    })
    .catch((error)=>{
        console.log("Error is ..",error);
    })
