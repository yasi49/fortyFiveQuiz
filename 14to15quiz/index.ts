// 14,15

var Guests = ["Sasha","Jonson","Dennie"];  


console.log("After adding 1: " + Guests );  


for (let i = 0; i < Guests.length; i++) {
  console.log(`hi ${Guests[i]}, please come to us for dinner today. `);
  
}




var newGuests = ["Sasha","Jonson","Dennie"];  

var removed = newGuests.splice(2, 1, "Maik"); 

console.log(`Hay guys,${newGuests}, we introducing new Guest instead of Dennie.`);

console.log(`Hay guys,${Guests[2]} can't make dinner tonight.`);

for (let i = 0; i < newGuests.length; i++) {
  const element = newGuests[i];
  console.log(`Hey guy, ${element}, you are still in our tonight's list.`);
  
}
