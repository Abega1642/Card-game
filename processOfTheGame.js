
/**
 * @function processOFtheGame : this function shows what the cards of the user and the boot are, and show if during each round whether the user wins or not
 * @param {string} yourCard 
 * @param {string} aiCard 
 * @param {number} round 
 * @returns string
 */
function processOFtheGame(yourCard, aiCard, round) {
    /**
     *  : importation of the module that this function needs in order to work correctly
     */
    const check = require("./check");
    /**
     *  : this is the main activities of the function
     */
    console.log("Your card :");
    console.log(yourCard);
    console.log("   \n\t______V_S_____\n");
    console.log("IA card :");
    console.log(aiCard);
    if (check.check(yourCard, aiCard) == true) {
        console.log(`You won this round ${round}, congratulations!`);

    } else if (check.check(yourCard, aiCard) == "equality"){
        console.log(`Equality for this round ${round}!`);
    } else {
        console.log(`The AI won this round ${round}.`);
    }
}
exports.processOFtheGame = processOFtheGame;