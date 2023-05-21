<template>
  <div class="l-home-page">
    <div class="f-container">
      <UserCardList/>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserCardList from '@/components/user_card/UserCardList.vue';

</script>

<style>
.l-home-page {
  background-color: #B6E4E4;
}

.f-container {
  max-width: 740px;
  margin: 0 auto;
  padding-top: 164px
}

.card-list-container {
  display: flex;
  flex-wrap: wrap;
  gap: 112px 68px;
}
</style>