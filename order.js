// order.js

document.getElementById("order-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get item quantities from the form
    const item1Quantity = parseInt(document.getElementById("item1").value) || 0;
    const item2Quantity = parseInt(document.getElementById("item2").value) || 0;
    const item3Quantity = parseInt(document.getElementById("item3").value) || 0;

    // Prices for the items
    const item1Price = 12.99; // Burger Combo
    const item2Price = 9.99;  // Pizza Slice
    const item3Price = 14.99; // Pasta

    // Calculate the total cost
    const total = (item1Quantity * item1Price) + (item2Quantity * item2Price) + (item3Quantity * item3Price);

    // Store the order details in localStorage
    const orderDetails = {
        items: [
            { name: "Burger Combo", quantity: item1Quantity, price: item1Price },
            { name: "Pizza Slice", quantity: item2Quantity, price: item2Price },
            { name: "Pasta", quantity: item3Quantity, price: item3Price }
        ],
        total: total.toFixed(2)
    };

    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

    // Redirect to the checkout page
    window.location.href = "checkout.html";
});
