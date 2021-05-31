/* Localstorage scripts */
function addPackage1(){
    const package1 = {
        name: "Pakke 1",
        price: "500",
    }

    localStorage.setItem('Pakke', JSON.stringify(package1));
}
function addPackage2(){
    const package2 = {
        name: "Pakke 2",
        price: "1000",
    }

    localStorage.setItem('Pakke', JSON.stringify(package2));
}
function addPackage3(){
    const package3 = {
        name: "Pakke 3",
        price: "1500",
    }

    localStorage.setItem('Pakke', JSON.stringify(package3));
}

function getCheckoutItem(){
    localStorage.getItem('Pakke');
    document.getElementById("checkout-items").innerText = JSON.parse(localStorage.getItem('Pakke')).name;

    
}




/* AXIOS Scripts */

const createOrder = (order) => {

    axios.post( "https://localhost:5001/order/", order )
        .then ( response => {

        console.log( response.data );
        appendToDOM([order]);
        })
        .catch(error => console.error(error));
    
}

const form = document.querySelector('form');

const formEvent = form.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const phonenumber = document.querySelector('#phonenumber').value;
    const email = document.querySelector('#email').value;
    const package = document.querySelector('#checkout-items').innerHTML;

    const order = { name, phonenumber, email, package };
    createOrder(order);

    localStorage.clear();
    window.location.reload();
});