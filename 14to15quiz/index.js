// 14,15
var Guests = ["Sasha", "Jonson", "Dennie"];
console.log("After adding 1: " + Guests);
for (var i = 0; i < Guests.length; i++) {
    console.log("hi ".concat(Guests[i], ", please come to us for dinner today. "));
}
var newGuests = ["Sasha", "Jonson", "Dennie"];
var removed = newGuests.splice(2, 1, "Maik");
console.log("Hay guys,".concat(newGuests, ", we introducing new Guest instead of Dennie."));
console.log("Hay guys,".concat(Guests[2], " can't make dinner tonight."));
for (var i = 0; i < newGuests.length; i++) {
    var element = newGuests[i];
    console.log("Hey guy, ".concat(element, ", you are still in our tonight's list."));
}
