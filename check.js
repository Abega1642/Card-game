/**
 * @function check : this function check whether the card choosed by the user wins or not
 * @param {string}} a : this is the card of the user
 * @param {string} b : this is the card of the AI
 * @returns boolean, equality
 */


function check(a, b) { 
    /**
     *  : importation of all modules that this check (a, b) function needs
     */
    const plant = require("./cardsFunctions");
    const fire = require("./cardsFunctions");
    const water = require("./cardsFunctions");
    /**
     *  : check whether the card that the user name win or not
     */
    if (((a == fire.fire()) && (b == plant.plant())) || ((a == water.water()) && (b == fire.fire())) || (a == plant.plant()) && (b == water.water())) {
        return true;
    } else  if (a == b) {
        return "equality";
    } else {
        return false;
    }
}
exports.check = check;