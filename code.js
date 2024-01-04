const getHiddenCard = (cardNum, starNum = 4) => {
  const text = '*';
  console.log(`${text.repeat(starNum)}${cardNum.toString().slice(12, 16)}`);
}
getHiddenCard(1234567891234567);
