/*Реализуйте функцию normalizeUrl(), которая выполняет так называемую нормализацию данных. 
Она принимает адрес сайта и возвращает его с https:// в начале.

Функция принимает адреса в виде АДРЕС или https://АДРЕС, но всегда возвращает адрес в виде https://АДРЕС*/
const normalizeUrl = (text) => {
  text = text.toString();
  if (text.startsWith("https://")){
     console.log(text);
  }
  else {
    console.log( `https://${text}`);
  }
  
}
normalizeUrl('miliykotick.com');
