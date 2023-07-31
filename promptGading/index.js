// Grading system using prompt-sync, functions and if-else-if statements
function calculategrade() {
    var promptsync = require("prompt-sync")();
    var marks = promptsync("Enter Your Marks: ");
    if (marks >= 90 && marks <= 100) {
        return "Grade A";
    }
    else if (marks >= 80 && marks < 90) {
        return "Grade B";
    }
    else if (marks >= 70 && marks < 80) {
        return "Grade C";
    }
    else if (marks >= 60 && marks < 70) {
        return "Grade D";
    }
    else if (marks >= 50 && marks < 60) {
        return "Grade E";
    }
    else if (marks >= 0 && marks < 50) {
        return "Fail";
    }
    else {
        return "Invalid";
    }
}
var grade = calculategrade();
console.log("Your Grade is: ".concat(grade));
