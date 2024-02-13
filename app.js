// let sayi = Number(prompt(`bir sayi giriniz`));
// console.log(typeof sayi);
// let sayi2 = 10;
// sayi = sayi + sayi2;

// console.log(sayi);

// console.log(Number("123"));
// console.log(Number("12.3"));
// console.log(Number("0"));
// console.log(Number(" "));
// console.log(Number(""));
// console.log(Number(null));

// const myNumber = `threezeroone`;
// let myNumber2 = Number(myNumber);
// console.log(myNumber2);
// console.log(typeof myNumber2);

// const dolar = "1000.3";
// const tl = "2000.2";

// const totalMonet = Number(dolar) + +tl;
// console.log(totalMonet);

// const dolarInt = parseInt(dolar);
// console.log(dolarInt);
// const tlFloat = parseFloat(tl);
// console.log(tlFloat);

// console.log(parseFloat(null));
// console.log(parseFloat(""));
// console.log(parseFloat(undefined));

// const myNumber3 = 2000.5;
// console.log(String(myNumber3));

// const calismaSuresi = prompt("calisma suresi:");
// let maas = prompt("Maasini giriniz:");

// if (calismaSuresi >= 10) {
//   //   maas = Math.trunc(maas * 1.1);
//   maas = Math.round(maas * 1.1);
//   console.log("zamli maasniz", maas);
//   console.log(`zamli maasiniz ${maas}`);
// } else {
//   console.log("uzgunuz maasiniza zam yapamiyoruz", maas);
// }
// console.log("gule gule");

// if (calismaSuresi >= 10) {
//   maas = Math.round(maas * 1.1);
//   console.log(`zamli maasiniz ${maas}`);
// }
// console.log("gule gule");

// const grade = prompt(`please enter your grade:`);

// let result = null;
// if (grade < 0) {
//   console.log("grade can not be small than zer");
// } else if (grade < 40) {
//   result = "ff";
// } else if (grade <= 50) {
//   result = "dd";
// } else if (grade <= 65) {
//   result = "cc";
// } else if (grade <= 89) {
//   result = "bb";
// } else if (grade <= 100) {
//   result = "aa";
// } else {
//   console.log("grade can not be bigger than 100");
// }
// if (result != null) {
//   console.log(`your score: ${result}`);
// }
// if (result) {
//   console.log(`your score: ${result}`);
// }

// const n1 = +prompt("Num1:");
// const n2 = +prompt("Num2:");
// const n3 = +prompt("Num3:");

// if (n1 > n2) {
//   if (n2 > n3) {
//     console.log("biggest;", n1);
//   }
// }

// if (n1 >= n2 && n1 >= n3) {
//   console.log("biggest:", n1);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log("biggest:", n2);
// } else if (n3 > n1 && n3 > n2) {
//   console.log("biggest:", n3);
// }

// let biggest = n1;

// if (n2 >= biggest) {
//   biggest = n2;
// }
// if (n3 >= biggest) {
//   biggest = n3;
// }

// console.log(`${biggest} is biggest`);

// const grade1 = prompt("please enter your grade:");
// grade1 >= 50 ? console.log(`succeed`) : console.log(`failed`);

// const score = grade1 >= 50 ? `passed` : `failed`;
// console.log(score);

// const score1 = grade1 >= 50 ? `succeed` : ``;
// console.log(score1);

// const speed = 110;

// speed > 120
//   ? console.log(`speedy`)
//   : speed >= 90
//   ? console.log(`normal`)
//   : console.log(`low speed`);

// if (speed > 120) {
//   console.log(`speedy`);
// } else if (speed >= 90) {
//   console.log(`normal`);
// } else {
//   console.log(`low speed`);
// }

const age = 18;

let description = ``;

// if (age >= 18) {
//   description = `adult`;
// }

// description = age >= 18 ? `adult` : ``;

// age >= 18 && console.log(`adult`);

// age >= 18 && (description = `adult`);

age < 18 || (description = `adultt`);

console.log(description);
