const isHappyNumbers = (number) => {
  let a = number;
  for(let i = 0; i < 11; i++){
    const arr = number.toString().split('').map(Number);
    const squaredArr = arr.map(element => element * element);
    number = squaredArr.reduce((total, current) => total + current, 0);
  }
  if(number === 1){
    console.log(`Число ${a} счастливое!`);
  }
  else{
    console.log(`Число ${a} не счастливое!`);
    
  }
}
isHappyNumbers(7);
