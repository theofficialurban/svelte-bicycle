import type BicycleCard from "../../types/BicycleCard";
/**
 * @action cardflip - Handles the animation of the card via Svelte Actions
 * @param node The node of the card
 */
export default function cardflip(node: HTMLElement, { rotation, fade }: BicycleCard["Transition"]["number"]): {
    update({ rotation, fade }: BicycleCard["Transition"]["number"]): void;
};
