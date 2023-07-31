function infoCar(manufecturer_car: string, model_car: number, color?:string, name?:string, ...theArgs:any): Record<string, any> {
  const car: Record<string, any> =
   {
    manufecturer_car: manufecturer_car,
    model_car: model_car
  };

  if (color) {
    car.color = color;
  }
  if (name) {
    car.name = name;
  }
  if (theArgs) {
    car.theArgs = theArgs;
  }
 

  return car;
  
}
var infoCar1 = infoCar("japan", 1999, "brown", "mehran", "auto", "print");
// var infoCar2 = infoCar("japan", 1999, "automatic");
// var infoCar3 = infoCar("japan", 1999, "automatic", "red");


console.log(infoCar1);

// console.log(infoCar2);
// console.log(infoCar3);

























