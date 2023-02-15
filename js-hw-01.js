let salary = prompt("Введіть розмір вашої зарплати");

const premium = (Number(salary) / 100) * 15;
console.log(premium);

const tax = ((Number(salary) + premium) / 100) * 10;
console.log(tax);

const shop = 190;

const sum = Number(salary) + premium - tax - shop;
console.log(sum);
alert("Розмір вашої зарплати: " + sum);
