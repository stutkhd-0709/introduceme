<template>
  <div class="l-home-page">
    <div class="f-container">
      <div class="card-container">
        <!-- use loop -->
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserCard from '@/components/user_card/UserCard.vue';

</script>

<style>
.l-home-page {
  background-color: #B6E4E4;
}

.f-container {
  max-width: 740px;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 164px
}

.card-container {
  display: flex;
  gap: 0 68px;
}
</style>