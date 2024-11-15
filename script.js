document.addEventListener('DOMContentLoaded', function () {
    // Location selection to redirect to order page
    const locationForm = document.querySelector('#location-form');
    if (locationForm) {
        locationForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const location = document.querySelector('#location-input').value;
            sessionStorage.setItem('selectedLocation', location);
            window.location.href = 'order.html';
        });
    }

    // Sign In confirmation and redirect
    const signInForm = document.querySelector('#signin-form');
    if (signInForm) {
        signInForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.querySelector('#name-input').value;
            document.querySelector('.welcome-message').innerText = `Welcome to Fuel Rush, ${username}!`;
            document.querySelector('.location-link').style.display = 'block';
        });
    }

    // Order confirmation display
    const orderForm = document.querySelector('#order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const liters = document.querySelector('#liters-input').value;
            const location = sessionStorage.getItem('selectedLocation');
            document.querySelector('.order-confirmation').innerText = `Your order for ${liters} liters at ${location} has been placed successfully!`;
        });
    }

    // Bunk registration confirmation
    const bunkForm = document.querySelector('#bunk-form');
    if (bunkForm) {
        bunkForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const bunkName = document.querySelector('#bunk-name-input').value;
            const fuelType = document.querySelector('#fuel-type-input').value;
            document.querySelector('.bunk-confirmation').innerText = `Thank you for registering ${bunkName} selling ${fuelType} fuel!`;
        });
    }
});
