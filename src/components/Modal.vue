<script setup>
import { inject } from 'vue';


const emit = defineEmits(['update:modelValue'])
const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false
	},
	title : {
		type: String,
		default: 'No Title Specified'
	}
})

/*
	Handle Button Click
*/

	function handleButtonClick() {
		emit('update:modelValue', false)
	}

/*
	User Data
*/

	const userData = inject('userData')
</script>


<template>
   <Teleport to="#modals-container">
			<div
				v-if="modelValue"
				class="modal"
			>
				<!-- title using slots -->
				<!-- <h1><slot name="title"></slot></h1> -->

				<!-- title using props -->
				<h1>{{ title }}</h1>
				<slot></slot>
				<button @click="handleButtonClick">Hide modal</button>
				<p>username: {{ userData.username }}</p>
			</div>
		</Teleport>
</template>



<style lang="scss" scoped>
.modal {
    background-color: beige;
    padding: 10px;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
}
</style>