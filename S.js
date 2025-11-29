function convert(){
    let amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount)) {
        document.getElementById("result").innerText = "Please enter a number!";
        return;
    }

    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    let USD_to_ETB = 155;
    let ETB_to_USD = 1 / 155;
    let result;

    if (from === "USD" && to === "ETB") {
        result = amount * USD_to_ETB;
    } else if (from === "ETB" && to === "USD") {
        result = amount * ETB_to_USD;
    } else {
        result = amount;
    }

    document.getElementById("result").innerText =
        `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}
