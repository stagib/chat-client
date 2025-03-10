<script>
	import Tooltip from './Tooltip.svelte';

	let { username, content, reply } = $props();
</script>

<div class="group/content relative max-w-full px-4 py-1 hover:bg-neutral-800">
	{#if reply}
		<div class="group/reply relative">
			<div class="truncate text-xs break-all text-neutral-400">
				<span
					>Replying to @<span>username</span>:
					<span
						>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente voluptatibus
						sequi molestiae incidunt! Veniam quas fugiat dolore exercitationem. Non exercitationem,
						cum corporis natus quos ipsum fugiat repellendus quis dolor?</span
					></span
				>
			</div>
			<div
				class="pointer-events-none absolute bottom-full left-0 z-10 hidden group-hover/reply:block"
			>
				<div class="rounded-sm bg-neutral-950 p-2 text-xs">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus natus ea at
					omnis labore adipisci aliquam eos ab. Iste molestiae eum nam ea suscipit aut illum
					corrupti beatae accusamus.
				</div>
			</div>
		</div>
	{/if}

	<span class="text-sm text-neutral-400">00:00 PM</span>
	<span class="text-sm text-amber-300">{username}</span><span>:</span>
	<span class="text-sm">{content}</span>

	<!-- hover icons -->
	<div
		class="absolute right-4 bottom-full z-20 hidden translate-y-1/2 gap-1 group-hover/content:block"
	>
		<div class="flex gap-1">
			<Tooltip position="bottom-full right-0" message="Copy">
				<button
					class="flex cursor-pointer items-center justify-center rounded-sm bg-neutral-950 p-1 hover:bg-neutral-900"
					aria-label="copy"
				>
					<i class="material-symbols-light--content-copy"></i>
				</button>
			</Tooltip>
			<Tooltip position="bottom-full right-0" message="Reply">
				<button
					class="flex cursor-pointer items-center justify-center rounded-sm bg-neutral-950 p-1 hover:bg-neutral-900"
					aria-label="reply"
				>
					<i class="material-symbols-light--reply"></i>
				</button>
			</Tooltip>
		</div>
	</div>
</div>

<style>
	.material-symbols-light--reply {
		display: inline-block;
		width: 1em;
		height: 1em;
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M19 18v-3q0-1.442-1.029-2.471T15.5 11.5H5.921l4.1 4.1l-.713.708L4 11l5.308-5.308l.713.708l-4.1 4.1H15.5q1.864 0 3.182 1.318T20 15v3z'/%3E%3C/svg%3E");
		background-color: currentColor;
		-webkit-mask-image: var(--svg);
		mask-image: var(--svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}

	.material-symbols-light--content-copy {
		display: inline-block;
		width: 1em;
		height: 1em;
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M9.116 17q-.691 0-1.153-.462T7.5 15.385V4.615q0-.69.463-1.153T9.116 3h7.769q.69 0 1.153.462t.462 1.153v10.77q0 .69-.462 1.152T16.884 17zm-3 3q-.691 0-1.153-.462T4.5 18.385V6.615h1v11.77q0 .23.192.423t.423.192h8.77v1z'/%3E%3C/svg%3E");
		background-color: currentColor;
		-webkit-mask-image: var(--svg);
		mask-image: var(--svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}
</style>
