console.log("[BARATIE RESTAURANT]")
console.log('_'.repeat(50))

function processPayment(hargaTotal, bayar, metode) {
    try {
        if (typeof hargaTotal !== 'number' || typeof bayar !== 'number') {
            throw new Error("Both total price and amount given must be numbers")
        }if (bayar < hargaTotal) {
            throw new Error("Amount given is less than the total price")
        }const metodeValid = ["cash", "credit", "voucher"]
        if (!metodeValid.includes(metode)) {
            throw new Error("Unknown payment method")
        }
        
        const kembalian = bayar - hargaTotal;
        console.log(`Processing ${metode} payment...`)
        console.log(`Transaction successful. Change to return: ${kembalian}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
    } finally {
        console.log("Cleaning up resources...")
    }
}

const testCases = [
    { label: "[1]", total: 50, bayar: "fifty", method: "credit" },
    { label: "[2]", total: 50, bayar: 35, method: "cash" },
    { label: "[3]", total: 50, bayar: 222, method: "voucher" },
    { label: "[4]", total: 50, bayar: 75, method: "bitcoin" },
]

// Eksekusi setiap test case
testCases.forEach(({ label, total, bayar, method }) => {
    console.log(label)
    processPayment(total, bayar,method)
    console.log('_'.repeat(50))
})
