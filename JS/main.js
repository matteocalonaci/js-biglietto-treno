const age = prompt("Quanti anni hai?");
console.log(`La mia età è: ${age}`);

const kmPercorsi = prompt("Quanti km devi fare?");
console.log(`Devo fare: ${kmPercorsi} km`);

const costPerKm = 0.21;
const basePrice = (kmPercorsi * costPerKm);
console.log(`Il prezzo intero è: ${basePrice}€`)

let finalPrice = basePrice;

if (age < 18) {
    console.log(`Applico lo sconto del 20%`)
    const finalPrice = basePrice * 0.8
    console.log(`Sconto del 20%:`, finalPrice)
} else if (age > 65) {
    console.log(`Applico lo sconto del 40%`)
    const finalPrice = basePrice * 0.6
    console.log(`Sconto del 40%:`, finalPrice)
}
console.log(`Prezzo finale:`, finalPrice)

document.getElementById("prezzo").innerHTML = finalPrice;

let username;

document.getElementById("genera").onclick = function () {
    username = document.getElementById("myName").value;
    document.getElementById("myUsername").textContent = `${username}`;

    kmPercorsi = document.getElementById("myKm").value;
    console.log(kmPercorsi);
}


