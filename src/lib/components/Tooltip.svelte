<script>
	let { children, position, message } = $props();
</script>

<div class="group relative">
	{@render children()}
	<div class={`${position} absolute hidden group-hover:block`}>
		<div class="rounded-sm bg-neutral-300 px-2 py-1">
			<div class="text-sm font-semibold text-nowrap text-neutral-950">
				{message}
			</div>
		</div>
	</div>
</div>
