<template>
  <div class="l-home-page">
    <div class="f-container">
      <UserCardList/>
      <a href="/users" class="load-more-link">もっと見る<span>→</span></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserCardList from '@/components/user_card/UserCardList.vue';
</script>

<style>
.l-home-page {
  background-color: #B6E4E4;
  padding-bottom: 56px;
}

.f-container {
  max-width: 740px;
  margin: 0 auto;
  padding-top: 164px;
  text-align: center;
}

.card-list-container {
  display: flex;
  flex-wrap: wrap;
  gap: 112px 68px;
}

.load-more-link {
  margin: auto;
  margin-top: 56px;
  text-decoration: none;
  display: block
}
</style>