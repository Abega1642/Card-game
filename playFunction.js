
/**
 * @function play : this function play(username) execute the first option of the game (which is playing the game
 * @param {string} username : this is the username of the user for all along the game
 * @returns string
 */

function play(username) {

    const plant = require("./cardsFunctions");
    const fire = require("./cardsFunctions");
    const water = require("./cardsFunctions");
    const randomCardByAI = require("./randomCardByAI");
    const prompt = require("prompt-sync")();
    const processOFtheGame = require("./processOfTheGame");
    const score = require("./scores");
    const results = require("./results");

    let i = 1;
    let cardChoosen;
    let yourCard;
    let scores = [0, 0];

    while (i < 4) {
        cardChoosen = prompt(`Please, enter the name of the card you choose ${username} (fire/water/plant) :`);
        if ((cardChoosen != "fire") || (cardChoosen != "water") || (cardChoosen != "plant")) {
            console.log("___________Please, enter the correct name of the card as it is written : 'fire' or 'water' or 'plant'_____________");
        }
        if (cardChoosen == "fire") {
            yourCard = fire.fire();
            const aiCard = randomCardByAI.randomCardByAI();
            processOFtheGame.processOFtheGame(yourCard, aiCard, i);
            scores = score.score(scores, yourCard, aiCard);
        }
        if (cardChoosen == "water") {
            yourCard = water.water();
            const aiCard = randomCardByAI.randomCardByAI();
            processOFtheGame.processOFtheGame(yourCard, aiCard, i);
            scores = score.score(scores, yourCard, aiCard);
        }
        if (cardChoosen == "plant") {
            yourCard = plant.plant();
            const aiCard = randomCardByAI.randomCardByAI();
            processOFtheGame.processOFtheGame(yourCard, aiCard, i);
            scores = score.score(scores, yourCard, aiCard);
        }
        i++;
    }

    console.log(`\n_____________________\nFinal score :\n---- ${username} : ${scores[0]}\n----I.A : ${scores[1]}`);
    results.results(scores[0], scores[1], username);
}
exports.play = play;