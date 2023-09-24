// Función general que procesará los pagos
function processPayment (price, cardDetails) {
    // Aquí iría toda la lógica de programación para que se efectuase el pago...
    console.log(`Processing payment of $${price} with credit card...`);
}

// Cuando queramos añadir mas métodos de pago, deberemos hacer una función por cada tipo de pago y no empezar a usar condicionales dentro de la función general inicial.

function processPaymentWithCard (price, cardDetails) {
    // Aquí iría toda la lógica de programación para que se efectuase el pago con tarjeta ...
    console.log(`Processing payment of $${price} with credit card...`);
}

function processPaymentWithPayPal (price, payPalDetails) {
    // Aquí iría toda la lógica de programación para que se efectuase el pago con PayPal ...
    console.log(`Processing payment of $${price} with PayPal...`);
}