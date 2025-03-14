<script lang="ts">
	import ColorButtonSection from './ColorButtonSection.svelte';

	let { showMenu = $bindable(false), color = $bindable('text-yellow-400') } = $props();

	const handleColorChange = (c: string) => {
		color = `text-${c}`;
	};
</script>

{#if showMenu}
	<div class="absolute bottom-full z-40 w-full px-2">
		<div
			class="flex flex-col overflow-hidden rounded-t-md border border-b-0 border-neutral-700 bg-neutral-900"
		>
			<div class="grid grid-cols-3 bg-neutral-800 px-4 py-2">
				<div></div>
				<div class="flex items-center justify-center text-sm font-semibold">Chat Identity</div>
				<div class="flex items-center justify-end">
					<button
						class="flex cursor-pointer items-center justify-center rounded-sm text-2xl hover:bg-neutral-700"
						aria-label="close"
						onclick={() => {
							showMenu = false;
						}}
					>
						<i class="material-symbols-light--close-rounded"></i>
					</button>
				</div>
			</div>

			<div class="bg-neutral-800 px-4 pb-4">
				<div class="text-sm font-semibold text-neutral-400">PREVIEW</div>
				<div class="mb-1 text-sm text-neutral-400">
					Preview how your name will appear in the chat.
				</div>
				<div class={`text-sm ${color}`}>username</div>
			</div>

			<div class="px-4 py-4">
				<div class="mb-1 text-sm font-semibold text-neutral-400">USERNAME</div>
				<div class="flex overflow-hidden rounded-sm">
					<input
						class="w-full bg-neutral-800 px-2 py-1 outline-none"
						placeholder="username"
						value="username"
					/>
					<button class="cursor-pointer bg-neutral-700 px-2 py-1 hover:bg-neutral-600">Save</button>
				</div>
			</div>

			<div class="px-4 py-4">
				<div class="mb-1 text-sm font-semibold text-neutral-400">NAME COLOR</div>
				<ColorButtonSection onColorChange={handleColorChange} />
			</div>
		</div>
	</div>
{/if}

<style>
	.material-symbols-light--close-rounded {
		display: inline-block;
		width: 1em;
		height: 1em;
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m12 12.708l-5.246 5.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L12 11.292l5.246-5.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354L12.708 12l5.246 5.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16z'/%3E%3C/svg%3E");
		background-color: currentColor;
		-webkit-mask-image: var(--svg);
		mask-image: var(--svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}
</style>
