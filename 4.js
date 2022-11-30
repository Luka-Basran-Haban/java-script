var pozdrav="Pozdrav";
var ime="Luka";
var prviDio= pozdrav.slice(0,2);
var drugiDio=pozdrav.slice(2,8);
var velikaSlova=drugiDio.toUpperCase();
var cijeliDio=prviDio+velikaSlova;
// console.log(pozdrav, ime, "! Broj slova u ovoj recenici je:", pozdrav.length+ime.length);
console.log(cijeliDio, ime);