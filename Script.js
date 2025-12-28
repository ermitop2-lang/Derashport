// 1. Search Filter Logic
document.getElementById('shipmentSearch').addEventListener('keyup', function() {
    let filter = this.value.toUpperCase();
    let rows = document.querySelector("#tradeTable tbody").rows;
    
    for (let row of rows) {
        let text = row.textContent.toUpperCase();
        row.style.display = text.includes(filter) ? "" : "none";
    }
});

// 2. Custom Duty Calculator Logic
function calculateDuty() {
    const value = document.getElementById('cargoValue').value;
    const rate = document.getElementById('category').value;
    const resultDisplay = document.getElementById('calcResult');

    if (value > 0) {
        const total = value * rate;
        resultDisplay.innerHTML = Estimated Duty: <strong>$${total.toLocaleString()}</strong>;
        resultDisplay.style.color = "#3fb950";
    } else {
        resultDisplay.innerHTML = "Please enter a valid value.";
        resultDisplay.style.color = "#f85149";
    }
}

// 3. Dynamic Welcome Message
console.log("Derashport v1.0.0 Initialized. Welcome, Professional.");
