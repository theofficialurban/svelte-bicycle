# Svelte Bicycle Cards 🃏

## Basic Example

**This is a work in progress, and my first package, thank you**

**I'm working on a card game project if you're interested in following along, I'm on a journey learning as much as possible. The card game project docs are here and the game should be up soon!**

[![Static Badge](https://img.shields.io/badge/🃏_-Card_Game_Project-blue)](https://matching.officialurban.xyz)

![Static Badge](https://img.shields.io/badge/theofficialurban-gray?logo=discord)

```html
<script lang="ts">
	import * as Bicycle from "@theofficialurban/svelte-bicycle";
	import { SvelteComponent } from "svelte";
	export class App extends SvelteComponent<{}, {}, {}> {}
	const deck = Bicycle.DeckBuilder.newDeck();
	// or
	// const deck = new Bicycle.BicycleCardDeck();

	deck.createCards(2, { pair: true });
	const store = deck.getDeck();
</script>

<div>
	{#each $store as { flip, store, id } (id)}
	<Bicycle.Component
		store="{store}"
		on:click="{flip}"
	/>
	{/each}
</div>
```
