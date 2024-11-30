// checkout.js

// Get order details from localStorage
const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));

// Display the order details on the checkout page
const orderSummary = document.getElementById("order-summary");
let orderHTML = "<ul>";

orderDetails.items.forEach(item => {
    if (item.quantity > 0) {
        orderHTML += `<li>${item.name} x${item.quantity} - $${(item.quantity * item.price).toFixed(2)}</li>`;
    }
});

orderHTML += `<li><strong>Total: $${orderDetails.total}</strong></li>`;
orderHTML += "</ul>";

orderSummary.innerHTML = orderHTML;

// Initialize Stripe
const stripe = Stripe('your-publishable-key'); // Replace with your Stripe publishable key
const elements = stripe.elements();

// Create an instance of the card Element
const card = elements.create('card');

// Add the card Element to the DOM
card.mount('#card-element');

// Handle form submission
const form = document.getElementById('payment-form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const {token, error} = await stripe.createToken(card);

    if (error) {
        document.getElementById('card-errors').textContent = error.message;
    } else {
        alert('Payment successful! Token ID: ' + token.id);
        // Process the token with your server to complete the payment
    }
});
