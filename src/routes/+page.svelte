<script>
	import Message from '$lib/components/Message.svelte';
	import MessageInput from '$lib/components/MessageInput.svelte';
	import MessageWelcome from '$lib/components/MessageWelcome.svelte';
</script>

<div class="flex h-screen max-h-screen justify-center py-8">
	<div
		class="flex h-full max-h-screen w-full max-w-sm flex-col rounded-sm border border-neutral-800 bg-neutral-900 shadow-2xl"
	>
		<div class="flex items-center justify-center bg-neutral-800 py-2">
			<div class="text-sm font-semibold">LIVE CHAT</div>
		</div>

		<div class="flex h-full flex-col-reverse overflow-y-auto">
			<MessageWelcome />
			{#each { length: 10 } as _, i}
				<Message
					reply={false}
					username={'username'}
					content={'dsLLSDSMLD LKSMDKLMSDKML MASDLKMASDKLM MSAMMDM'}
				/>
				<Message reply={true} username={'username'} content={'liftstule'} />
				<Message reply={false} username={'username'} content={'ta'} />
				<Message reply={false} username={'username'} content={'nah'} />
				<Message
					reply={true}
					username={'username'}
					content={'raedy lkie sme itne msire windos smk mmm kkk123'}
				/>
			{/each}
		</div>
		<div class="bg-neutral-800">
			<MessageInput />
		</div>
	</div>
</div>
