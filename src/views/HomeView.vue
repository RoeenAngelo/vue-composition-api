<script setup>
/*
  imports
*/ 

  import { computed, nextTick, onMounted, reactive, ref, watch } from 'vue';
  import { useCounterStore } from '../stores/counter';
  // import global directive
  import { vAutofocus } from '@/directives/vAutofocus'

/*
  Title
*/ 

  const appTitle = 'My Amazing Counter App'

  const appTitleRef = ref(null)

  onMounted(() => {
    console.log(`The app title is ${ appTitleRef.value.offsetWidth } px wide!`)
    // console.log('Do stuff related with the appTitle')
  })


/*
  Counter
*/ 

  // const { increaseCounter, counterData, oddOrEven, decreaseCounter } = useCounter() 
  // we can use object destructuring (best practice) or use object dot notation below. Make sure to change the template
  // const counter = useCounter()

  const counter = useCounterStore()
  

/* 
  Local Directives
*/

  // const vAutofocus = {
  //   mounted: (el) => {
  //     el.focus()
  //   }
  // }

</script>counter.



<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ counter.title }}:</h3>
    <div>
      <button @click="counter.decreaseCounter(2)"  class="btn">--</button>
      <button @click="counter.decreaseCounter(1)"  class="btn">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button @click="counter.increaseCounter(1)" class="btn">+</button>
      <button  @click="counter.increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ counter.oddOrEven }}</p>
    <div class="edit">
      <h4>Edit Counter Title:</h4>
      <input
        v-model="counter.title"
        v-autofocus
        type="text"
      >
    </div>
  </div>
  
</template>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn, 
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>