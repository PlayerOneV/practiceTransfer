import router from '@/router';
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    username: ''
  }),
  actions: {
    login(username: string) {
      console.log('login', username)
      if (this.username === username) {
        localStorage.setItem('username', username);
        router.push({ name: 'home'});
      }
    },
    logout() {
      localStorage.removeItem('username')
    }
  }
})
