import inquirer from "inquirer";
let userInput = await inquirer.prompt({
    name: 'User',
    type: 'number',
    message: 'Please enter the amount of second',
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter valid number";
        }
        else if (input > 60) {
            return ' Second must be 60';
        }
        else {
            return true;
        }
    }
});
class CountdownTimer {
    seconds;
    constructor(seconds) {
        this.seconds = seconds;
    }
    start() {
        console.log(`Countdown started for ${this.seconds} seconds...`);
        for (let i = this.seconds; i >= 0; i--) {
            setTimeout(() => {
                console.log(`${i} seconds remaining...`);
                if (i === 0) {
                    console.log("Countdown finished!");
                }
            }, (this.seconds - i) * 1000);
        }
    }
}
// Example usage
const timer = new CountdownTimer(userInput.User); // 10 seconds countdown
timer.start();
