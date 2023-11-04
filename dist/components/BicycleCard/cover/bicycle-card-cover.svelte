<script>import { SvelteComponent } from "svelte";
export class BicycleCardCover extends SvelteComponent {
}
export let store;
const className = "";
export { className as class };
</script>

<img
	class="{`rounded-xl object-contain ${className}`}"
	src="{$store._cover}"
	alt="{`Card${$store._id}`}"
/>
