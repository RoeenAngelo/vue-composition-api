import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'My Counter Title'
  }),
  actions: {
    increaseCounter(n){
      this.count += n
    },
    decreaseCounter(n){
      this.count -= n
    },
  },
  getters: {
    oddOrEven: (state) => {
      return state.count % 2 === 0 ? 'even' : 'odd'
    }
  }
})

