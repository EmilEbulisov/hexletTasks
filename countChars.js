//Функция countChars() из теории считает, сколько раз входит буква в предложение и при этом учитывает регистр букв. То есть A и a с её точки зрения разные символы. Реализуйте вариант этой же функции, так чтобы регистр букв был не важен:
const countChars = (text, liter) =>{
  text = text.toUpperCase();
  liter = liter.toUpperCase();
  let count = 0;
  let i = 0; 
  while(i<=text.length){
    if(text[i] === liter)
    {
      count++;
    }
    i++;
  }
  console.log(count);
}
countChars("Ugle dude buy new bike", 'u');
