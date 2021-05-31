/* Checkout scripts */



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
    const package = document.querySelector('#checkout-items').value;

    const order = { name, phonenumber, email, package };
    createOrder(order);
});