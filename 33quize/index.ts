var numbers = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"];

function EnterNumber(entNumber:number) {
    

for (let i = 0; i < entNumber; i++) {
     if (entNumber === 1) {
        console.log(numbers[0]);
     
    }else if(entNumber === 2){
        console.log(numbers[1]);
        break;
    }else if(entNumber === 3){
        console.log(numbers[2]);
        break;
    }else if(entNumber === 4){
        console.log(numbers[3]);
        break;
    }else if(entNumber === 5){
        console.log(numbers[4]);
        break;
    }else if(entNumber === 6){
        console.log(numbers[5]);
        break;
    }else if(entNumber === 7){
        console.log(numbers[6]);
        break;
    }else if(entNumber === 8){
        console.log(numbers[7]);
        break;
    }else if(entNumber === 9){
        console.log(numbers[8]);
        break;
    }else{
        console.log("Invalid number");
        break;
    }
    
    
}
}

EnterNumber(12);

