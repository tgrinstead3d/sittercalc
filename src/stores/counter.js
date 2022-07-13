import { defineStore } from 'pinia'

export const useWageStore = defineStore({
  id: 'wage',
  state: () => ({
    counter: 0
  }),
  getters: {
  
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
