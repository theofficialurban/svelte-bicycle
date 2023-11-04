import { uniqueId, random, isUndefined, sample, shuffle } from "lodash-es";
import NotPictured from "../BicycleCard/assets/not-pictured.png";
import Cover from "../BicycleCard/assets/card-cover.png";
import { get, writable } from "svelte/store";
import BicycleCardObject from "../BicycleCard";
/**
 * @class BicycleCardDeck
 * A custom store that holds amount n of individual cards
 * @see BicycleCardData
 */
export default class BicycleCardDeck {
    /**
     * @public pairs
     * Logs all pairs of cards if generated
     */
    pairs = new Set();
    /**
     * @private #_deck
     * The store which is an array of single cards
     */
    #_deck = writable([]);
    constructor() { }
    /**
     * @private @method #_newId()
     * @returns A unique new card ID
     */
    #_newId() {
        return parseInt(uniqueId());
    }
    /**
     * @private @method #_newVal()
     * Generates a new card value that is unique.
     * @returns A random number between 0-100
     */
    #_newVal() {
        const potentialNewVal = random(0, 100, false);
        return potentialNewVal;
    }
    /**
     * @public @method reset()
     * Resets the deck, clears the pairs and resets the store.
     */
    reset = () => {
        this.#_deck.set([]);
        this.pairs.clear();
    };
    /**
     * @public @method addCard()
     * Adds a single card to the deck.
     * @param card The single card to add
     * @returns void
     */
    addCard = (card) => {
        return this.#_deck.update((d) => {
            return [...d, card];
        });
    };
    /**
     * @public @method getDeck()
     * Returns the store.
     * @returns The store / deck
     */
    getDeck = () => {
        return this.#_deck;
    };
    /**
     * @public @method getCardById()
     * @param cardId the id of the card to find
     * @returns The card or null
     */
    getCardById = (cardId) => {
        const deck = get(this.#_deck);
        const result = deck.find((c) => c.id == cardId);
        if (isUndefined(result))
            return null;
        return result;
    };
    /**
     * @public @method getDeckCounts()
     * Gets the various counts of the deck, faceup / facedown / total and a few
     * useful booleans.
     * @returns {faceup: number, facedown: number, total: number, allFaceUp: boolean, allFaceDown: boolean}
     */
    getDeckCounts = () => {
        let faceup = 0;
        let facedown = 0;
        let total = 0;
        const deck = get(this.#_deck);
        deck.forEach((c) => {
            if (c.status === "FACEDOWN")
                facedown += 1;
            if (c.status === "FACEUP")
                faceup += 1;
            total += 1;
        });
        return {
            faceup,
            facedown,
            total,
            allFaceUp: faceup === total ? true : false,
            allFaceDown: facedown === total ? true : false,
        };
    };
    /**
     * @public @method shuffle()
     * Shuffles the cards in the deck.
     * @param repeat The # of times to shuffle the deck
     * @returns
     */
    shuffle = (repeat = 1) => {
        return this.setStatus("FACEDOWN").then(() => {
            const _shuffle = () => {
                this.#_deck.update((d) => {
                    return shuffle(d);
                });
            };
            for (let index = 0; index < repeat; index++) {
                setTimeout(_shuffle, 250 * index);
            }
        });
    };
    /**
     * @public @method setStatus()
     * @param status The status to set the cards
     * @param args The IDs of the cards to set the status of
     * @returns Promise<void> That resolves 1.5s after the cards update
     */
    setStatus = (status, ...args) => {
        if (status === "FACEDOWN" && this.getDeckCounts().allFaceDown)
            return Promise.resolve();
        if (status === "FACEUP" && this.getDeckCounts().allFaceUp)
            return Promise.resolve();
        return new Promise((resolve) => {
            this.#_deck.update((d) => {
                // If no args set all card status.
                if (!args || args.length === 0) {
                    d.forEach((c) => {
                        c.setStatus(status);
                    });
                    setTimeout(() => resolve(), 1500);
                    return d;
                }
                else {
                    // If given Ids, for every id, find card
                    // if found, set status.
                    args.forEach((id) => {
                        const card = this.getCardById(id);
                        if (card) {
                            card.setStatus(status);
                        }
                    });
                    setTimeout(() => resolve(), 1500);
                    return d;
                }
            });
        });
    };
    /**
     * @public @method createCard()
     * Creates a single card in the deck.
     * @param options Options for the card
     */
    createCard = (options) => {
        let coverImg = Cover;
        let faceImgs = [NotPictured];
        if (!isUndefined(options)) {
            const { faceImages, cover } = options;
            if (!isUndefined(faceImages))
                faceImgs = faceImages;
            if (!isUndefined(cover))
                coverImg = cover;
        }
        const _id = this.#_newId();
        const _value = this.#_newVal();
        const state = {
            _id,
            _value,
            _status: "FACEDOWN",
            _image: sample(faceImgs) ?? NotPictured,
            _cover: coverImg,
        };
        const newCard = new BicycleCardObject(this, state);
        if (!isUndefined(options) && !isUndefined(options.pair)) {
            if (options.pair === true) {
                newCard.makePair();
            }
        }
    };
    /**
     * @public @method createCards()
     * Creates multiple cards in the deck.
     * @param count The # of cards to make
     * @param options Options for the cards
     */
    createCards = (count = 1, options) => {
        for (let index = 0; index < count; index++) {
            this.createCard(options);
        }
    };
}
