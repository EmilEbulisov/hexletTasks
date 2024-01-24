/*Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.

Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.

const text = 'I never look back';
// Каждый третий элемент

makeItFunny(text, 3); // 'I NevEr LooK bAck'

Пример работы оператора остатка от деления:

console.log(20 % 3) // => 2
// Так как 3 * 6 = 18*/

function makeItFunny(text, n) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (i % n === n - 1) {
      result += text[i].toUpperCase();
    } else {
      result += text[i];
    }
  }
  return result;
}

const text = 'I never look back';
console.log(makeItFunny(text, 3));
