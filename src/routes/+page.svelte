<script>
	import Message from '$lib/components/Message.svelte';
	import MessageInput from '$lib/components/MessageInput.svelte';
</script>

<div class="flex h-screen max-h-screen justify-center py-8">
	<div
		class="flex h-full max-h-screen w-full max-w-sm flex-col rounded-sm border border-neutral-800 bg-neutral-950"
	>
		<div class="flex items-center justify-center border-b border-neutral-800 py-2">
			<div class="text-sm font-semibold">LIVE CHAT</div>
		</div>

		<div class="flex h-full flex-col-reverse overflow-y-auto">
			{#each { length: 30 } as _, i}
				<Message username={'username'} content={'dsLLSDSMLD LKSMDKLMSDKML MASDLKMASDKLM MSAMMDM'} />
				<Message username={'username'} content={'liftstule'} />
				<Message username={'username'} content={'ta'} />
				<Message username={'username'} content={'nah'} />
				<Message
					username={'username'}
					content={'raedy lkie sme itne msire windos smk mmm kkk123'}
				/>
			{/each}
		</div>

		<MessageInput />
	</div>
</div>
