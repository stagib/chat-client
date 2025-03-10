<script>
	import Tooltip from './Tooltip.svelte';

	let { color, name } = $props();
</script>

<Tooltip position="left-1/2 -translate-x-1/2 bottom-full" message={name}>
	<button class={`cursor-pointer rounded-sm  p-4 ${color}`} aria-label="color-button"></button>
</Tooltip>
