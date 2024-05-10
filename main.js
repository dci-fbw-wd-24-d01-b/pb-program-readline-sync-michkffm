import readlineSync from "readline-sync";

let name = readlineSync.question('Wie heißt du?');
let birthYear = readlineSync.question('In welchem Jahr wurdest du geboren');
let birthCity = readlineSync.question('In welcher Stadt wurdest du geboren?');
let currentCity = readlineSync.question('Wo lebst du jetzt');
let currentYear = readlineSync.question('Was ist das aktuelle Jahr');

console.log(`Hallo mein Name ist ${name}! Ich wurde vor ${currentYear} in ${birthCity} geboren. Jetzt lebe ich in ${currentCity}. `);