<script>
	let { username, content } = $props();
</script>

<div class="px-4 py-1 hover:bg-neutral-800">
	<span class="text-sm text-neutral-400">00:00 PM</span>
	<span class="text-sm text-amber-300">{username}</span><span>:</span>
	<span class="text-sm">{content}</span>
</div>
