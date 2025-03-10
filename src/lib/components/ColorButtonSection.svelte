<script lang="ts">
	import ColorButton from './ColorButton.svelte';

	let { onColorChange } = $props();
	let selectedColor = $state('');

	const handleSelection = (color: string) => {
		onColorChange?.(color);
	};
</script>

<div class="grid grid-cols-7 gap-2">
	<ColorButton
		onSelect={handleSelection}
		name="Red"
		className="bg-red-400 text-red-400"
		color="red-400"
	/>
	<ColorButton
		onSelect={handleSelection}
		name="Orange"
		className="bg-orange-400 text-orange-400"
		color="orange-400"
	/>
	<ColorButton
		onSelect={handleSelection}
		name="Yellow"
		className="bg-yellow-400 text-yellow-400"
		color="yellow-400"
	/>
	<ColorButton
		onSelect={handleSelection}
		name="Lime"
		className="bg-lime-400 text-lime-400"
		color="lime-400"
	/>
	<ColorButton
		onSelect={handleSelection}
		name="Green"
		className="bg-green-400 text-green-400"
		color="green-400"
	/>
	<ColorButton
		onSelect={handleSelection}
		name="Teal"
		className="bg-teal-400 text-teal-400"
		color="teal-400"
	/>
	<ColorButton
		onSelect={handleSelection}
		name="Cyan"
		className="bg-cyan-400 text-cyan-400"
		color="cyan-400"
	/>
	<ColorButton
		onSelect={handleSelection}
		name="Blue"
		className="bg-blue-500 text-blue-500"
		color="blue-500"
	/>
	<ColorButton
		onSelect={handleSelection}
		name="Indigo"
		className="bg-indigo-400 text-indigo-400"
		color="indigo-400"
	/>
	<ColorButton
		onSelect={handleSelection}
		name="Violet"
		className="bg-violet-500 text-violet-500"
		color="violet-500"
	/>
	<ColorButton
		onSelect={handleSelection}
		name="Fuchsia"
		className="bg-fuchsia-400 text-fuchsia-400"
		color="fuchsia-400"
	/>
	<ColorButton
		onSelect={handleSelection}
		name="Pink"
		className="bg-pink-400 text-pink-400"
		color="pink-400"
	/>
	<ColorButton
		onSelect={handleSelection}
		name="Rose"
		className="bg-rose-500 text-rose-500"
		color="rose-500"
	/>
	<ColorButton
		onSelect={handleSelection}
		name="White"
		className="bg-neutral-50 text-neutral-50"
		color="neutral-50"
	/>
</div>
