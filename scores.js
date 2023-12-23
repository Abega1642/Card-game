/**
 * @function score : this function generates the scores
 * @param {number []} scoreTab 
 * @param {string} yourCard 
 * @param {string} aiCard 
 * @returns number []
 */

function score(scoreTab, yourCard, aiCard) {
    /**
     * : importation of the module that this function needs in order to work correctly
     */
    const check = require("./check");
    /**
     * : this is the main activities of this function
     */
    if (check.check(yourCard, aiCard) == true) {
        scoreTab[0]++;
    } 
    if (check.check(yourCard, aiCard) == false){
        scoreTab[1]++;
    }
    return scoreTab;
}
exports.score = score;