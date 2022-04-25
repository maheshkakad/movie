// Store the wallet amount to your local storage with key "amount"



let amountW = JSON.parse(localStorage.getItem("amount")) || []

function walletgo(){
    var amount = document.getElementById("amount").value;

    console.log(amount);

   let wallet =  document.getElementById("wallet");
    wallet.innerText = amount;

    amountW.push(amount);

 localStorage.setItem("amount", JSON.stringify(amountW));
    

}

function gotomovie(){

    window.location.href = "movies.html";
}