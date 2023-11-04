import Cover from "./assets/card-cover.png";
import { get, writable } from "svelte/store";
import { uniqueId, remove } from "lodash-es";
/**
 * @class BicycleCardData
 * Holds store and data for a single playing card.
 */
export default class BicycleCardObject {
    /**
     * @readonly @private #_id
     * The card ID
     */
    #_id;
    /**
     * @readonly @private #_value
     * The card value
     */
    #_value;
    /**
     * @readonly @private #_image
     * The face image of the card
     */
    #_image;
    /**
     * @private #_in_play
     * The slot of play the card is in, null if none.
     */
    #_in_play = null;
    /**
     * @private #_deck
     * The deck this card belongs to
     * @instance BicycleCardDeck
     */
    #_deck;
    /**
     * @public store
     * The card data store or state
     */
    store;
    // This class does not create the cards, the data is created by the deck.
    constructor(_deck, data) {
        this.#_deck = _deck;
        // Grab the passed in data and set it.
        const { _id, _value, _image } = data;
        this.#_id = _id;
        this.#_value = _value;
        this.#_image = _image;
        // Create the store with the data.
        this.store = writable({ ...data });
        // Then add the card to the deck.
        this.#_deck.addCard(this);
        return this;
    }
    /**
     * Gets the ID
     */
    get id() {
        return this.#_id;
    }
    /**
     * Gets the value
     */
    get value() {
        return this.#_value;
    }
    /**
     * Gets the status
     */
    get status() {
        const store = get(this.store);
        return store._status;
    }
    /**
     * @public @method flip()
     * Flips the card
     * @returns void
     */
    flip = () => {
        return this.store.update((c) => {
            const current = c._status;
            switch (current) {
                case "FACEDOWN": {
                    return { ...c, _status: "FACEUP" };
                }
                case "FACEUP": {
                    return { ...c, _status: "FACEDOWN" };
                }
            }
        });
    };
    /**
     * @public @method setStatus()
     * Sets the card status
     * @param _status The status to set the card
     * @returns Promise<void>
     */
    setStatus = (_status) => {
        return new Promise((resolve) => {
            this.store.update((s) => {
                return { ...s, _status };
            });
            resolve();
        });
    };
    /**
     * @private @method #_removeCard()
     * Removes the card completely from the deck.
     */
    #_removeCard = () => {
        this.#_deck.getDeck().update((d) => {
            remove(d, (c) => {
                return c === this;
            });
            return d;
        });
    };
    /**
     * @public @method remove()
     * Public facing method to remove the card.
     */
    remove = () => {
        this.#_removeCard();
    };
    /**
     * @public @method makePair()
     * Creates a pair for the card.
     * Pair has same value but unique ID
     */
    makePair = () => {
        const pairId = parseInt(uniqueId());
        new BicycleCardObject(this.#_deck, {
            _id: pairId,
            _value: this.#_value,
            _status: "FACEDOWN",
            _image: this.#_image,
            _cover: Cover,
        });
        this.#_deck.pairs.add([this.#_id, pairId]);
    };
}
// export default class BicycleCardData {
// 	readonly #_id: number;
// 	readonly #_value: number;
// 	readonly #_image: string;
// 	#_deck: BicycleCard["Deck"];
// 	store: BicycleCard["Store"];
// 	constructor(_deck: BicycleCard["Deck"], data: BicycleCard["State"]) {
// 		this.#_deck = _deck;
// 		const { _id, _value, _image } = data;
// 		this.#_id = _id;
// 		this.#_value = _value;
// 		this.#_image = _image;
// 		this.store = writable<BicycleCard["State"]>({ ...data });
// 		this.#_deck.set(this.#_id, this);
// 		return this;
// 	}
// 	get id() {
// 		return this.#_id;
// 	}
// 	get value() {
// 		return this.#_value;
// 	}
// 	flip() {
// 		return this.store.update((c) => {
// 			const current = c._status;
// 			switch (current) {
// 				case "FACEDOWN": {
// 					return { ...c, _status: "FACEUP" };
// 				}
// 				case "FACEUP": {
// 					return { ...c, _status: "FACEDOWN" };
// 				}
// 			}
// 		});
// 	}
// 	makePair() {
// 		const pairId = parseInt(uniqueId());
// 		new BicycleCardData(this.#_deck, {
// 			_id: pairId,
// 			_value: this.#_value,
// 			_status: "FACEDOWN",
// 			_image: this.#_image,
// 			_cover: Cover,
// 		});
// 		this.#_deck.pairs.add([this.#_id, pairId]);
// 	}
// }
