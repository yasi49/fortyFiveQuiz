
const promptSync = require("prompt-sync")();

function make_sandwich(item:any){
    item = first_item;

    `Make a sandwich with the given items.`
    console.log("\nI'll make you a great sandwich:");

        console.log("  ...adding " + item + " to your sandwich.")
    console.log("Your sandwich is ready")
}


let first_item = promptSync("Enter first item: ");


make_sandwich(first_item);