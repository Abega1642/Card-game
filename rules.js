function rules() {
    console.log("\n----------CARDS_GAME----------\n");
    console.log("   - The game contains three  (03) rounds in which you have to win against a robot.");
    console.log("   - During every round, you have to choose betwen three types of cards : ");
    console.log("                                                                          - fire");
    console.log("                                                                          - water");
    console.log("                                                                          - plant\n");
    console.log("Remeber that 'fire' wins against 'plant', 'plant' wins against 'water' and 'water' wins against 'fire'");
    console.log("Warning ! : You only have three chances. If you type an other name of card apart from those three cards given, there will be no confrontation for that precise round but that will be count as an equality");
    console.log("An equality means both of you don't receive any points");
    console.log("\n------   Now, enjoy the game    ------\n")
}
exports.rules = rules;