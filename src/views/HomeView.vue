<script setup>
/*
  imports
*/ 

  import { computed, onMounted, reactive, watch } from 'vue';

  // import global directive
  import { vAutofocus } from '@/directives/vAutofocus'

/*
  Title
*/ 

  const appTitle = 'My Amazing Counter App'

  onMounted(() => {
    console.log('Do stuff related with the appTitle')
  })


/*
  Counter
*/ 

  function increaseCounter(amount) {
    counterData.count += amount
  }

  function decreaseCounter(amount) {
    counterData.count -= amount
  }

  // const counter = ref(0),
  //   counterTitle = ref('My Counter')

  const counterData = reactive({
    count: 0,
    title: 'My Counter'
  })

  // When watching a ref, syntax is watch(count)
  // Use getter when watching a reactive data
  watch(() => counterData.count, (newCount) => {
    if (newCount >= 20) alert('You made it to 20!')
  })

  const oddOrEven = computed(() => {
    return counterData.count % 2 === 0 ? 'even' : 'odd'
  })

  onMounted(() => {
    console.log('Do stuff related with the counter')
  })

/* 
  Local Directives
*/

  // const vAutofocus = {
  //   mounted: (el) => {
  //     el.focus()
  //   }
  // }

</script>



<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>
    <div class="edit">
      <h4>Edit Counter Title:</h4>
      <input
        v-model="counterData.title"
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