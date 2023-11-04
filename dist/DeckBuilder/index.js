import BicycleCardDeck from "../Deck";
export default class DeckBuilder {
    static newDeck = () => {
        const newDeck = new BicycleCardDeck();
        return newDeck;
    };
    static addCards = (deck, n = 1, pairs = false) => {
        deck.createCards(n, { pair: pairs });
    };
}
