<template>
  <template v-if="isLoggedIn">
    <Header />
  </template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/header/Header.vue'
import { useAuthStore } from './stores/auth'

const { isLoggedIn } = useAuthStore()
</script>

<style scoped>
</style>
