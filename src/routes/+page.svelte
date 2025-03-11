<script lang="ts">
	import Message from '$lib/components/Message.svelte';
	import MessageInput from '$lib/components/MessageInput.svelte';
	import MessageWelcome from '$lib/components/MessageWelcome.svelte';
	import { socket } from '$lib/socket';
	import type { MessageType } from '$lib/types';

	let messages: MessageType[] = $state([]);
	socket.on('receive_message', (data) => {
		messages = [...[data], ...messages];
	});

	const handleMessageInput = (message) => {
		if (message) {
			messages = [...[message], ...messages];
		}
	};
</script>

<div class="flex h-screen max-h-screen justify-center py-8">
	<div
		class="flex h-full max-h-screen w-full max-w-sm flex-col rounded-sm border border-neutral-800 bg-neutral-900 shadow-2xl"
	>
		<div class="flex items-center justify-center bg-neutral-800 py-2">
			<div class="text-sm font-semibold">LIVE CHAT</div>
		</div>

		<div class="flex h-full flex-col-reverse overflow-y-auto">
			{#each messages as message}
				{#if message}
					<Message {message} />
				{/if}
			{/each}
			<MessageWelcome />
		</div>
		<div class="bg-neutral-800">
			<MessageInput onMessage={handleMessageInput} />
		</div>
	</div>
</div>
