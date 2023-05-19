<template>
  <div class="l-header-navigation">
    <template v-for="(navi, idx) in navigations" :key="idx">
      <template v-if="navi.route === '/'">
        <RouterLink :to="navi.route" class="nav-item" exact>{{ navi.text }}</RouterLink>
      </template>
      <template v-else>
        <RouterLink :to="navi.route" class="nav-item">{{ navi.text }}</RouterLink>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const navigations = ref([
  {text: 'Top', route: '/'},
  {text: 'Ranking', route: 'ranking'},
  {text: 'Explore', route: 'explore'}
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

a.nav-item {
  color: #9A9696;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.25s; /* 色の変更だけ適用。hoverもcolorがblackになるので適用される */
  padding: 12px 0;
}

a.router-link-active {
  color: black;
  border-bottom: 3px solid black;
  text-decoration: none;
}

a.nav-item:hover {
  color: black;
}
</style>