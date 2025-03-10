<script>
	let { username, content } = $props();
</script>

<div class="max-w-full px-4 py-1 hover:bg-neutral-800">
	{#if false}
		<div class="group relative">
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
			<div class="pointer-events-none absolute bottom-full left-0 z-10 hidden group-hover:block">
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
</div>
