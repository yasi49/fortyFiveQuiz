// function describe_city(city:string, country:string) {
//     return city +" is in " + country;
// }
// console.log(describe_city("Khi", "Pakistan"));
// function describe_city3(city:string, country = "Pakistan") {
//     return city +" is in " + country;
// }
// console.log(describe_city3("Pew"));
// console.log(describe_city3("Mux"));
// console.log(describe_city3("lyp"));
// function describe_city4(city:string, country = "Pakistan") {
//     return city + " is in " + country;
// }
// console.log(describe_city4("Pew"));
// console.log(describe_city4("Mux"));
// console.log(describe_city4("Qabul"));
function describe_city4(a, b) {
    if (b === void 0) { b = "Pakistan"; }
    return [a + b];
}
console.log(describe_city4("rwp" + " is in "));
console.log(describe_city4("lhe" + " is in "));
console.log(describe_city4("Qabul" + " is not in "));
// // 👇️ const result: readonly ["bobbyhadz.com", 100]
// const result = describe_city4();
// const [city, country] = describe_city4();
// // console.log(); // 👉️ "BOBBYHADZ.COM"
// console.log(city, "is in", country); // 100.00
