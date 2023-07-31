
// 17



let newGuests = [ 'Johnson', 'Sasha', 'Dani', 'Jonson', 'Maik', 'Roy' ];

for (let i = 0; i < newGuests.length; i++) {
    const element = newGuests[i];

    console.log(`Hay ${element}, with regret we say that we can only invite two of you guests.`)
    
}


console.log(`Hay ${newGuests.pop()}, we are sorry, we can't invite you for dinner today.`);
console.log(`Hay ${newGuests.pop()}, we are sorry, we can't invite you for dinner today.`);
console.log(`Hay ${newGuests.pop()}, we are sorry, we can't invite you for dinner today.`);
console.log(`Hay ${newGuests.pop()}, we are sorry, we can't invite you for dinner today.`);

console.log(newGuests);

for (let i = 0; i < newGuests.length; i++) {
    const element = newGuests[i];
    console.log(`Dear ${element}, you are still in our guests list, please come.`)
}

console.log(newGuests);

newGuests.pop();
console.log(newGuests);
newGuests.pop();

console.log(newGuests);