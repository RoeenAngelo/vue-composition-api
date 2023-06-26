<script setup>
/*
	imports
*/
	import { ref } from 'vue';
	import Modal from '../components/Modal.vue';
	import ModalDark from '../components/ModalDark.vue';

/*
	modals
*/

	const showModal = ref(false)
	const showDarkModals = ref(false)
</script>

<template>
    <div class="modals" >
        <h1>Modals</h1>
				<div>
					<label for="">
						Show dark modals?
						<input 
						v-model="showDarkModals"
						type="checkbox">
					</label>
				</div>
        <button @click="showModal = true">Show modal</button>
        <component
					:is="showDarkModals ? ModalDark : Modal"
          v-model="showModal"
					title="My modal title (via prop)"
        >
					<!-- title from slots -->
					<!-- <template v-slot:title>My new title</template> -->

					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quibusdam architecto blanditiis, perferendis      temporibus aut!
					</p>
				</component>
    </div>
</template>



