var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

function fight() {
    // Alerts players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    if (promptFight === "fight" || promptFight === "FIGHT") {
        //subtract playerAttack from enemyHealth
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know it worked
        console.log(
            playerName + " attacked "+ enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // Check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        // subtract enemyAttack from playerHealth
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know it worked
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // Confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // If yes, leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // Subtract money from player for skipping
            playerMoney = playerMoney - 2;
        }
        // if no, ask question again by running fight() again
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!")
    }

    
}

fight();
