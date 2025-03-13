<script lang="ts">
	let { replyMessage = $bindable() } = $props();
</script>

{#if replyMessage}
	<div class="flex items-end bg-neutral-950 px-2">
		<div class="flex w-full flex-col overflow-hidden rounded-t-sm bg-neutral-900">
			<div class="flex items-center justify-between">
				<div class="px-4 text-sm text-neutral-300">
					<span>Reply to</span>
					<span>@{replyMessage.username}</span>
				</div>

				<div class="flex items-center justify-center px-4 py-2">
					<button
						class="flex cursor-pointer items-center justify-center rounded-sm text-lg hover:bg-neutral-700"
						aria-label="close"
						onclick={() => {
							replyMessage = null;
						}}
					>
						<i class="material-symbols-light--close-rounded"></i>
					</button>
				</div>
			</div>

			<div class="group/content relative mb-2 max-w-full px-4 py-1 hover:bg-neutral-800">
				{#if replyMessage.time}
					<span class="text-sm text-neutral-400">{replyMessage.time}</span>
				{/if}

				<span class={`text-sm ${replyMessage.color}`}>{replyMessage.username}</span><span>:</span>
				<span class="text-sm break-all">{replyMessage.content}</span>
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
