// 16
var newGuests = ["Sasha", "Jonson", "Maik"];
for (var i = 0; i < newGuests.length; i++) {
    console.log("Hey guys, ".concat(newGuests[i], ", we have a big dinner tonight."));
}
newGuests.unshift("Johnson");
newGuests.push("Roy");
var removed = newGuests.splice(2, 0, "Dani");
console.log(newGuests);
for (var i = 0; i < newGuests.length; i++) {
    console.log("Dear our guest ".concat(newGuests[i], ", please come to us for dinner."));
}
