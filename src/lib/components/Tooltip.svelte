<script>
	let { children, position, message, disabled = false } = $props();
</script>

<div class="group relative">
	{@render children()}
	{#if !disabled}
		<div class={`${position} pointer-events-none absolute hidden group-hover:block`}>
			<div class="rounded-sm bg-neutral-300 px-2 py-1">
				<div class="text-sm font-semibold text-nowrap text-neutral-950">
					{message}
				</div>
			</div>
		</div>
	{/if}
</div>
