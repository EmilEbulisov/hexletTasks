//вводится предлжение и число на количество символов на которое оно обрежется
const mySubstr = (text, long) => {
      let i = 0;
      result = '';
    if (long < text.length){
      
        while(i<long){
        result = `${result}${text[i]}`;
        i++;
        }
      console.log(`${result}` );
    }
    else{
      console.log('noup');
    }
  
}
mySubstr('I dont know this materials', 5);
