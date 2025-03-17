function ParseDonuts(donutString) {
    numDonuts = parseInt(donutString);
    if (donutString.indexOf("dozen") != -1) 
        numDonuts *= 12;
    return numDonuts; 
}
function updateOrder() {
    const TAXRATE = 0.0925;
    const DONUTPRICE = 0.50;
    var numCakeDonuts = ParseDonuts(document.getElementById("cakedonuts").value);
    var numGlazeDonuts = ParseDonuts(document.getElementById("glazedonuts").value); 
    if (isNaN(numCakeDonuts))
        numCakeDonuts = 0; 
    if (isNaN(numGlazeDonuts))
        numGlazeDonuts = 0; 
    var subTotal = (numCakeDonuts + numGlazeDonuts) * DONUTPRICE;
    var tax = subTotal * TAXRATE;
    var total = subTotal + tax;
    document.getElementById("subtotal").value = "$" + subTotal.toFixed(2);
    document.getElementById("tax").value = "$" + tax.toFixed(2);
    document.getElementById("total").value = "$" + total.toFixed(2);
}


function placeOrder() {
    if(document.getElementById("name").value == "")
        alert("I'm Sorry, but you must provide your name before submitting an order.");
    else if(document.getElementById("time").value == "" || isNaN(document.getElementById("time").value))
        alert (" I'm Sorry, but you must provide the number of minutes until pick-up before submitting an order.");

    updateOrder()
    // submit order to sender ...
    form.submit();
}