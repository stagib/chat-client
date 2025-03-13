<script lang="ts">
	import Message from '$lib/components/Message.svelte';
	import MessageInput from '$lib/components/MessageInput.svelte';
	import MessageWelcome from '$lib/components/MessageWelcome.svelte';
	import { socket } from '$lib/socket';
	import type { MessageType } from '$lib/types';

	let oldMessages: MessageType[] = $state([]);
	let messages: MessageType[] = $state([]);
	let replyMessage: MessageType | null = $state(null);

	socket.on('old_messages', (data) => {
		oldMessages = [...oldMessages, ...data];
	});

	socket.on('receive_message', (data) => {
		messages = [...[data], ...messages];
	});

	const handleMessageInput = (message: MessageType) => {
		if (message) {
			messages = [...[message], ...messages];
		}
	};

	const handleReply = (message: MessageType) => {
		replyMessage = message;
	};
</script>

<div class="flex h-screen max-h-screen justify-center py-20">
	<div
		class="flex h-full max-h-screen w-full max-w-sm flex-col overflow-hidden rounded-lg border border-neutral-700 bg-neutral-900 shadow-xl shadow-neutral-950"
	>
		<div class="flex items-center justify-center border-b border-neutral-700 py-2">
			<div class="text-sm font-semibold text-neutral-300">LIVE CHAT</div>
		</div>

		<div class="flex h-full flex-col-reverse overflow-y-auto">
			{#each messages as message}
				{#if message}
					<Message {message} onReply={handleReply} />
				{/if}
			{/each}

			<MessageWelcome />

			{#each oldMessages.slice().reverse() as message}
				{#if message}
					<Message {message} onReply={handleReply} />
				{/if}
			{/each}
		</div>

		<MessageInput onMessage={handleMessageInput} bind:replyMessage />
	</div>
</div>
