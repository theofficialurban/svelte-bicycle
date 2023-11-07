<script>import { tweened } from "svelte/motion";
import cardflip from "./card-flip";
import PlayingCardFace from "./face/bicycle-card-face.svelte";
import PlayingCardCover from "./cover/bicycle-card-cover.svelte";
import { SvelteComponent, createEventDispatcher } from "svelte";
export class BicycleCardComponent extends SvelteComponent {
}
export let store;
const className = "";
export { className as class };
const dispatch = createEventDispatcher();
const transitions = {
  rotation: tweened(0, { duration: 1e3 }),
  fade: tweened(-1, { duration: 1e3 })
};
const { rotation, fade } = transitions;
$:
  if ($store._status === "FACEDOWN" && dispatch("facedown", $store, { cancelable: true })) {
    rotation.set(0);
    fade.set(-1);
  } else if ($store._status === "FACEUP" && dispatch("faceup", $store, { cancelable: true })) {
    rotation.set(360);
    fade.set(1);
  }
</script>

<div
	id="_card"
	role="button"
	on:click
	on:keypress
	tabindex="{$store._id}"
	use:cardflip="{{ rotation: $rotation, fade: $fade }}"
	class="{`w-[250px] h-[350px] relative text-black playing-card p-3 ${className}`}"
>
	{#if $rotation > 180}
		<PlayingCardFace store="{store}" />
	{:else if $rotation <= 180}
		<PlayingCardCover store="{store}" />
	{/if}
</div>

<style>
	.playing-card {
		font-family: sans-serif;
		width: 250px;
		height: 350px;
	}
</style>
