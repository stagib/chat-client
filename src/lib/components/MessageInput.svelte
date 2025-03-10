<script lang="ts">
	import ChatIdentity from './ChatIdentity.svelte';
	import Tooltip from './Tooltip.svelte';

	let showChatIdentity = $state(false);

	const autoResize = (event: Event) => {
		const textarea = event.target as HTMLTextAreaElement;
		if (textarea) {
			textarea.style.height = 'auto';
			textarea.style.height = textarea.scrollHeight + 'px';
		}
	};
</script>

<ChatIdentity bind:showMenu={showChatIdentity} />

<div class="mx-2 my-4 flex rounded-sm border border-neutral-700">
	<div class="mt-auto mb-1 flex items-center justify-center px-2">
		<Tooltip position="left-0 bottom-full" message="Chat identity">
			<button
				class="flex cursor-pointer items-center justify-center rounded-sm bg-neutral-800 p-0.5 text-2xl hover:bg-neutral-700"
				aria-label="chat-identity"
				onclick={() => {
					showChatIdentity = !showChatIdentity;
				}}
				><i class="material-symbols-light--star-outline-rounded"></i>
			</button>
		</Tooltip>
	</div>

	<textarea
		class="w-full resize-none bg-transparent py-2 text-sm outline-none"
		oninput={autoResize}
		placeholder="Send a message"
		rows="1"
	></textarea>

	<div class="mt-auto mb-1 flex items-center justify-center px-2">
		<Tooltip position="right-0 bottom-full" message="Add reaction">
			<button
				class="flex items-center justify-center rounded-sm p-0.5 text-2xl text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300"
				aria-label="add-reaction"
				><i class="material-symbols-light--add-reaction"></i>
			</button>
		</Tooltip>
	</div>
</div>

<style>
	.material-symbols-light--star-outline-rounded {
		display: inline-block;
		width: 1em;
		height: 1em;
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm3.15-.723l-3.63 2.192q-.16.079-.297.064q-.136-.016-.265-.094q-.13-.08-.196-.226t-.012-.319l.966-4.11l-3.195-2.77q-.135-.11-.178-.263t.019-.293t.165-.23q.104-.087.28-.118l4.216-.368l1.644-3.892q.068-.165.196-.238T12 5.364t.288.073t.195.238l1.644 3.892l4.215.368q.177.03.281.119q.104.088.166.229q.061.14.018.293t-.178.263l-3.195 2.77l.966 4.11q.056.171-.011.318t-.197.226q-.128.08-.265.095q-.136.015-.296-.064zm0-3.852'/%3E%3C/svg%3E");
		background-color: currentColor;
		-webkit-mask-image: var(--svg);
		mask-image: var(--svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}

	.material-symbols-light--add-reaction {
		display: inline-block;
		width: 1em;
		height: 1em;
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M20.5 6.5v-2h-2v-1h2v-2h1v2h2v1h-2v2zm-5.188 4.116q.467 0 .789-.327t.322-.793t-.326-.79q-.327-.321-.794-.321t-.789.326t-.322.793t.327.79q.326.322.793.322m-6.615 0q.466 0 .788-.327q.323-.327.323-.793q0-.467-.327-.79q-.327-.321-.793-.321q-.467 0-.789.326q-.322.327-.322.793q0 .467.326.79q.327.322.794.322M12 16.884q1.459 0 2.65-.789q1.19-.79 1.796-2.095H7.554q.605 1.306 1.796 2.095t2.65.79M12.003 21q-1.867 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51q.709-1.643 1.924-2.859T8.49 3.709T12 3q.998 0 1.94.203q.943.203 1.79.603V6.5h2.75v2.77h2.109q.205.647.308 1.323Q21 11.266 21 12q0 1.868-.708 3.51t-1.924 2.858t-2.856 1.923t-3.509.709'/%3E%3C/svg%3E");
		background-color: currentColor;
		-webkit-mask-image: var(--svg);
		mask-image: var(--svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}
</style>
