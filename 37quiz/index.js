function make_shirt(text, size) {
    if (text === void 0) { text = "I love Typescript"; }
    if (size === void 0) { size = 36; }
    return text + size;
}
console.log(make_shirt());
function make_shirtsmall(text, size) {
    if (text === void 0) { text = "I love Javascript"; }
    if (size === void 0) { size = 18; }
    return text + size;
}
console.log(make_shirtsmall());
function make_shirtmedium(text, size) {
    if (text === void 0) { text = "I love Python"; }
    if (size === void 0) { size = 24; }
    return text + size;
}
console.log(make_shirtmedium());
