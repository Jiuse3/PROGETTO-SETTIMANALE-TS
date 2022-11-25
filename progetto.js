"use strict";
let chiamateZero = 0;
let costoTot = 0;
class Smartphone {
    constructor(credito) {
        this.credito = credito;
        this.costoChiamata = 0.20;
        this.numeroChiamate = 0;
    }
    ricarica(soldi) {
        return (this.credito = this.credito + soldi);
    }
    chiamata(minuti) {
        for (let i = 0; i < minuti; i++) {
            this.credito -= this.costoChiamata;
            costoTot += this.costoChiamata;
        }
    }
    number404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        chiamateZero = this.numeroChiamate;
        return (this.numeroChiamate = 0);
    }
}
let utente1 = new Smartphone(30);
console.log(utente1.ricarica(34));
utente1.chiamata(10);
utente1.azzeraChiamate();
console.log(`costo totale chiamata:${costoTot.toFixed(2)}'£'`);
console.log(utente1);
console.log(`IL CREDITO RESIDUO: ${utente1.credito.toFixed(2)}'£'`);
let utente2 = new Smartphone(50);
console.log(utente2.ricarica(2));
utente2.chiamata(3);
utente1.azzeraChiamate();
console.log(`costo totale chiamata:${costoTot.toFixed(2)}'£'`);
console.log(utente2);
console.log(`IL CREDITO RESIDUO: ${utente2.credito.toFixed(2)}'£'`);
let utente3 = new Smartphone(10);
console.log(utente3.ricarica(50));
utente3.chiamata(5);
utente1.azzeraChiamate();
console.log(`costo totale chiamata:${costoTot.toFixed(2)}'£'`);
console.log(utente3);
console.log(`IL CREDITO RESIDUO: ${utente3.credito.toFixed(2)}'£"`);
