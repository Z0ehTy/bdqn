import { defineStore } from 'pinia'

//option store
export const useIndexStore = defineStore('index', {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    }
  } 
})