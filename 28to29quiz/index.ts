
let xnumber = 65;

if(xnumber<2){
console.log(xnumber," The person is a baby.")
}else if(xnumber>=2 && xnumber<4){
console.log(xnumber," The person is a toddler.")
}else if(xnumber>=4 && xnumber<13){
console.log(xnumber,"The person is a kid.")
}else if(xnumber>=13 && xnumber<20){
console.log(xnumber,"The person is a teenager.")
}else if(xnumber>=20 && xnumber<65){
console.log(xnumber,"The person is an adult.")  
}else if(xnumber>=65){
  console.log(xnumber,"The person is an elder.")  


}
let num_array = [ 23, 756, 232, 67, 32, 1, 54, 87, 98, 321, 1, 12, 55, 6, 5,
];
let current: number = 0;
let searchElement: number = 6;
for (let num of num_array) {
   if (num === searchElement) {
      // element found
   }
   console.log(current++);
}