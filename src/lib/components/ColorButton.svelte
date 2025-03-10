<script lang="ts">
	import Tooltip from './Tooltip.svelte';

	let { className, name, onSelect, color } = $props();

	const selectColor = (color: String) => {
		onSelect?.(color);
	};
</script>

<Tooltip position="left-1/2 -translate-x-1/2 bottom-full" message={name}>
	<button
		class={`cursor-pointer rounded-sm  p-4 ${className}`}
		aria-label="color-button"
		onclick={() => selectColor(color)}
	></button>
</Tooltip>
