<template>
  <div class="card-list-container">
    <template v-for="(user, idx) in users" :key="idx">
      <UserCard :user="user"/>
    </template>
  </div>
</template>

<script setup lang="ts">
import UserCard from "./UserCard.vue"
import { ref } from 'vue'

const users = ref([
  {
    name: 'Akira',
    descriptions: {
      short_self_intro: 'よろしくお願いします！'
    }
  },
  {
    name: 'Kenji',
    descriptions: {
      short_self_intro: 'よろしくお願いします！'
    }
  },
  {
    name: 'Akiko',
    descriptions: {
      short_self_intro: 'よろしくお願いします！'
    }
  },
  {
    name: 'Eri',
    descriptions: {
      short_self_intro: 'よろしくお願いします！'
    }
  },
  {
    name: 'Satoru',
    descriptions: {
      short_self_intro: 'よろしくお願いします！'
    }
  },
  {
    name: 'Goro',
    descriptions: {
      short_self_intro: 'よろしくお願いします！'
    }
  }
])

</script>

<style>
.user-card {
  background-color: white;
  padding: 4px 0;
  border-radius: 24px;
}

.user-card-container {
  width: 200px;
  height: 200px;
}
</style>