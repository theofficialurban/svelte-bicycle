import type BicycleCard from "../types/BicycleCard";
import BicycleCardObject from "../BicycleCard";
/**
 * @class BicycleCardDeck
 * A custom store that holds amount n of individual cards
 * @see BicycleCardData
 */
export default class BicycleCardDeck {
    #private;
    /**
     * @public pairs
     * Logs all pairs of cards if generated
     */
    pairs: Set<[number, number]>;
    constructor();
    /**
     * @public @method reset()
     * Resets the deck, clears the pairs and resets the store.
     */
    reset: () => void;
    /**
     * @public @method addCard()
     * Adds a single card to the deck.
     * @param card The single card to add
     * @returns void
     */
    addCard: (card: BicycleCardObject) => void;
    /**
     * @public @method getDeck()
     * Returns the store.
     * @returns The store / deck
     */
    getDeck: () => BicycleCard["DeckStore"];
    /**
     * @public @method getCardById()
     * @param cardId the id of the card to find
     * @returns The card or null
     */
    getCardById: (cardId: number) => BicycleCardObject | null;
    /**
     * @public @method getDeckCounts()
     * Gets the various counts of the deck, faceup / facedown / total and a few
     * useful booleans.
     * @returns {faceup: number, facedown: number, total: number, allFaceUp: boolean, allFaceDown: boolean}
     */
    getDeckCounts: () => {
        faceup: number;
        facedown: number;
        total: number;
        allFaceUp: boolean;
        allFaceDown: boolean;
    };
    /**
     * @public @method shuffle()
     * Shuffles the cards in the deck.
     * @param repeat The # of times to shuffle the deck
     * @returns
     */
    shuffle: (repeat?: number) => Promise<void>;
    /**
     * @public @method setStatus()
     * @param status The status to set the cards
     * @param args The IDs of the cards to set the status of
     * @returns Promise<void> That resolves 1.5s after the cards update
     */
    setStatus: (status: BicycleCard["Status"], ...args: number[]) => Promise<void>;
    /**
     * @public @method createCard()
     * Creates a single card in the deck.
     * @param options Options for the card
     */
    createCard: (options?: BicycleCard["Options"]) => void;
    /**
     * @public @method createCards()
     * Creates multiple cards in the deck.
     * @param count The # of cards to make
     * @param options Options for the cards
     */
    createCards: (count?: number, options?: BicycleCard["Options"]) => void;
}
