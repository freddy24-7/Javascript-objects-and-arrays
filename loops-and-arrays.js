// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in bovenstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================

const names = ["Henk", "Piet", "Fred", "Joop"];
//Alternative 1 - "literal" solution with map, gives array in array notation
console.log(names)
const cosyNames = names.map(names => names + "je")
console.log(cosyNames);

//Alternative 2 - for loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i] + "je")
}


// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]


// ==========================================
// Opdracht 2
// Schrijf een script dat ieder getal in bovenstaande array met 3 vermenigvuldigd.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const numbers = [2, 4, 5, 29, 38];
//"literal solution" with array notation result
const scalar = 3
const newNumbers = numbers.map(numbers => numbers * scalar)
console.log(numbers)
console.log(newNumbers)

//alternative using for loop
for  (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]*3)
}

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];


// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array het volume uitrekent.
// Het volume is lengte x breedte x hoogte
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const squares = [30, 2, 8, 24, 11];
//"literal" solution with map, produces a horizontal array
console.log(squares)
const newSquares = squares.map(squares => Math.pow(squares, 3))
console.log(newSquares)

//using for loop
for (let i = 0; i < squares.length; i++) {
    console.log(Math.pow(squares[i], 3))
}

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [27000, 8, 512, 13824, 1331];
