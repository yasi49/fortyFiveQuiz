// 17
var newGuests = ['Johnson', 'Sasha', 'Dani', 'Jonson', 'Maik', 'Roy'];
for (var i = 0; i < newGuests.length; i++) {
    var element = newGuests[i];
    console.log("Hay ".concat(element, ", with regret we say that we can only invite two of you guests."));
}
console.log("Hay ".concat(newGuests.pop(), ", we are sorry, we can't invite you for dinner today."));
console.log("Hay ".concat(newGuests.pop(), ", we are sorry, we can't invite you for dinner today."));
console.log("Hay ".concat(newGuests.pop(), ", we are sorry, we can't invite you for dinner today."));
console.log("Hay ".concat(newGuests.pop(), ", we are sorry, we can't invite you for dinner today."));
console.log(newGuests);
for (var i = 0; i < newGuests.length; i++) {
    var element = newGuests[i];
    console.log("Dear ".concat(element, ", you are still in our guests list, please come."));
}
console.log(newGuests);
newGuests.pop();
console.log(newGuests);
newGuests.pop();
console.log(newGuests);
