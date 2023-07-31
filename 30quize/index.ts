var users = ["Admin", "Herry", "Tomm", "Petter", "John"];

var user_name = "Tomm";



for (let i = 0; i < users.length; i++) {
    const element = users[i];
    console.log("Hello", element, "Welcome to you Profile")
   
}

for (let i = 0; i < users.length; i++) {
    // const user_name = users[0];
    if (user_name === "Admin") {
        console.log("Hello", user_name, "would you like to see a status report?");
    } else {
        console.log("Hello", user_name, "thank you for logging in again.");
    }
   
   break;
}
