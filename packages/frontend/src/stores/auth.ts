import { defineStore } from 'pinia'
import type { User } from '@/types/user'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      loginUser: {}
    }
  },
  getters: {
    isLoggedIn: (state) => Object.keys(state.loginUser).length > 0
  },
  actions: {
    setLoginUser(user: User) {
      this.loginUser = user
    }
  }
})