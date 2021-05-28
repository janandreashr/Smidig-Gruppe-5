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

    var checkoutOutput = localStorage.getItem("checkoutItem");

    document.getElementById("checkout-items").innerHTML = checkoutOutput;
}

/*obj = JSON.parse(checkoutItem);
    if(localStorage.getItem('checkoutItem') != null){
        document.getElementById('checkout-items').innerHTML = obj.name;
        console.log()
    }else{
        console.log("Handlekurven er tom")
    }*/