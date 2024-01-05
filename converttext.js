/*Реализуйте функцию convertText(), которая принимает на вход строку и, если первая буква не заглавная, возвращает перевернутый вариант исходной строки. Если первая буква заглавная, то строка возвращается без изменений. Если на вход передана пустая строка, функция должна вернуть пустую строку.

Примеры вызова:

convertText('Hello'); // 'Hello'
convertText('hello'); // 'olleh'
 
// Не забудьте учесть пустую строку
convertText(''); // ''*/
const convertText = (text) => {
  text = text.toString();
  if (text === ''){
    return ''
  }
  else { return (text[0] === text[0].toUpperCase() ? text : text.split('').reverse().join('')); }
}
convertText('hello');
