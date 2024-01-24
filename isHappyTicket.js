/*"Счастливым" называют билет с номером, в котором сумма первой половины цифр равна сумме второй половины цифр. Номера могут быть произвольной длины, с единственным условием, что количество цифр всегда чётно, например: 33 или 2341 и так далее.

Билет с номером 385916 — счастливый, так как 3 + 8 + 5 === 9 + 1 + 6. Билет с номером 231002 не является счастливым, так как 2 + 3 + 1 !== 0 + 0 + 2.

Реализуйте и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер — всегда строка). Функция должна возвращать true, если билет счастливый, или false, если нет.

Примеры использования:

isHappyTicket('385916'); // true
isHappyTicket('231002'); // false
isHappyTicket('1222');   // false
isHappyTicket('054702'); // true
isHappyTicket('00');     // true

*/
const happyTicket = (num) => {
    
  if(num.length % 2 === 0){
    let oneNum = num.slice(0,num.length / 2);
    let twoNum = num.slice(num.length / 2, num.length);
    let oneRes = 0;
    let twoRes = 0;
    for(let i =0; i < oneNum.length; i++){
      oneRes = parseInt(oneNum[i]) + oneRes;
    }
    for(let i = 0; i < twoNum.length; i++){
      twoRes = parseInt(twoNum[i]) + twoRes;
    }
    //console.log(`${oneRes} ${twoRes}`);
    if(oneRes === twoRes){
      console.log('Поздравляю у вас счастливый билет!');
    }
    else {
      console.log('Йоу, обычный билет');
    }
  }
  else{
    console.log('Число нечетное');
  }
}
happyTicket('12344');
