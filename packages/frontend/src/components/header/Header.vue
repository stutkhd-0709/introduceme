<template>
  <header class="l-header">
    <div class="l-header-title">IntroduceMe</div>
  </header>
  <HeaderNavigation />
</template>

<script setup lang="ts">
import HeaderNavigation from './HeaderNavigation.vue'
</script>

<style>
.l-header {
  position: relative;
  margin: 0 auto;
  max-width: 1069px;
  padding: 0 16px;
}

.l-header-title {
  font-family: Comfortaa;
  font-size: 32px;
  margin-top: 28px;
  margin-bottom: 36px;
}
</style>