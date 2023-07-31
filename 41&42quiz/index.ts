var magician = ["Joe", "Tony", "Johnson", "Broadd"];

function show_magicians() {
    console.log(magician);
}
show_magicians();



// function make_great() {
//     for (let i = 0; i < magician.length; i++) {
//         console.log(`the great ${magician[i]}`)
    
        
//     }
// }
// make_great();




function make_great1() {
    magician.splice(0,1, 'The great Magician Tony')
    magician.splice(1,2, 'The great Magician Joe')
    magician.splice(2,3, 'The great Magician Johnson')
    magician.splice(3,4, 'The great Magician Broadd')
    console.log(magician)
}
make_great1();