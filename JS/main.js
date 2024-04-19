// Calcolo prezzo biglietto
// sotto 18 anni sconto 20%
// sopra 65 anni sconto 40%
// prezzo base 0.21 euro/km

let age = prompt("Quanti anni hai?");
console.log(`La mia età è: ${age}`);
let kmPercorsi = prompt("Quanti km devi fare?");
console.log(`Devo fare: ${kmPercorsi} km`);
let prezzoBigliettoIntero = (kmPercorsi * 0.21);
console.log(`Il prezzo intero è: ${prezzoBigliettoIntero}€`)


let msg = ("Il prezzo del biglietto è:")

let x20 = (prezzoBigliettoIntero * 20 / 100);
let x40 = (prezzoBigliettoIntero * 40 / 100);

let prezzoBigliettoUnder = (prezzoBigliettoIntero - x20)
console.log(`Il prezzo per gli Under è: ${prezzoBigliettoUnder}€ `)
let prezzoBigliettoOver = (prezzoBigliettoIntero - x40)
console.log(`Il prezzo per gli Over è: ${prezzoBigliettoOver}€`)
if (age < 18) {
    alert(prezzoBigliettoUnder)
} else if (age > 18 && age < 65) {
    alert(prezzoBigliettoIntero)
} else if (age > 65) {
    alert(prezzoBigliettoOver)
}

document.getElementById("costoBiglietto").innerHTML = msg + risultato + "#24";
document.getElementById("costoBiglietto").innerHTML = msg + (prezzoBigliettoUnder || prezzoBigliettoIntero || prezzoBigliettoOver) + "€"

