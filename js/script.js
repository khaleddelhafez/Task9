var cart = document.getElementById("cart")
var cartbadge = document.querySelector(".cart-badge")
var cartbtns = document.querySelectorAll(".btn")
var badgecount = 0
var productname = document.querySelectorAll(".productname")
var items = document.querySelector(".cart-items")
var prices = document.querySelector(".cart-price")
var confirmbtn = document.querySelector(".confirm-btn")
// var confirmbtnn = document.querySelector("#confirm")
var totalprice = 0
var itemprice = document.querySelector(".item-price")


cartbtns.forEach (function(btn) {
    btn.onclick = function () {
        badgecount++
        cartbadge.style.background = "red"  
        cartbadge.innerHTML = badgecount;

        itemprice.innerHTML += "+" + btn.getAttribute("price") + "L.E" + "<br>"
        totalprice +=  +(btn.getAttribute("price")) 

        items.innerHTML += btn.getAttribute("value") + "<br>"
        
        if (items.innerHTML !== "") {
            confirmbtn.style.transform = "scale(1)";
        } else {
           // confirmbtn.style.display = "none";

            
        }
    }
})



confirmbtn.onclick = function () {
    itemprice.style.display= "block"
    prices.innerHTML = totalprice + "L.E"


}
