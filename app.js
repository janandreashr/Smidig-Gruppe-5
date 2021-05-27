//Checkout scripts

var checkoutItem = {
    name: "",
    image: "",
    price: ""
}


function testCheckout(){
if(localStorage.getItem('checkoutItem') == null){
    localStorage.setItem('checkoutItem', '[name: John, image: null, price: 500]');
}}

function getCheckoutItem(){
    var checkoutItem = {
        name: "",
        image: "",
        price: ""
    }

    document.getElementById("checkout-items").innerHTML = localStorage.getItem("checkoutItem");
}

/*obj = JSON.parse(checkoutItem);
    if(localStorage.getItem('checkoutItem') != null){
        document.getElementById('checkout-items').innerHTML = obj.name;
        console.log()
    }else{
        console.log("Handlekurven er tom")
    }*/