const mySubstr = (text, long) => {
      let i = 0;
      result = '';
      
      while(i<long){
        result = `${result}${text[i]}`;
        
        i++;
      }
      console.log(`${result}` );
}
mySubstr('I dont know this materials', 6);
