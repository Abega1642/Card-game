
/**
 * @function randomCardByAI : this function generates the card of the boot (the AI) during each round of the game
 * @returns string
 */

function randomCardByAI() {
    /**
     * : importation of all modules that this function needs in order to work correctly
     */
    const plant = require("./cardsFunctions");
    const fire = require("./cardsFunctions");
    const water = require("./cardsFunctions");
    /**
     * : the main activities of this function
     */
    const tableOfCards = [fire.fire(), water.water(), plant.plant()];
    return tableOfCards[Math.floor(Math.random() * tableOfCards.length)];
}
exports.randomCardByAI = randomCardByAI;