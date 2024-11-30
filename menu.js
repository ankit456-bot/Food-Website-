// Get all 'Add to Order' buttons
const addToOrderButtons = document.querySelectorAll('.add-to-order');

// Event listener for each button
addToOrderButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the details of the food item
        const menuItem = button.closest('.menu-item');
        const itemName = menuItem.getAttribute('data-name');
        const itemPrice = parseFloat(menuItem.getAttribute('data-price'));

        // Retrieve the current order from localStorage (if any)
        let order = JSON.parse(localStorage.getItem('order')) || [];

        // Add the new item to the order
        order.push({ name: itemName, price: itemPrice });

        // Save the updated order back to localStorage
        localStorage.setItem('order', JSON.stringify(order));

        // Optionally show a message or update UI for added item
        alert(`${itemName} added to your order.`);
    });
});

// Navigate to payment page when "Go to Payment" button is clicked
document.getElementById('go-to-payment').addEventListener('click', function() {
    window.location.href = 'payment.html';
});
