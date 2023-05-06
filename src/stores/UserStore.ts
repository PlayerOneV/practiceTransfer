import router from '@/router';
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    username: localStorage.getItem('username'),
    returnUrl: {string: ''}
  }),
  actions: {
    login(username: string) {
      console.log('login');
      
      this.username = username;
      if (this.username === username) {
        localStorage.setItem('username', username);
        router.push({ name: 'home'});
      }
    },
    logout() {
      this.username = '';
      localStorage.removeItem('username');
      router.push({ name: 'login'});
    }
  }
})
