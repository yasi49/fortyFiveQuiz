var current_users = ["Haris", "Shahid", "Anjum", "Sadat", "Noman"];

var length1 = current_users.length;

var new_users = ["Shehzad", "Adnan", "Misbah", "Sadat"];

var length2 = new_users.length;

for (let i = 0; i < new_users.length; i++) {

    if (current_users[i] === new_users[i]) {
        console.log(new_users[i], "will have to enter new username.");
    }
    
    
}


