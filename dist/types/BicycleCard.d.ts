import type { Tweened } from "svelte/motion";
import type { Writable } from "svelte/store";
import type BicycleCardComponent from "../components/BicycleCard/bicycle-card.svelte";
import type BicycleCardDeck from "../Deck";
import type BicycleCardObject from "../BicycleCard";
/**
 * @type Card
 * @param _id - The unique ID (key) of the card
 * @param _status - The status (FACEUP | FACEDOWN) of the card
 * @param _value - The card value
 * @param _cover - The card cover or design (back)
 * @param _image - The card image (face)
 */
type CardState = {
    _id: number;
    _image: string;
    _value: number;
    _status: CardStatus;
    _cover?: string;
};
/**
 * @type Status
 */
type CardStatus = "FACEDOWN" | "FACEUP";
type CardLike = Partial<CardState> & {
    _id: number;
    _value: number;
};
export default interface BicycleCard {
    /**
     * @instance BicycleCardDeck
     */
    Deck: BicycleCardDeck;
    /**
     * Store inside of deck
     */
    DeckStore: Writable<BicycleCardObject[]>;
    /**
     * Single Card Object
     */
    Object: BicycleCardObject;
    /**
     * Single card State
     */
    State: CardState;
    /**
     * Svelte Component
     * @see {BicycleCard}
     */
    Component: BicycleCardComponent;
    /**
     * Single card store
     */
    Store: Writable<CardState>;
    /**
     * Data that includes basic information about a card
     */
    CardLike: CardLike;
    /**
     * FACEUP | FACEDOWN
     */
    Status: CardStatus;
    /**
     * @prop Transition - The flip transition types
     */
    Transition: {
        /**
         * @type Transition.number - The numerical version of our Tweened store
         */
        number: {
            rotation: number;
            fade: number;
        };
        /**
         * @type Transition.store - The regular Tweened<number> store
         */
        store: {
            rotation: Tweened<number>;
            fade: Tweened<number>;
        };
    };
    Events: {
        faceup: BicycleCard["CardLike"];
        facedown: BicycleCard["CardLike"];
        complete: BicycleCard["CardLike"];
    };
    Options: {
        faceImages?: string[];
        cover?: string;
        pair?: boolean;
        count?: number;
    };
}
export {};
