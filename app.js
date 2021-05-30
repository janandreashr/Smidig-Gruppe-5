//Checkout scripts



function testCheckout(){
    const checkoutItem = {name, image, price};
    
    if(localStorage.getItem("checkoutItem") == null){
        
        localStorage.setItem("checkoutItem", checkoutItem.name = "John",
        checkoutItem.image = null,
        checkoutItem.price = "500" ,JSON.stringify("checkoutItem"));
    }}


function getCheckoutItem(){

    var checkoutOutput = JSON.parse(localStorage.getItem("checkoutItem"));
    const targetElement = document.getElementById("checkout-items");
    targetElement.innerHTML = checkoutOutput;
}

/*obj = JSON.parse(checkoutItem);
    if(localStorage.getItem('checkoutItem') != null){
        document.getElementById('checkout-items').innerHTML = obj.name;
        console.log()
    }else{
        console.log("Handlekurven er tom")
    }*/