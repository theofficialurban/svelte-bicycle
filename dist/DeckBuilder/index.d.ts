import BicycleCardDeck from "../Deck";
export default class DeckBuilder {
    static newDeck: () => BicycleCardDeck;
    static addCards: (deck: BicycleCardDeck, n?: number, pairs?: boolean) => void;
}
