const joinNumbersFromRange = (start, finish) => {
   let rezult = '';
   let i = start;

   while(i <= finish){
     rezult =`${rezult}${i}`; 
     i = i + 1;
   }
   console.log(rezult);
} 
joinNumbersFromRange(1,5);
