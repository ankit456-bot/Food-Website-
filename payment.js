window.onload = function () {
    // Retrieve the order from localStorage
    const order = JSON.parse(localStorage.getItem('order')) || [];

    // If the order is empty, alert the user and redirect to the menu page
    if (order.length === 0) {
        alert("Your order is empty!");
        window.location.href = "order.html"; // Redirect to order page
        return;
    }

    // Display the order items dynamically
    const orderItemsContainer = document.getElementById('order-items');
    let totalPrice = 0;

    order.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('order-item');
        itemDiv.innerHTML = `
            <p><strong>${item.name}</strong></p>
            <p>$${item.price.toFixed(2)}</p>
        `;
        orderItemsContainer.appendChild(itemDiv);
        totalPrice += item.price;
    });

    // Display the total price
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
};
