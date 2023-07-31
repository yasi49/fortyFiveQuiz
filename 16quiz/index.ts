// 16


var newGuests = ["Sasha","Jonson","Maik"];  

for (let i = 0; i < newGuests.length; i++) {
  
  console.log(`Hey guys, ${newGuests[i]}, we have a big dinner tonight.`)
  
}

newGuests.unshift("Johnson");

newGuests.push("Roy");

var removed = newGuests.splice(2, 0, "Dani"); 

console.log(newGuests);

for (let i = 0; i < newGuests.length; i++) {
  console.log(`Dear our guest ${newGuests[i]}, please come to us for dinner.`)
  
}