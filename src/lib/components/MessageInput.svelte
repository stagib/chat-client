<script lang="ts">
	import { socket } from '$lib/socket';
	import ChatIdentity from './ChatIdentity.svelte';
	import ReplyMenu from './ReplyMenu.svelte';
	import Tooltip from './Tooltip.svelte';

	let { onMessage, replyMessage = $bindable(null) } = $props();
	let showChatIdentity = $state(false);

	// default values for message
	let color = $state('text-yellow-400');
	let username = $state('anonymous');
	let input = $state('');

	const autoResize = (event: Event, reset = false) => {
		const textarea = event.target as HTMLTextAreaElement;
		if (textarea) {
			if (reset) {
				textarea.style.height = 'auto';
				return;
			}
			textarea.style.height = 'auto';
			textarea.style.height = textarea.scrollHeight + 'px';
		}
	};

	const handleInput = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			if (input.length <= 0) return;

			let reply = null;
			if (replyMessage) {
				reply = {
					content: replyMessage.content,
					username: replyMessage.username,
					color: replyMessage.color
				};
			}
			let message = { content: input, username: username, color: color, reply: reply };
			socket.emit('send_message', message);
			onMessage?.(message);
			autoResize(event, true);
			input = '';
			replyMessage = null;
		}
	};
</script>

<div class="relative mt-4">
	<div
		class="mx-2 mb-4 flex border border-neutral-700 {showChatIdentity || replyMessage
			? 'rounded-b-md'
			: 'rounded-md'}"
	>
		<div class="mt-auto mb-1 flex items-center justify-center px-2"></div>

		<textarea
			class="w-full resize-none bg-transparent py-2 text-sm outline-none"
			oninput={autoResize}
			onkeypress={handleInput}
			placeholder="Send a message"
			rows="1"
			bind:value={input}
		></textarea>

		<div class="mt-auto mb-1 flex items-center justify-center px-2">
			<Tooltip position="right-0 bottom-full" message="Chat identity" disabled={showChatIdentity}>
				<button
					class="flex cursor-pointer items-center justify-center rounded-sm bg-transparent p-0.5 text-2xl hover:bg-neutral-700"
					aria-label="chat-identity"
					onclick={() => {
						showChatIdentity = !showChatIdentity;
					}}
					><i class="material-symbols-light--star-outline-rounded"></i>
				</button>
			</Tooltip>
		</div>
	</div>
	<ChatIdentity bind:color bind:username bind:showMenu={showChatIdentity} />
	<ReplyMenu bind:replyMessage />
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
</style>
