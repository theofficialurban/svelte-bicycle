import type BicycleCard from "../types/BicycleCard";
import type BicycleCardDeck from "../Deck";
/**
 * @class BicycleCardData
 * Holds store and data for a single playing card.
 */
export default class BicycleCardObject {
    #private;
    /**
     * @public store
     * The card data store or state
     */
    store: BicycleCard["Store"];
    constructor(_deck: BicycleCardDeck, data: BicycleCard["State"]);
    /**
     * Gets the ID
     */
    get id(): number;
    /**
     * Gets the value
     */
    get value(): number;
    /**
     * Gets the status
     */
    get status(): "FACEDOWN" | "FACEUP";
    /**
     * @public @method flip()
     * Flips the card
     * @returns void
     */
    flip: () => void;
    /**
     * @public @method setStatus()
     * Sets the card status
     * @param _status The status to set the card
     * @returns Promise<void>
     */
    setStatus: (_status: BicycleCard["Status"]) => Promise<void>;
    /**
     * @public @method remove()
     * Public facing method to remove the card.
     */
    remove: () => void;
    /**
     * @public @method makePair()
     * Creates a pair for the card.
     * Pair has same value but unique ID
     */
    makePair: () => void;
}
