<template>
  <div class="l-header-navigation">
    <template v-for="(navi, idx) in navigations" :key="idx">
      <RouterLink :to="navi">{{ navi }}</RouterLink>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const navigations = ref([
  'Top',
  'Ranking',
  'Explore'
])
</script>

<style>
.l-header-navigation {
  position: relative;
  margin: 0 auto;
  display: flex;
  gap: 0 56px;
  max-width: 1069px;
  padding: 0 16px;
}
</style>