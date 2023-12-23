
/**
 * @function results : this function generates the victory messages afer the end of all of the three rounds of the game
 * @param {number} score1 : this is the score of the user
 * @param number score2 : this is the score of the boot
 * @param {string} username 
 */
function results(score1, score2, username) {
    if (score1 > score2) {
        console.log(`\n------  Congratulations ${username}, You win the game!  -------\nBig applause for you ${username}`);
    } else if (score2 > score1) {
        console.log(`\n------  The bot won this game -------`)
    } else {
        console.log(`\n------  Equality between ${username} and the bot  --------`)
    }
}
exports.results = results;