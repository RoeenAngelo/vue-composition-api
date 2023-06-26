import { computed, nextTick, onMounted, reactive, watch } from 'vue';

const counterData = reactive({
	count: 0,
	title: 'My Counter'
})


export function useCounter() {
    
    	async function increaseCounter(amount) {
        counterData.count += amount
        await nextTick(() => {
          console.log('do something when the count is updated!')
        })
      }
    
      function decreaseCounter(amount) {
        counterData.count -= amount
      }
    
      // const counter = ref(0),
      //   counterTitle = ref('My Counter')
    
    
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

      return {
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter
      }
}