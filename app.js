let inputBill = Number(prompt("What is your bill?"));

let taxAmount=inputBill*.07;
let taxTotalBill=inputBill+taxAmount;
let tipAmount=taxTotalBill*.05;
let total=tipAmount+taxTotalBill;

let element = document.body.querySelector(".box");

element.innerHTML=total;