const detailCard = document.getElementById("detailcard");
const items = document.querySelectorAll(".items");
const itemContainer = document.querySelector(".container-items");
        

function closePanel() {
        detailCard.style.display = "none";
}

function openPanel() {
        detailCard.style.display = "block";

}

items.forEach((item) => {
        item.addEventListener("click", () => {
                detailCard.style.display = "block"
        })
})

const totalPrice = document.getElementById("priceTotal");
const priceTotal = Number(totalPrice.textContent.replace(/[^\d.]/g, ""));
function changeQuantity(amount) {
        const quantityInput = document.getElementById("quantity")
        const quantityAmount = quantityInput.valueAsNumber;
        
        
        
        quantityInput.value = Math.max(1, quantityAmount + amount);
        
        const newTotalPrice = priceTotal * quantityInput.value
        ;
        
        totalPrice.textContent = "N" + newTotalPrice.toLocaleString();
        
}