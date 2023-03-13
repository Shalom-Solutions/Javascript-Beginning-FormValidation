const SPENDING_THRESHOLD = 200000;
const TAX_RATE = 0.08;
const PHONE_PRICE = 50000;
const ACCESSORY_PRICE = 4000;

var bank_balance = prompt("Please entern your account balance: ");
var amount = 0;

function calculateTax(amount) {
    return amount * TAX_RATE;
}
function formatAmount(amount){
    return "N" + amount.toFixed(2);
}
//keep buying phone while you still have money
while((bank_balance - amount) > PHONE_PRICE){
    //buy a new phone!
    amount = amount + PHONE_PRICE;
    //can we afford the accessory?
    if(amount < SPENDING_THRESHOLD){
        amount = amount + ACCESSORY_PRICE;
    }
}
// don't forget to pay the government, too
amount = amount + calculateTax(amount);


console.log("Your purchase is: " + formatAmount(amount)
);

// can you actually affor this purchase?
if(amount > bank_balance)
{
    console.log(
        "You can't afford this purchase. :("
    );
}

document.getElementById("calc").innerHTML= amount;