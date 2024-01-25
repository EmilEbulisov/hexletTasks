let a = 0;
let a1 = 1;
let b = 0;
for(let i = 0; i < 10; i++){
  b = a1;
  a1 = a + a1;
  a = b;
  console.log(a1);
}
