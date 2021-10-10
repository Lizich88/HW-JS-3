// let roomLenght = prompt("Введите длину  комнаты?");
// let roomWidth = prompt("Введите ширину  комнаты?");
// let roomArea = roomLenght * roomWidth;
// document.write(`Площадь вашей комнаты составляет: ${roomArea.toFixed(2)}`);
    
    
    
// let gardenLenght = prompt("Введите длину  садового участка в футах?");
// let gardenWidth = prompt("Введите ширину  садового участка в футах?");
// const SQ_FEET_PER_ACRE = 43560;
// let gardenArea = ( gardenLenght * gardenWidth ) / SQ_FEET_PER_ACRE;
// document.write(`<h1>Площадь сада составляет: ${gardenArea} акров </h1>`);

// const LESS_DEPOSIT = 0.1;
// const MORE_DEPOSIT = 0.25;
// let lessBottles = prompt("Сколько у Вас бутылок объемом 1 литр и меньше ?");
// let moreBottles = prompt(" Сколько у вас бутылок объемом больше 1 литр ?");
// let refund = lessBottles * LESS_DEPOSIT + moreBottles * MORE_DEPOSIT;
// document.write(`Выручка от сданных бутылок составит: $${refund.toFixed(2)}`);


// let bill = prompt("Сумма заказа");
// let billOrder = Number (bill);
// let tax = 0.21 * bill;
// let tips = (0.18 * (tax + bill));

//  let summBill = billOrder + tax + tips;

// document.write (` Сумма заказа : ${billOrder} сом <br>`);
// document.write(`Налог с продаж : ${tax.toFixed(2)} сом <br>`);
// document.write(` Чаевые : ${tips.toFixed(2)} <br> `);
// document.write(`Общая сумма заказа: ${summBill.toFixed(2)}`);
 
// let nn = prompt("Задайте значение для n");
// let n = Number(nn);
// let sum = n* (n + 1) / 2;
// document.write("n=" + n + "<br>");
// document.write(`Сумма первых положительных чисел для n : ${sum}`);
// console.log(sum);



// let smallSuvenir = prompt(" Введите количество сувениров:");
// let bigSuvenir = prompt(" Введите количество безделушек:");
// let ss = Number(smallSuvenir);
// let bs = Number(bigSuvenir);
// const weightSs = 75;
// const weightBs = 112;
// document.write(`Количество сувениров: ${smallSuvenir} <br>`);
// document.write(`Количество безделушек: ${bigSuvenir} <br>`);
// document.write(`Вес одного сувенира: ${weightSs} <br>`);
// document.write(`Вес одной безделушки: : ${weightBs} <br>`);
// let sum = weightSs * smallSuvenir + weightBs * bigSuvenir;
// document.write(`Общий вес сувениров и безделушек: ${sum.toFixed(2)} гр`);
// console.log(sum);







// let aa = prompt ("Задайте значение a");
// let bb = prompt ("Задайте значение b");
// let a = Number(aa);
// let b = Number(bb);
// document.write("a=" + a + "<br>");
// document.write("b=" + b + "<br>");
// document.write("a+b="+(a+b)+ "<br>");
// document.write("a-b=" + (a - b) + "<br>");
// document.write("a*b=" + (a * b) + "<br>");
// document.write("a/b=" + (a / b) + "<br>");
// document.write("Частное от деление a на b =" + Math.trunc(a / b) + "<br>");
// document.write("Остаток от деления a на b=" + (a%b) + "<br>");
// document.write("Результат возведения числа a в степень b=" + (a**b) + "<br>");
            



let savAccount = prompt("Внесите сумму первоначального депозита :");
let savMoney = Number(savAccount);
let firstYear = (savMoney / 100) * 4 + savMoney;
let secondYear = (savMoney / 100) * 8 + savMoney;
let thirdYear = (savMoney / 100) * 12 + savMoney;
document.write(`Сумма за 1 год : ${firstYear.toFixed(2)} <br>`);
document.write(`Сумма за 2 года : ${secondYear.toFixed(2)} <br>`);
document.write(`Сумма за 3 года : ${thirdYear.toFixed(2)} <br>`);


  
 















