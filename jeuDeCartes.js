/**
 * @function gameOfCards : this is the final function which execute the whole programs of the game
 * @returns string
 */

function gameOfCards() {
    const prompt = require("prompt-sync")();
    const menu = require("./showMenuFunction");
    const play = require("./playFunction");
    const rules = require("./rules");
    while (true) {
        menu.menu();
        let choise = +prompt("Please enter your choise : ");
        let answer;
        switch (choise) {
            case 1:
                let username = prompt("Enter your username : ");
                do {
                    play.play(username);
                    answer = prompt(`Do you want to play again after that ${username} ? (yes/no) => `);
                } while (answer == "yes")
                break;
            case 2:
                rules.rules();
                break;
            default:
                break;
        }
        if(choise == 3) {
            break;
        }
    }

}
gameOfCards();